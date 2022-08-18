import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import Navbar from '../components/navbar'
import Feature from '../components/feature-header'
import Footer from '../components/footer'
import FeatureList from '../components/feature-list'
import Content from '../components/content-block'
import { useRef, useContext } from 'react'
import { ScrollContext } from '../components/scroll-observer'
import Testimonial from '../components/testimonial'
import ContactForm from '../components/email-form'
const Home: NextPage = () => {

  return (
    <div>
      <div >
        <Navbar />
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
        </Head>

        <div className='ease-in-out duration-300 -z-50 pb-3 drop-shadow-md 
       bg-white'>

          <Header />

        </div>
        <div className='drop-shadow-lg relative bg-white z-40'>
          <Feature />
        </div>

      </div>
      <div className="pb-3 drop-shadow-md bg-gradient-to-b from-primary to-blue-100">
        <Content />
        <FeatureList />
        <Testimonial />


      </div>

      <Footer />
    </div>
  )
}

export default Home
