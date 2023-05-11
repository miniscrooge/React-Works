import { useState } from "react";
import ContactCard from "./ContactCard"


const ContactList = ({dataContacts}) => {

    
    const [search, setSearch] = useState("")

    const handleChange = event => {
        setSearch (event.target.value);

    };

    return(
        <div>
            <h2>Buscar</h2>
            <div className="search-bar">
                <input placeholder="Introduce los términos de búsqueda" onChange={handleChange} />
            </div>
            <h2>Contactos</h2>
            <ul className="list list--cards">
                {
                    dataContacts
                        .contacts
                        .filter(contact =>
                            contact.name.length > 0 &&
                            contact.name.startsWith(search)
                        )
                        .map((contact, index) =>
                        <ContactCard dataContacts={dataContacts} contact={contact} key={index}/>
                    )
                }
            </ul>
        </div>
    )
}

export default ContactList