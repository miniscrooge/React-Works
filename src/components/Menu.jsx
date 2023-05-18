import { Link } from "react-router-dom"

const Menu = () => {

    return(
        <nav>
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="contact">Contactos</Link></li>
            </ul>
        </nav>
    )
    
}
    
export default Menu