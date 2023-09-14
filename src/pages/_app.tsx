import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'

import Header from '@/components/header'

import '@/styles/globals.scss'
import '@/styles/constants/color.scss'
import '@/styles/constants/font.scss'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
    </RecoilRoot>
  )
}
