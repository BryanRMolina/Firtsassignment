import CardWidget from "./CardWidget/CardWidget"
import ItemListContainer from "./ItemListContainer/ItemListContainer"
import './navbar/navbar.css'


const NavBar = () => {
    return(
    <>
        <nav className="navbar">
            <h3>Richard Servicios Multiples</h3>
            <img src="" alt="" />
            <div>
                <button>Inicio</button>
                <button>Productos de limpienza</button>
                <button>Cuidado del pelo</button>
                <button>Tecnologia</button>
                <button>Mas...</button>
                <button>Contacto</button>
            </div>
            <div className="CardWG">
                <CardWidget/>
            </div>
        </nav>
        <ItemListContainer greeting={'Bienvenidos'} />        
    </>
    )
}

export default NavBar