"use client"

import React, { useState } from 'react'
import config from '@/rainbowKitConfig'
import { WagmiProvider } from 'wagmi'
import { RainbowKitProvider, ConnectButton } from '@rainbow-me/rainbowkit'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import '@rainbow-me/rainbowkit/styles.css'

function Providers(
    props: {
        children: React.ReactNode
    }
) {

    const [queryClient] = useState(() => new QueryClient())
  return (
    <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
            <RainbowKitProvider>

                {props.children}
            </RainbowKitProvider>
        </QueryClientProvider>
    </WagmiProvider>
  )
}

export default Providers