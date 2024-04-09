'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Loading from '@pages/Loading'

export default function Custom404() {
  const router = useRouter()
  useEffect(() => {
    router.replace('/#/404')
  }, [])
  return <Loading />
}
