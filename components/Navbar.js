import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)

import Link from 'next/link'
import siteData from '../site-data'

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
        <div className="flex items-center justify-between h-16 px-6 postBorder bg-secondary">
          <a href="https://github.com/nekonako">
            <img src="https://avatars.githubusercontent.com/u/46141275" alt="nekonako" width="32px" className="border-2 rounded-full text-accent border-current"/>
          </a>
          <span className="text-2xl font-bold"><Link href="/" >Nekonako</Link></span>
          <a onClick={openNav} className="md:hidden" data-target="navMenu">
            <i className="font-bold"><FontAwesomeIcon icon={faBars}/></i>
          </a>
        </div>
        <div id="sideNav" className="fixed top-0 left-0 z-0 flex flex-col justify-center inline-block w-full mt-16 overflow-hidden text-center bg-primary nav">
          <div className="relative flex flex-col w-full">
            <Link href="/">Home</Link>
            <Link href="/posts">Articles</Link>
            <Link href="/friends">friends</Link>
            <Link href="/about">About</Link>
            <div style={{marginTop:"20%"}} className="flex flex-row items-center justify-center inline-block align-middle">
              <a href={siteData.contact.github} target="blank" className="font-bold ">
                <span className="p-0 text-xl">
                  <i><FontAwesomeIcon icon={['fab', 'github']} /></i>
                </span>
              </a>
              <a href={siteData.contact.twitter} target="blank" className="font-bold">
                <span  className="p-0 text-xl">
                  <i><FontAwesomeIcon icon={['fab', 'twitter']} /></i>
                </span>
              </a>
              <a href={siteData.contact.email} target="blank" className="font-bold ">
                <span  className="p-0 text-xl">
                  <i><FontAwesomeIcon icon={faEnvelope} /></i>
                </span>
              </a>
              <a href={siteData.contact.telegram} target="blank" className="font-bold ">
                <span  className="p-0 text-xl">
                  <i><FontAwesomeIcon icon={['fab', 'telegram']} /></i>
                </span>
              </a>
            </div>

            <a href="javascript:void(0)" onClick={closeNav}  style={{marginTop:'5%'}}  className="text-xl font-bold contents closebtn">
              <i className=" has-text-dark is-size-3"><FontAwesomeIcon icon={faAngleDown} /></i>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
