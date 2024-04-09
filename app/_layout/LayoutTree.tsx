'use client'
import { useEffect, useState } from 'react'
import ConnectKit from '@layout/ConnectKit'
import Navbar from '@layout/Navbar'
import Loading from '@pages/Loading'

export default function Layout({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false)
  if (typeof window !== 'undefined') {
    const storedVersion = localStorage.getItem('appVersion')
    if (storedVersion !== process.env.appVersion) {
      localStorage.setItem('appVersion', process.env.appVersion as string)
      window.location.reload()
    }
  }
  useEffect(() => {
    setReady(true)
  }, [])
  return ready ? (
    <ConnectKit>
      <Navbar>{children}</Navbar>
    </ConnectKit>
  ) : (
    <Loading />
  )
}
