'use client'
import Image from 'next/image'
import { ConnectKitButton } from 'connectkit'
import { FaGithub, FaXTwitter } from 'react-icons/fa6'

export default function Navbar({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="absolute flex flex-col w-full h-full items-center justify-center"
      id="layout"
    >
      <div className="flex flex-col w-full h-full items-center justify-start">
        <div
          className="flex flex-row w-full h-20 items-center justify-between"
          id="topbar"
        >
          <a
            className="flex flex-row items-center"
            href={window.location.origin + '/#/'}
          >
            <Image
              src="/192x192.png"
              alt="alephim-fullstack-dapp-example"
              width={64}
              height={64}
              className="px-2"
            />
            <span className="text-2xl">Aleph Dapp</span>
          </a>
          <div className="pr-3">
            <ConnectKitButton showBalance={true} />
          </div>
        </div>
        <div className="flex flex-col w-full h-full items-start justify-center pt-8 sm:pt-0 px-2">
          {children}
        </div>
        <div className="flex flex-row w-full h-9 items-center justify-between p-2 text-sm font-mono text-cyan-300">
          <div className="flex flex-row h-5">
            <a
              href="https://aleph.im/"
              target="_blank"
              rel="noopener noreferrer"
              className="pb-0.5 hover:text-white active:text-white text-blue-600 border-r-[1px] border-cyan-600 pr-2 mr-2"
            >
              <span>Aleph.im</span>
            </a>
            <a
              href="https://www.twentysix.cloud/"
              target="_blank"
              rel="noopener noreferrer"
              className="pb-0.5 hover:text-white active:text-white text-lime-400 border-r-[1px] border-cyan-600 pr-2 mr-2"
            >
              <span>TwentySix</span>
            </a>
            <a
              href="https://libertai.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="pr-1 pb-0.5 hover:text-white active:text-white text-violet-500"
            >
              <span>Libertai</span>
            </a>
          </div>
          <div className="flex flex-row">
            <a
              href="https://github.com/philogicae/alephim-fullstack-dapp-example"
              target="_blank"
              rel="noopener noreferrer"
              className="pr-1 pb-0.5 hover:text-white active:text-white"
            >
              <FaGithub />
            </a>
            <a
              href="https://twitter.com/philogicae"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter className="hover:text-white active:text-white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
