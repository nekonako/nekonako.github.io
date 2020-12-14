import React  from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import SideNav from "../components/SideNav"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import Head from 'next/head'


function About() {
  return (
    <>
      <Head>
        <title>About | Nekonako</title>
        <meta data-hid="og:image" property="og:image" content="/assets/nako.jpg"/>
         <meta property='og:image' content="/assets/nako.jpg" />
        </Head>
              <Navbar />
          <SideNav/>
          <div className="relative flex w-full min-h-screen md:w-2/3">
            <main className="flex-1">
              <div className="min-h-screen px-4 py-1 mt-20 md:m-8">
                <div className="text-2xl font-bold"> <span className="text-accent"># </span>
                  Hallo Semuanya</div> Nama saya Galih Wisnuaji.
                <br/>
               Cuma orang biasa yang suka menghabiskan waktu dengan penguin dan honocorokoscript.
                
                {/* <div className="pt-8 text-2xl font-bold"> */}
                {/*   <span className="text-accent"># </span> */}
                {/*   Skills */}
                {/* </div> */}
                {/* <div className="pt-4 pb-3 font-bold"> <span className="text-accent"> */}
                {/*   <FontAwesomeIcon icon={faCaretRight} /> */}
                {/* </span> Team work</div> */}
                {/* <div className="relative h-3 max-w-xl overflow-x-hidden rounded-full"> */}
                {/*   <div className="absolute w-full h-full bg-gray-600"></div> */}
                {/*   <div className="absolute w-4/5 h-full bg-accent"></div> */}
                {/* </div> */}
                {/* <div className="pt-8 pb-3 font-bold"> <span className="text-accent"> */}
                {/*   <FontAwesomeIcon icon={faCaretRight} /> */}
                {/* </span> Problem solving</div> */}
                {/* <div className="relative h-3 max-w-xl overflow-x-hidden rounded-full"> */}
                {/*   <div className="absolute w-full h-full bg-gray-600"></div> */}
                {/*   <div className="absolute h-full bg-accent" style={{width:"84%"}}></div> */}
                {/* </div> */}
                {/* <div className="pt-8 pb-3 font-bold"> <span className="text-accent"> */}
                {/*   <FontAwesomeIcon icon={faCaretRight} /> */}
                {/* </span> React</div> */}
                {/* <div className="relative h-3 max-w-xl overflow-x-hidden rounded-full"> */}
                {/*   <div className="absolute w-full h-full bg-gray-600"></div> */}
                {/*   <div className="absolute w-1/2 h-full bg-accent"></div> */}
                {/* </div> */}
                {/* <div className="pt-8 pb-3 font-bold"> <span className="text-accent"> */}
                {/*   <FontAwesomeIcon icon={faCaretRight} /></span> Linux</div> */}
                {/* <div className="relative h-3 max-w-xl overflow-x-hidden rounded-full"> */}
                {/*   <div className="absolute w-full h-full bg-gray-600"></div> */}
                {/*   <div className="absolute h-full bg-accent" style={{width:"78%"}}></div> */}
                {/* </div> */}
                <div className="pt-8 text-2xl font-bold">
                  <span className="text-accent"># </span>
                  Kontak</div>
                Galih wisnuaji
                <br/>
               <a href="mailto:code.yuune@gmail.com" rel="external noopener">ne.nekonako@gmail.com</a>
              </div>
              <Footer />
            </main>
          </div>
    </>
  )
}

export default About
