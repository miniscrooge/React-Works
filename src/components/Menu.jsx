import { Link } from "react-router-dom"

const Menu = () => {

    return(
        <nav>
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="contact">Contacto</Link></li>
                <li><Link to="contact/8958">Detalle contacto</Link></li>
            </ul>
        </nav>
    )
    
}
    
export default Menu