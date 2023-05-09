import ContactCard from "./ContactCard"


const ContactList = ({contactos}) => {
    return(
        <div>
            <h2>Contactos</h2>
            <ul className="list list--cards">
                <ContactCard contactos={contactos}/>
            </ul>
        </div>
    )
}

export default ContactList