// // import { Link } from 'react-router-dom'
// // export const Navbar = () => {
// //     return (
// //         <nav className="bg-primary">
// //             <div>
// //                 <Link to="/">Inicio</Link> / 
// //                 <Link to="/añadir">Añadir</Link> /
// //                 <Link to="/lista-productos">Mostrar</Link>
// //             </div>
// //         </nav>
// //     )
// // }
// function Navbar() {
//     return (
//         <nav className="navbar navbar-expand-lg shadow  bg-white rounded" >
//             <div className="container-fluid">
//                 <button
//                     data-mdb-collapse-init
//                     className="navbar-toggler"
//                     type="button"
//                     data-mdb-target="#navbarSupportedContent"
//                 >
//                     <i className="fas fa-bars"></i>
//                 </button>
//                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                     <Link className="navbar-brand mt-2 mt-lg-0" to="/">
//                         <img
//                             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTokOX8BqxN1k8FEcVG57bwUC8EUbI38PNHIg&s"
//                             height="30"
//                             alt="MDB Logo"
//                             loading="lazy"
//                         />
//                     </Link>
//                     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                         <li className="nav-item">
//                             <Link className="nav-link" to="/">Inicio</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link className="nav-link" to="/añadir">Añadir</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link className="nav-link" to="/contacto">Contacto</Link>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </nav>
//     );
// }
// export default Navbar;
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useGetProducts } from "../hooks/useGetProducts";

function Navbar_function() {
    const { error, loading } = useGetProducts();
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand>
                    <Link className="navbar-brand mt-2 mt-lg-0" to="/">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTokOX8BqxN1k8FEcVG57bwUC8EUbI38PNHIg&s"
                            height="30"
                            alt="MDB Logo"
                            loading="lazy"
                        />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                        <Nav.Link as={Link} to="/añadir">Añadir</Nav.Link>
                        <Nav.Link as={Link} to="/favoritos">Favoritos</Nav.Link>
                        <NavDropdown title="Opciones" id="basic-nav-dropdown">
                            <NavDropdown.Item >Contactos</NavDropdown.Item>
                            <NavDropdown.Item >Sesión</NavDropdown.Item>
                            {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item> */}
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default Navbar_function;