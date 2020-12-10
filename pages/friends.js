import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import SideNav from "../components/SideNav"

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
  }
]

function Friends(){
  return (
    <>
      <Navbar />
      <SideNav/>
      <div className="relative flex w-full min-h-screen md:w-2/3">
        <main className="flex-1">
          <div className="px-2 py-1 mt-20 text-center md:m-8">
            <div className="relative left-0 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-4">
              {friends.map((friend)=> {
                return (
                  <>
                    <div className='mb-4'>
                      <a href={friend.url} className='font-bold'>
                        <img src={friend.avatar} className='gambar-teman border-current' />
                        <br/>{friend.name}</a>
                    </div>
                  </>
                )
              })}
            </div>

          </div>
          <Footer />
        </main>
      </div>
    </>
  )
}
export default Friends
