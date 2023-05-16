import { useEffect, useState } from 'react'

import '../../assets/contact.css'


import ContactList from "./ContactList"
import FormNewContact from './FormNewContact'

import AddContactssContext from '../../contexts/AddContactsContext'
import LightContext from '../../contexts/LightContext';

const Contact = () => {

    // Creo estado contactos vacio
    const [contacts, setContacts] = useState([])

    const [theme, setTheme] = useState("light-theme")
    const [toogleCopyIcon, setToggle] = useState("nightlight")

    const toogleTheme = () =>{
      theme === 'dark-theme' ? setTheme('light-theme') : setTheme('dark-theme')
      toogleCopyIcon === 'nightlight' ? setToggle('light_mode') : setToggle('nightlight')
    }


    useEffect(() => {
      // Traer datos desde API
      fetch("https://jsonplaceholder.typicode.com/users") //traigo datos desde API
        .then(response => response.json()) // parseo datos
        .then(data => {
          const dataFmted = data.map(person => { //recorro array datos de API y devuelvo los campos que me ineteresan
            return {
              name: person.name,
              email: person.email,
              phone: person.phone 
            }
          })
          setContacts(dataFmted) //modifico array contactos vacio
        })
  
    }, []) // en la declaración lso corchetes evitan que se reproduzca infinitamente

    

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
                <AddContactssContext.Provider value={{contacts,setContacts}}>
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