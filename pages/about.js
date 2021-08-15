import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import SideNav from '../components/SideNav'
import Head from 'next/head'

function About() {
  return (
    <>
      <Head>
        <title>About | Nekonako</title>
        <meta
          data-hid="og:image"
          property="og:image"
          content="/assets/nako.jpg"
        />
        <meta property="og:image" content="/assets/nako.jpg" />
      </Head>
      <Navbar />
      <SideNav />
      <div className="relative flex w-full min-h-screen md:w-2/3">
        <main className="flex-1">
          <div className="min-h-screen px-4 py-1 mt-20 md:m-8">
            <div className="text-2xl font-bold">
              {' '}
              <span className="text-accent"># </span>
              Hello everyone
            </div>
            My name is galih wisnuaaji, a 19 year old boy from Pekalongan,
            Indonesia.
            <br />I am a linux enthusiast and coder with lua and javascript as
            the main programming language
            <div className="pt-8 text-2xl font-bold">
              <span className="text-accent"># </span>
              Contact
            </div>
            <a href="mailto:code.yuune@gmail.com" rel="external noopener">
              ne.nekonako@gmail.com
            </a>
          </div>
          <Footer />
        </main>
      </div>
    </>
  )
}

export default About
