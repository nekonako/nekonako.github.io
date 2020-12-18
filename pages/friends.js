import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import SideNav from "../components/SideNav"
import Head from 'next/head'

const friends = [
  {
    name : "Addy",
    avatar : "https://avatars2.githubusercontent.com/u/7688126",
    url : "https://addy-dclxvi.github.io/"
  },
  {
    name : "Epsi",
    avatar : "https://avatars1.githubusercontent.com/u/52365",
    url : "epsi-rns.github.io/"
  },
  {
    name : "Bandithijo",
    avatar : "https://avatars2.githubusercontent.com/u/3227736",
    url : "https://bandithijo.github.io"
  },
  {
    name : "Nanda",
    avatar : "https://avatars2.githubusercontent.com/u/9277632",
    url : "https://okitavera.netlify.app"
  },
  {
    name : "Widi",
    avatar : "https://avatars0.githubusercontent.com/u/54144923",
    url: "https://technisekai.github.io"
  },
]

function Friends(){
  return (
    <>
      <Head>
        <title>Friends | Nekonako </title>
        <meta data-hid="og:image" property="og:image" content="/assets/nako.jpg"/>
        <meta property='og:image' content="/assets/nako.jpg" />
      </Head>
      <Navbar />
      <SideNav/>
      <div className="relative flex flex-col w-full md:w-2/3">
        <div className='flex-1 mt-20 text-center md:p-8 md:mt-0'>
          <div className='my-8 text-xl font-bold'>Friendlist</div>
          {friends.map((friend)=> {
            return (
              <>
                <div className='inline-block'>
                  <a href={friend.url} className='inline-block m-4 font-bold'>
                    <img src={friend.avatar} className='w-32 gambar-teman' />
                    <br/>{friend.name}</a>
                </div>
              </>
            )
          })}
        </div>
        <Footer />
      </div>
    </>
  )
}
export default Friends
