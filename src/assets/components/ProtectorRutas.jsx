import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { Spinner, Container, Alert } from 'react-bootstrap';

export const ProtectorRutas = ({ rolesPermitidos, children }) => {
    const {isAuthenticated, user, isLoading } = useAuth();

    if (isLoading) {
        return (
            <Container className="text-center mt-5">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Cargando autenticación...</span>
                </Spinner>
                <p className="mt-2">Verificando sesión...</p>
            </Container>
        );
    }
    if(!isAuthenticated){
        return <Navigate to="/" replace/>
    }
    if(rolesPermitidos && !rolesPermitidos.includes(user?.rol)){
        return <Navigate to="/*" replace/>
    }
    return children;
}