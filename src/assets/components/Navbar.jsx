// import { Link } from 'react-router-dom'

import { Link } from "react-router-dom";

// export const Navbar = () => {
//     return (
//         <nav className="bg-primary">
//             <div>
//                 <Link to="/">Inicio</Link> / 
//                 <Link to="/añadir">Añadir</Link> /
//                 <Link to="/lista-productos">Mostrar</Link>
//             </div>
//         </nav>
//     )


// }
function Navbar() {
    return (

        <nav className="navbar navbar-expand-lg shadow  bg-white rounded" >
            <div className="container-fluid">
                <button
                    data-mdb-collapse-init
                    className="navbar-toggler"
                    type="button"
                    data-mdb-target="#navbarSupportedContent"

                >
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <Link className="navbar-brand mt-2 mt-lg-0" to="/">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTokOX8BqxN1k8FEcVG57bwUC8EUbI38PNHIg&s"
                            height="30"
                            alt="MDB Logo"
                            loading="lazy"
                        />
                    </Link>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/añadir">Añadir</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contacto">Contacto</Link>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    );
}
export default Navbar;