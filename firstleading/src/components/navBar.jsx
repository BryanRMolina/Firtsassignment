import CardWidget from "./CardWidget/CardWidget"
import ItemListContainer from "./ItemListContainer/ItemListContainer"

const NavBar = () => {
    return(
        <nav>
            <h3>Richard Servicios Multiples</h3>
            <div>
                <button>Inicio</button>
                <button>Productos de limpienza</button>
                <button>Cuidado del pelo</button>
                <button>Tecnologia</button>
                <button>Mas...</button>
                <button>Contacto</button>
            </div>
            <CardWidget/>
            <ItemListContainer greeting={'Bienvenidos'} />

        </nav>
    )
}

export default NavBar