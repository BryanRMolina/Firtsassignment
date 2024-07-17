import { Link} from "react-router-dom"
import CardWidget from "./CardWidget/CardWidget"
import './navbar/navbar.css'
import Category from "./Category/Category"


const NavBar = () => {
    return(
    <>
        <nav className="navbar">
            <h3><Link to = '/'> Richard Servicios Multiples </Link></h3>
            <img src="" alt="" />
            <div>
                <button>
                   <Link to="/"> Inicio </Link> 
                </button>
                <button>
                    <Link to="/products"> Productos </Link>
                </button>
                <button>
                    <Link to="/our"> Nosotros </Link>
                </button>
                <button>
                    <Link to="/vision"> Visión </Link>
                </button>
                <button>
                    <Link to="/coomingsoon"> Proximamente </Link>
                </button>
                <button>
                    <Link to="/contacts">  Contactos </Link> 
                </button>                
            </div>
            <div className="CardWG">
                <CardWidget/>
            </div>
        </nav>
        <Category/>
    </>
    )
}

export default NavBar