import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'

import Header from '@/components/header'
import Search from '@/components/search'

import '@/styles/globals.scss'
import '@/styles/constants/color.scss'
import '@/styles/constants/font.scss'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Header />
      <Search />
      <main>
        <Component {...pageProps} />
      </main>
    </RecoilRoot>
  )
}
