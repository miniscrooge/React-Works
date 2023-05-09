import '../../assets/contact.css'

import ContactList from "./ContactList"
import Search from "../Search/Search"
import ContactForm from "./ContactForm"

const Contact = () => {

    const contactos = [
    {
      name: "Henry Jones",
      email: "henry@gmail.com",
      phone: "987464134"
    },
    {
      name: "Sallah",
      email: "sallah@gmail.com",
      phone: "666666666"
    },
    {
      name: "Marcus Brody",
      email: "marcus@gmail.com",
      phone: "951753258"
    }
  ]

    return(
        <div className="contacto-general">
            <div className="contacto-general__block">
                
                <Search />
            </div>
            <div className="contacto-general__block">
                <ContactForm/>
            </div>
            <div className="contacto-general__block">
                
                <ContactList contactos={contactos}/>
            </div>
        </div>
    )
}

export default Contact