import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className='flex justify-center'>
      <Head>
        <title>Nicholas Bortz | Software Engineer</title>
        <meta name="Portfolio" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className=''>
      <h2 className='text 3xl font-bold underline'>My Portfolio</h2>
      </div>
      
    </div>
  )
}
