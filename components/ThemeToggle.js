import React from 'react'
import dynamic from 'next/dynamic'
import { ThemeContext } from './ThemeContext'

const LineIcon = dynamic(
   () => import('react-lineicons'),
   {ssr : false}
)

export default function ThemeToggle(){
   const { theme, setTheme } = React.useContext(ThemeContext)
   const [toggle, setToggle] = React.useState()
   const [mode, setMode] = React.useState()

   React.useEffect(() => {
      if (theme == "light") {
         setToggle(<LineIcon name="night" />)
         setMode("Light")
      } else {
         setToggle(<LineIcon name="sun" />)
            setMode("Dark")
      }
   },[theme])

   const togg = () => {
      setTheme(theme == "dark" ? "light" : "dark")
      console.log(theme)
      if (theme == "dark") {
         setToggle(<LineIcon name="sun" />)
            setMode("Dark")
      } else {
         setToggle(<LineIcon name="night" />)
         setMode("Light")
      }
   }
   return (
      <button className='font-bold bg-primary px-2 py-1 rounded-md focus:outline-none' onClick={togg}>{toggle}</button>
   )
}



