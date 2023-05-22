import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import AddContactsContext from '../../contexts/AddContactsContext';

const ContactDetail = () =>{
    const{id} = useParams()
    const {contacts} = useContext(AddContactsContext)
    console.log(contacts)

    return(
        <div>
            {
                    contacts
                    .filter(contact => contact.id == id)
                    .map((contact, index) =>
                         <div key={index}>
                            <div className="myDetail">
                                <div>
                                    <h1>{contact.name}</h1>
                                    <p>{contact.email}</p>
                                    <p>{contact.phone}</p>
                                </div>
                            </div>
                            <div className="text-center">
                                <Link to='/contact'>Volver</Link>
                            </div>
                        </div>
                    )

            }
        </div>
    )
    //const user
    
    //console.log(id)
    // let detail = null;

    // const dataDetail = () => {
    //     detail = dataContacts
    //                     .filter(contact => contact.id === id)
    //                     .map((contact, index) =>
    //                     <ContactCard contact={contact} key={index}/>)
    // }
        
}
        
        export default ContactDetail
       