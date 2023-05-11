import { useState } from "react";

const ContactCard = ({dataContacts,contact}) => {


    const removeContact = (name) => {
       const contactRemoved = dataContacts
                            .contacts
                            .filter(contact => contact.name !== name)
                            .map(person => { //recorro array datos de API y devuelvo los campos que me ineteresan
                                return {
                                  name: person.name,
                                  email: person.email,
                                  phone: person.phone 
                                }
                            })
       dataContacts.setContacts(contactRemoved)
    }
    
    const SeeMoreData = (name) => {
        const contactRemoved = dataContacts
                             .contacts
                             .filter(contact => contact.name === name)
                             .map(person => { //recorro array datos de API y devuelvo los campos que me ineteresan
                                 return {
                                   name: person.name,
                                   email: person.email,
                                   phone: person.phone 
                                 }
                             })
     }
   

    return(
        <li>
            <div className="card card--contact">
                <h3>{contact.name}</h3>
                <p>{contact.email}</p>
                <p>{contact.phone}</p>
                <p className="card__ctas">
                    <button>Ver más</button>
                    <button>Editar</button>
                    <button onClick={() => removeContact(contact.name)}>Borrar</button>
                </p>
            </div>
        </li>
    )
}

export default ContactCard