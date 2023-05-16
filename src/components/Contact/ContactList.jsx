import { useState } from "react";
import ContactCard from "./ContactCard"

import { useContext } from "react";

import AddContactsContext from '../../contexts/AddContactsContext'
import LightContext from '../../contexts/LightContext'

const ContactList = () => {

    //consumir context (pasar datos independien)
    const {contacts, loadingContacts, errorContacts} = useContext(AddContactsContext)
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
                    errorContacts
                    ?
                    <p>Ha habido un error</p> // muestro ERROR si no han llegado los datos
                    :
                    loadingContacts //Si es true no ha terminado de cargar y mantengo el CARGANDO
                    ? 
                    <p>Cargando...</p>
                    : //Si es false ya ha terminado de cargar y MOSTRAMOS LOS DATOS
                    contacts
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