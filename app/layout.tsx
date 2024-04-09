import './globals.css'
import type { Metadata, Viewport } from 'next'
import { Roboto } from 'next/font/google'
import Layout from '@layout/LayoutTree'

const font = Roboto({
  subsets: ['latin'],
  variable: '--font-local',
  weight: '400',
  preload: true,
})

const url = 'https://aleph-dapp.binaryeyelabs.xyz'

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: 'Aleph Dapp',
  description: 'alephim-fullstack-dapp-example',
  applicationName: 'alephim-fullstack-dapp-example',
  appLinks: {
    web: {
      url: url,
      should_fallback: true,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/192x192.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    title: 'alephim-fullstack-dapp-example',
    description: 'alephim-fullstack-dapp-example',
    url: url,
    siteName: 'alephim-fullstack-dapp-example',
    images: [
      {
        url: url + '/192x192.png',
        width: 192,
        height: 192,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'alephim-fullstack-dapp-example',
    description: 'alephim-fullstack-dapp-example',
    images: [url + '/192x192.png'],
  },
}

export const viewport: Viewport = {
  themeColor: 'black',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={font.variable}>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
