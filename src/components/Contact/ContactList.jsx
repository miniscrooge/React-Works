import { useState } from "react";
import ContactCard from "./ContactCard"

import { useContext } from "react";

import AddContactsContext from '../../contexts/AddContactsContext'
import LightContext from '../../contexts/LightContext'

const ContactList = () => {

    //consumir context (pasar datos independien)
    const dataContacts = useContext(AddContactsContext)
    const dataLight = useContext(LightContext)

    
    const [search, setSearch] = useState("")

    const handleChange = event => {
        setSearch (event.target.value);

    };

    return(
        <div className={dataLight}>
            <h2>Contactos</h2>
            <div className="search-bar">
                <input placeholder="Introduce los términos de búsqueda" onChange={handleChange} />
            </div>
            <ul className="list list--cards">
                {
                    dataContacts
                        .contacts
                        .filter(contact =>
                            contact.name.length > 0 &&
                            contact.name.startsWith(search)
                        )
                        .map((contact, index) =>
                        <ContactCard contact={contact} key={index}/>
                    )
                }
            </ul>
        </div>
    )
}

export default ContactList