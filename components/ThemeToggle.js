import React from 'react'
import { ThemeContext } from './ThemeContext'
import Toggle from 'react-toggle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon,faSun } from '@fortawesome/free-solid-svg-icons'

const ToggleTheme = () => {
    const { theme, setTheme } = React.useContext(ThemeContext)
    function isDark(){
      return theme == "dark"
    }
    return (
      <> 
        <Toggle checked={isDark()} icons={{
          checked : <FontAwesomeIcon icon={faMoon}/>,
          
          unchecked:<FontAwesomeIcon icon={faSun}/>,
}} onChange={e => setTheme(e.target.checked ? "dark" : "light")}  
  className="bg-secondary"/> 
      </>
    )
  }

  export default ToggleTheme
