'use client'
import { WagmiProvider, createConfig } from 'wagmi'
import { ConnectKitProvider, getDefaultConfig } from 'connectkit'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {
  sepolia,
  polygonMumbai,
  arbitrumSepolia,
  optimismSepolia,
} from 'wagmi/chains'

const url = 'https://aleph-dapp.binaryeyelabs.xyz'
if (!process.env.NEXT_PUBLIC_WALLETCONNECT_ID)
  throw new Error(
    'You need to provide NEXT_PUBLIC_WALLETCONNECT_ID env variable'
  )

const chains = [
  sepolia,
  polygonMumbai,
  arbitrumSepolia,
  optimismSepolia,
] as const

const config = createConfig(
  getDefaultConfig({
    walletConnectProjectId: process.env.NEXT_PUBLIC_WALLETCONNECT_ID,
    chains,
    appName: 'alephim-fullstack-dapp-example',
    appDescription: 'alephim-fullstack-dapp-example',
    appUrl: url,
    appIcon: url + '/192x192.png',
  })
)
const queryClient = new QueryClient()

export default function ConnectKit({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider
          theme="midnight"
          options={{
            embedGoogleFonts: true,
            walletOnboardingUrl:
              window.screen.width >= 1280
                ? 'https://rabby.io'
                : 'https://metamask.io/download',
          }}
          customTheme={{
            '--ck-overlay-backdrop-filter': 'blur(1px)',
          }}
        >
          {children}
        </ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
