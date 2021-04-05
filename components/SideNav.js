import Link from 'next/link'
import siteData from '../site-data'
import dynamic from 'next/dynamic'
import ThemeToggle from './ThemeToggle'
const LineIcon = dynamic(
   () => import('react-lineicons'),
   {ssr : false}
)


function SideNav(){
  return(
    <>
      <div className="z-10 invisible hidden w-1/3 bg-secondary md:visible md:inline-block" style={{borderRight:'1px solid var(--color-text-gray)',borderColor:'text-gray'}}>
        <div className="sticky top-0 left-0 flex flex-col justify-center min-h-screen">
          <div className="absolute top-0 left-0 inline-block px-2 m-4 text-lg">
            <ThemeToggle />
          </div>
          <div className='w-full p-0 m-0'>
            <div className="block pt-6 pb-8 m-1 text-center" >
              <img src="https://avatars.githubusercontent.com/u/46141275" alt="nekonako" width="180px" className="relative inline-block rounded-full text-accent border-current" style={{borderWidth:"8px"}}/>
            </div>
            <div className="text-3xl font-bold text-center latin">Nekonako</div>
            <div className="font-light text-center latin">Coffe and Code enjoyer</div>

            <ul className="pt-8 pb-4 text-center ">
              <li className="p-2">
                <Link href="/" className="font-bold">
                  Home
                </Link>
              </li>
              <li className="p-2">
                <Link href="/projects" className="font-bold">
                  Projects
                </Link>
              </li>
              <li className="p-2">
                <Link href="/friends" className="font-bold">
                  .Friends
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
                  <i><LineIcon name='github'/></i>
                </span>
              </a>
              <a href={siteData.contact.twitter} target="blank" className="font-bold">
                <span  className="p-3 text-xl">
                  <i><LineIcon name ='twitter' /></i>
                </span>
              </a>
              <a href={siteData.contact.email} target="blank" className="font-bold">
                <span  className="p-3 text-xl">
                  <i><LineIcon name='envelope' /></i>
                </span>
              </a>
              <a href={siteData.contact.telegram} target="blank" className="font-bold">
                <span  className="p-3 text-xl">
                  <i><LineIcon name='telegram' /></i>
                </span>
              </a>
            </center>          </div>
        </div>
      </div>
    </>
  )
}
export default SideNav
