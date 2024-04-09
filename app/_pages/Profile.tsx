'use client'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const fetch_profile = async (username: string) => {
  const res = await fetch(window.location.origin + '/api/user/' + username)
  return res.json()
}

export default function Profile() {
  const { username } = useParams()
  const [profile, setProfile] = useState('')
  useEffect(() => {
    fetch_profile(username as string).then((data) => setProfile(data))
  }, [])
  return (
    <div className="flex flex-col w-full h-full items-center manual-y-center text-2xl">
      <span className="mb-2">Fetch Profile from API endpoint:</span>
      <span className="font-mono text-amber-400">/api/user/{username}</span>
      <span className="mt-6 mb-2">Returned:</span>
      <span className="font-mono text-cyan-300 mb-4">
        {profile ? JSON.stringify(profile, null, 2) : 'null'}
      </span>
    </div>
  )
}
