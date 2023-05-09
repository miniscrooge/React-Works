

const ContactForm = () => {



    const mostrarFormulario = (id) => {
        const form = document.getElementById("formularioCont");
        form.classList.remove("hidden");
    } 



    return(
        <div className="formulario-nuevo-contacto">
            <button onClick={mostrarFormulario}>Añadir nuevo contacto</button>
            <form id="formularioCont" className="formularioCont hidden">
                <p><input type="text" name="name" placeholder="Introduce tu nombre"/></p>
                <p><input type="email" name="email" placeholder="Introduce tu email"/></p>
                <p><input type="number" name="phone" placeholder="Introduce tu teléfono" /></p>

            </form>
        </div>
    )
}

export default ContactForm