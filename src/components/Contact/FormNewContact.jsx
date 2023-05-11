import { useState } from "react"


const FormNewContact = ({dataContacts}) => {

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");

    const addContact = () =>
    dataContacts.setContacts([...dataContacts.contacts, { name, email, phone }])

    const handlerName = event => setName(event.target.value)
    const handlerEmail = event => setEmail(event.target.value)
    const handlerPhone = event => setPhone(event.target.value)


    return(
        <div>
            <h2>Nuevo contacto</h2>
            <div>
                <p>Nombre: <input type="text" onChange={handlerName} /></p>
                <p>Email: <input type="text" onChange={handlerEmail} /></p>
                <p>Teléfono: <input type="text" onChange={handlerPhone} /></p>
            </div>
            <button onClick={addContact}>Añadir nuevo</button>
        </div>
    )
}

export default FormNewContact