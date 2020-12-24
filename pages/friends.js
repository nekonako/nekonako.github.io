import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import SideNav from "../components/SideNav"
import Head from 'next/head'
import Masonry from 'react-masonry-css'
import Link from 'next/link'

const friends = [
  {
    name : "Addy",
    avatar : "https://avatars2.githubusercontent.com/u/7688126",
    url : "https://addy-dclxvi.github.io/"
  },
  {
    name : "Epsi",
    avatar : "https://avatars1.githubusercontent.com/u/52365",
    url : "https://epsi-rns.github.io/"
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

const ricing = [
  {
    img : '/assets/ricing/nako-classic.png'
  },
  {
    img: '/assets/ricing/fuel.png'
  },
  {
    img: '/assets/ricing/furare-girl.png'
  },
   {
    img: '/assets/ricing/furare-girl-1.png'
  },
  {
    img: '/assets/ricing/palenight-i3.png'
  },
 ]

const breakpointColumnsObj = {
  default: 2,
  1100: 3,
  700: 2,
  500: 1
};

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
          <div className='my-8 text-2xl font-bold'>Friends List</div>
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
        <span className='footer'></span>
        <div className='m-4 md:m-20'>
          <div className='py-4 text-2xl font-bold'>Ricing Journey</div>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {ricing.map((ricing)=> {
            return(
              <>
                
                <Link href={ricing.img}>
                <div className='overflow-hidden rounded-sm shadow-lg'>
                  <img src={ricing.img}/>
                </div>
                  </Link>
              </>
            )
          })}
        </Masonry>
          </div>
        <Footer />
      </div>
    </>
  )
}
export default Friends
