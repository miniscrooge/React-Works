import { useEffect, useState } from "react"
import useFetch from "../../hooks/useFetch"

import '../../assets/contact.css'


import ContactList from "./ContactList"
import FormNewContact from './FormNewContact'

import AddContactssContext from '../../contexts/AddContactsContext'
import LightContext from '../../contexts/LightContext';

const Contact = () => {

    // 
    // cambio theme
    const [theme, setTheme] = useState("light-theme")
    const [toogleCopyIcon, setToggle] = useState("nightlight")
    
    const toogleTheme = () =>{
      theme === 'dark-theme' ? setTheme('light-theme') : setTheme('dark-theme')
      toogleCopyIcon === 'nightlight' ? setToggle('light_mode') : setToggle('nightlight')
    }

    //initialize data
  
    // Retrieve data
    const [
      contacts,
      setContacts,
      loadingContacts,
      errorContacts
    ] = useFetch("https://jsonplaceholder.typicode.com/users")

    return(
      <LightContext.Provider value={theme}>
        <main className={theme}>
          <header className={theme}>
            <h1>React Works</h1>
            <button onClick={toogleTheme}>
              <span className="material-icons">{toogleCopyIcon}</span>
            </button>
          </header>
          <div className="contacto-general">
              <div className="contacto-general__block">
                {/* Pasando datos por Context */}
                <AddContactssContext.Provider value={{contacts,setContacts,loadingContacts, errorContacts}}>
                  <ContactList/>
                </AddContactssContext.Provider>
              </div>
              <div className="contacto-general__block contacto-general__search">
                  {/* Pasando datos por prop */}
                  <FormNewContact dataContacts={{contacts, setContacts}}/>
              </div>
          </div>
        </main>
      </LightContext.Provider>
    )
}

export default Contact