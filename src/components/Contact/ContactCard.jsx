import { useContext } from "react";
import LightContext from '../../contexts/LightContext';
import AddContactsContext from '../../contexts/AddContactsContext';

const ContactCard = ({contact}) => {

    const dataLight = useContext(LightContext)
    const dataContacts = useContext(AddContactsContext)
    
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
    
    return(
        <li className={dataLight}>
            <div className="card card--contact">
                <h3>{contact.name}</h3>
                <p>{contact.email}</p>
                <p>{contact.phone}</p>
                <p className="card__ctas">
                    {/* <button>Ver más</button>
                    <button>Editar</button> */}
                    <button onClick={() => removeContact(contact.name)}>Borrar</button>
                </p>
            </div>
        </li>
    )
}

export default ContactCard