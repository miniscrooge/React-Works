
const ContactCard = (props) => {

    return(
        props.contactos.map((contacto, index) =>
            <li key={index}>
                <div className="card card--contact">
                    <h3>{contacto.name}</h3>
                    <p>{contacto.email}</p>
                    <p>{contacto.phone}</p>
                </div>
            </li>
        )
    )
}

export default ContactCard