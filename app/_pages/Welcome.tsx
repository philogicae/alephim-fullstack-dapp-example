'use client'
import {} from 'react-icons/fa6'
import { Link } from 'react-router-dom'

export default function Welcome() {
  return (
    <div className="flex flex-col w-full h-full items-center justify-between manual-y-center overflow-hidden pb-20">
      <div className="flex flex-col w-full items-center justify-center font-mono mb-12">
        <span className="text-3xl mb-8 border rounded-lg py-2 px-3 text-center">
          Aleph.im Fullstack Dapp Example
        </span>
        <span className="text-xl font-light text-amber-400 text-center">
          Build anything 100% decentralized
        </span>
      </div>
      <div className="flex flex-col w-72 items-start justify-center text-lg">
        <span className="text-xl text-cyan-300 underline mb-4">Showcase</span>
        <a
          className="text-purple-400 items-center justify-between flex flex-row w-full"
          href="/docs"
        >
          <span className="text-violet-400">Swagger:</span>
          <span>/docs</span>
        </a>
        <a
          className="text-purple-400 items-center justify-between flex flex-row w-full"
          href="/api/hello"
        >
          <span className="text-violet-400">GET:</span>
          <span>/api/hello</span>
        </a>
        <a
          className="text-purple-400 items-center justify-between flex flex-row w-full"
          href="/api/user/vitalik"
        >
          <span className="text-violet-400">GET:</span>
          <span>{'/api/user/<username>'}</span>
        </a>
        <a
          className="text-purple-400 items-center justify-between flex flex-row w-full"
          href="/api/completion"
        >
          <span className="text-violet-400">POST:</span>
          <span>/api/completion</span>
        </a>
        <Link
          className="text-green-400 mt-4 items-center justify-between flex flex-row w-full"
          to="profile/vitalik"
        >
          <span className="text-lime-500">Page1: </span>
          <span>/#/profile/username</span>
        </Link>
        <Link
          className="text-green-400 items-center justify-between flex flex-row w-full"
          to="assistant"
        >
          <span className="text-lime-500">Page2: </span>
          <span>/#/assistant</span>
        </Link>
      </div>
    </div>
  )
}
