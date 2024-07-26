import React from 'react';
import { Link, useLocation } from "react-router-dom";
import CardWidget from "./CardWidget/CardWidget";
import './navbar/navbar.css';
import Category from "./Category/Category";

const NavBar = () => {
    const location = useLocation();

    const showCategory = () => {
        const hiddenPaths = ['/our', '/vision', '/coomingsoon', '/contacts'];
        return !hiddenPaths.includes(location.pathname);
    }

    return (
        <>
            <nav className="navbar">
                <h3>
                    <Link to='/'> 
                        <img src="src/assets/RSM.jpg" alt="" style={{ width: '100px', height: '50px', marginRight: '5px' }} /> 
                    </Link>
                </h3>
                <div>
                    <Link to="/"> 
                        <button> Productos </button> 
                    </Link>
                    
                    <Link to="/our"> 
                        <button> Nosotros </button> 
                    </Link>
                    
                    <Link to="/vision"> 
                        <button> Visión </button>
                    </Link>

                    <Link to="/contacts">
                        <button> Contactos </button>
                    </Link> 
                </div>
                <div className="CardWG">
                    <CardWidget />
                </div>
            </nav>
            {showCategory() && <Category />}
        </>
    );
}

export default NavBar;
