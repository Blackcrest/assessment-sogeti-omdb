import "../styles/main.scss"

import Head from "next/head"

import { Layout } from "../components/Layout"
import { GlobalStateProvider } from "../providers/globalState"

import type { AppProps } from 'next/app'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>
          Sogeti Assessment OMDB - Patrick Lassche - {new Date().getFullYear()}
        </title>
      </Head>
      <GlobalStateProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </GlobalStateProvider>
    </>
  )
}

export default MyApp
