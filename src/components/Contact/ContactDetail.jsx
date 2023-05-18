import { useParams } from "react-router-dom";

const ContactDetail = ({dataContacts}) =>{
    const{id} = useParams()

    //const user
    
    console.log(id)
    console.log(dataContacts)
    // let detail = null;

    // const dataDetail = () => {
    //     detail = dataContacts
    //                     .filter(contact => contact.id === id)
    //                     .map((contact, index) =>
    //                     <ContactCard contact={contact} key={index}/>)
    // }

    return(
        <div className="myDetail">
            {
                dataContacts
                .map((contact, index) =>
                <div>
                        <h1>{contact.name}</h1>
                        <p>{contact.email}</p>
                        <p>{contact.phone}</p>
                    </div>
                )
                
                // .filter(el => {
                //     return el.id === id
                // })
                
                //.filter(contact.id === id)
                
            }
           
        </div>
    )
}

export default ContactDetail