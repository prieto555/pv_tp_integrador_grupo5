import { Link } from "react-router-dom";
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';
import { useGetProducts } from "../hooks/useGetProducts";
import { FaTrash } from "react-icons/fa";
import { useAuth } from '../hooks/useAuth.js';
function Navbar_function() {
    useGetProducts();
    const { isAuthenticated, user, logout } = useAuth();
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
                            <NavDropdown.Item onClick={logout} as={Link} to="/" >Cerrar Sesión</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <div className="d-flex flex-column">
                <h6 className="mt-2">Bienvenido, {user.username}!</h6>
                <h6 className="mt-2">Rol: {user.rol}</h6>
            </div>


        </Navbar>
    );
}
export default Navbar_function;