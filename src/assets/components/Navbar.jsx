import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useGetProducts } from "../hooks/useGetProducts";
import { FaTrash } from "react-icons/fa";
import { useAuth } from '../hooks/useAuth.js';

import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

function Navbar_function() {
    const { deleteFavorito } = useContext(ProductContext);    

    const { error, loading } = useGetProducts();
    const { login, isAuthenticated, user, logout } = useAuth();
    if (!isAuthenticated) return null;
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
                        <Nav.Link as={Link} to="/inicio">Inicio</Nav.Link>


                        <Nav.Link as={Link} to="/favoritos">Favoritos</Nav.Link>

                        {user?.rol === 'ADMINISTRATIVO' && (
                            <>
                                <Nav.Link as={Link} to="/añadir">Añadir</Nav.Link>
                                <Nav.Link as={Link} to="/Papelera">
                                    <FaTrash size={20} /> Papelera
                                </Nav.Link>
                            </>)}
                        <NavDropdown title="Opciones" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/contacto">Contactos</NavDropdown.Item>
                            <NavDropdown.Item onClick={()=>{deleteFavorito();logout();}} as={Link} to="/"  >Cerrar Sesión</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default Navbar_function;