import { useParams } from "react-router-dom";

const ContactDetail = () =>{
    const{id} = useParams()

    return(
        <div>
            Soy el Contacto número {id}
        </div>
    )
}

export default ContactDetail