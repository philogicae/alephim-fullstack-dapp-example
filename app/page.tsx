'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createHashRouter, RouterProvider, redirect } from 'react-router-dom'
import Welcome from '@pages/Welcome'
import Error from '@pages/Error'
import Loading from '@pages/Loading'
import Profile from '@pages/Profile'
import Assistant from '@pages/Assistant'

export default function Home() {
  const router = useRouter()
  useEffect(() => {
    if (window.location.pathname + window.location.hash === '/')
      router.replace('/#/')
  }, [])
  const hashRouter = createHashRouter([
    { path: '', element: <Welcome /> },
    { path: 'profile/:username', element: <Profile /> },
    { path: 'assistant', element: <Assistant /> },
    { path: '404', element: <Error /> },
    { path: '*', loader: async () => redirect('404') },
  ])
  return (
    <RouterProvider
      router={hashRouter}
      fallbackElement={<Loading />}
      future={{ v7_startTransition: true }}
    />
  )
}
