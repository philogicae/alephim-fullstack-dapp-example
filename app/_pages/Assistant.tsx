'use client'
import Typebox from '@components/Typebox'
import { useState } from 'react'

const fetch_completion = async (prompt: string) => {
  return await fetch(window.location.origin + '/api/completion', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ prompt }),
  })
}

export default function Assistant() {
  const [prompt, setPrompt] = useState('')
  const [response, setResponse] = useState('')
  const completion = async (fetching?: (value: boolean) => void) => {
    if (fetching) fetching(true)
    try {
      const res = await fetch_completion(prompt)
      if (res.ok) {
        const data = await res.json()
        console.log(data)
        setResponse(data['text'])
      } else {
        console.error('Request failed:', res.status)
      }
    } catch (error) {
      console.error('Request error:', error)
    }
    if (fetching) fetching(false)
  }
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="flex flex-col items-center justify-center h-min p-3 w-96">
        <Typebox
          className="w-full !h-28"
          placeholder="Submit your question"
          value={prompt}
          onChange={setPrompt}
          onClick={completion}
        />
        <div className="w-full h-96 p-1">
          <div className="w-full h-full px-3 py-2 bg-gray-900 rounded text-amber-300">
            {response}
          </div>
        </div>
        <a
          className="text-blue-700 hover:text-cyan-300 active:text-cyan-300"
          href="https://libertai.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Decentralized open-source AI powered by Libertai.io
        </a>
      </div>
    </div>
  )
}
