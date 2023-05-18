
import { useState, useContext } from 'react';

import LightContext from '../contexts/LightContext';

import '../assets/header.css'

import Menu from "./Menu"

const Header = () => {

    //cambio theme
    // const [{theme, setTheme}] = useContext(LightContext)
    // const [{toogleCopyIcon, setToggle}] = useState("nightlight")
    
    // const toogleTheme = () =>{
    //   theme === 'dark-theme' ? setTheme('light-theme') : setTheme('dark-theme')
    //   toogleCopyIcon === 'nightlight' ? setToggle('light_mode') : setToggle('nightlight')
    //   return [theme, setTheme]
    // }

    return(
        <header>  
            {/* className={theme} */}
            <span className="title">React Works</span>
            <Menu/>
            {/* <button onClick={toogleTheme}>
                <span className="material-icons">{toogleCopyIcon}</span>
            </button> */}
        </header>
    )

}

export default Header