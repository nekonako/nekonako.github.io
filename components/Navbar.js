import React from 'react'
import Link from 'next/link'
import siteData from '../site-data'

import dynamic from 'next/dynamic'
const LineIcon = dynamic(
   () => import('react-lineicons'),
   {ssr : false}
)

function openNav() {
  document.getElementById("sideNav").style.height = "100%";
}
function closeNav() {
  document.getElementById("sideNav").style.height = "0";
}

function Navbar() {
  return (
    <>
      <div id="navbar" className="fixed z-10 flex-row w-full align-middle md:hidden lg:hidden xl:hidden ">
        <div className="flex items-center justify-between px-6 h-14 bg-secondary">
          <a href="https://github.com/nekonako">
            <img src="https://avatars.githubusercontent.com/u/46141275" alt="nekonako" width="32px" className="border-2 rounded-full text-accent border-current"/>
          </a>
          <span className="text-2xl font-bold"><Link href="/" >Nekonako</Link></span>
          <a onClick={openNav} className="md:hidden" data-target="navMenu">
            <i className="font-bold"><LineIcon name='menu'/></i>
          </a>
        </div>
        <div id="sideNav" className="flex flex-col justify-center inline-block w-full text-center mt-14 bg-primary sidenav">
          <div className="sidenav-content">
            <Link href="/">Home</Link>
            <Link href="/posts">Articles</Link>
            <Link href="/friends">friends</Link>
            <Link href="/about">About</Link>
            <div style={{marginTop:"20%"}} className="flex flex-row items-center justify-center inline-block align-middle">
              <a href={siteData.contact.github} target="blank" className="font-bold ">
                <span className="p-0 text-xl">
                  <i><LineIcon name='github'/></i>
                </span>
              </a>
              <a href={siteData.contact.twitter} target="blank" className="font-bold">
                <span  className="p-0 text-xl">
                  <i><LineIcon name='twitter'/></i>
                </span>
              </a>
              <a href={siteData.contact.email} target="blank" className="font-bold ">
                <span  className="p-0 text-xl">
                  <i><LineIcon name='envelope' /></i>
                </span>
              </a>
              <a href={siteData.contact.telegram} target="blank" className="font-bold ">
                <span  className="p-0 text-xl">
                  <i><LineIcon name='telegram'/></i>
                </span>
              </a>
            </div>

            <a href="javascript:void(0)" onClick={closeNav}  style={{marginTop:'5%'}}  className="text-xl font-bold contents closebtn">
              <i className=" has-text-dark is-size-3"><LineIcon /></i>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
