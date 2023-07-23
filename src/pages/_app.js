import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import '@/styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import { League_Spartan } from 'next/font/google'
import Head from 'next/head'
import { useRouter } from 'next/router'


const league_Spartan = League_Spartan({
  subsets: ['latin'],
  variable: "--font-spar"
})

export default function App({ Component, pageProps }) {
    const router = useRouter();
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://www.saashub.com/images/app/service_logos/42/badb7fec4e6b/large.png?1554651643"/>
      </Head>
      <main className={`${league_Spartan.variable} font-spar bg-light dark:bg-dark w-full min-h-screen`}>
        <NavBar />
        <AnimatePresence mode='wait'>
          <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
        <Footer />
      </main>
    </>
  )
}
