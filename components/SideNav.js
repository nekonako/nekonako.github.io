import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import ThemeToggle from './ThemeToggle'
import siteData from '../site-data'
library.add(fab)

function SideNav(){
  return(
    <>
      <div className="z-10 invisible hidden w-1/3 bg-secondary md:visible md:inline-block" style={{borderRight:'1px solid var(--color-text-gray)',borderColor:'text-gray'}}>
        <div className="sticky top-0 left-0 flex flex-col justify-center min-h-screen">
            <div className="absolute top-0 left-0 inline-block m-4 text-lg text-center shadow-lg bg-secondary rounded-md">
      <ThemeToggle />
      </div>
          <div className='w-full p-0 m-0'>
            <div className="block pt-6 pb-8 m-1 text-center" >
              <img src="https://avatars.githubusercontent.com/u/46141275" alt="nekonako" width="150px" className="relative inline-block rounded-full text-accent border-current" style={{borderWidth:"8px"}}/>
            </div>
            <div className="text-3xl font-bold text-center latin">Galih wisnuaji</div>
            <div className="font-light text-center latin">Self thought web develooping</div>

            <ul className="pt-8 pb-4 text-center ">
              <li className="p-2">
                <Link href="/" className="font-bold">
                  Home
                </Link>
              </li>
              <li className="p-2">
                <Link href="/posts" className="font-bold">
                  Articles
                </Link>
              </li>
              <li className="p-2">
                <Link href="/friends" className="font-bold">
                  Friends
                </Link>
              </li>
              <li className="p-2">
                <Link href="/about" className="font-bold">
                  About
                </Link>
              </li>
            </ul>
          <center className="pt-4">
          <a href={siteData.contact.github} target="blank" className="font-bold">
            <span className="p-3 text-xl">
              <i><FontAwesomeIcon icon={['fab', 'github']} /></i>
            </span>
          </a>
          <a href={siteData.contact.twitter} target="blank" className="font-bold">
            <span  className="p-3 text-xl">
              <i><FontAwesomeIcon icon={['fab', 'twitter']} /></i>
            </span>
          </a>
          <a href={siteData.contact.email} target="blank" className="font-bold">
            <span  className="p-3 text-xl">
              <i><FontAwesomeIcon icon={faEnvelope} /></i>
            </span>
          </a>
          <a href={siteData.contact.telegram} target="blank" className="font-bold">
            <span  className="p-3 text-xl">
              <i><FontAwesomeIcon icon={['fab', 'telegram']} /></i>
            </span>
          </a>
        </center>          </div>
        </div>
      </div>    
    </>
  )
}
export default SideNav
