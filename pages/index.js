import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Nicholas Bortz ⚡︎ Software Engineer</title>
        <meta name="Portfolio" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='flex justify-center'>
      <Navbar></Navbar>
      </div>

      <div className='flex justify-center mt-4'>
      <h2 className='text 3xl font-bold'>Portfolio</h2>
      </div>
      
    </div>
  )
}
