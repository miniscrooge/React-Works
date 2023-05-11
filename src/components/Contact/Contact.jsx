import { useEffect, useState } from 'react'

import '../../assets/contact.css'

import ContactList from "./ContactList"
import FormNewContact from './FormNewContact'

const Contact = () => {

    // Creo estado contactos vacio
    const [contacts, setContacts] = useState([])

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
        <div className="contacto-general">
            <div className="contacto-general__block contacto-general__search">
                <FormNewContact dataContacts={{contacts, setContacts}}/>
            </div>
            <div className="contacto-general__block">
                <ContactList dataContacts={{contacts, setContacts}}/>
            </div>
        </div>
    )
}

export default Contact