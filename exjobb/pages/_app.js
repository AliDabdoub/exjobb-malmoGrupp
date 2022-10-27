import 'styles/globals.css'
import Navbar from '../src/components/Navbar'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <title>Capsule Collective</title>
      <link rel="favicon" href="\icon1correct.ico" />
    </Head>

  <Component {...pageProps} />
  </>
  
}

export default MyApp
