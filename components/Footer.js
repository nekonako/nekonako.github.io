import React from 'react'
import ToggleTheme from './ThemeToggle'

function Footer () {
  return(
    <>
      <div className='pt-4 pb-10 mt-8 text-sm text-center bg-secondary md:text-base footer'>
        <div className='md:hidden'>
        <ToggleTheme />
          </div>
        <div className="md:pt-4" ></div>
        © 2021 <a href="https://github.com/nekonako" target="blank" className="font-bold text-accent">Nako</a><br/>
        Powered by <a href="https://gatsbyjs.com" className="font-bold text-accent">NextJS </a> |
        Source Code <a href="https://github.com/nekonako/nekonako.me" className="font-bold text-accent">Github</a>
      </div>
    </>
  )
}

export default Footer
