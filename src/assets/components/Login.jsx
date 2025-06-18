import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from '../hooks/useAuth';

export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');

    const { login, isAuthenticated, user } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) {
            if (user?.rol === 'ADMINISTRATIVO') {
                navigate('/inicio', { replace: true });
            } else if (user?.rol === 'CLIENTE') {
                navigate('/inicio', { replace: true });
            } else {
                navigate('/*', { replace: true });
            }
        }
    }, [isAuthenticated, navigate, user]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoginError('');

        if (!username || !password) {
            setLoginError('Por favor, ingresa usuario y contraseña.');
            return;
        }

        try {
            const result = await login({ username, password });
            if (!result.success) {
                setLoginError(result.message || 'Error de autenticación');
            }
        } catch (error) {
            setLoginError('Error al conectar con el servidor');
        }
    };

    return (
        <Container
            fluid
            className="d-flex justify-content-center align-items-center"
            style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}
        >
            <Card style={{ width: '100%', maxWidth: '400px' }} className="shadow-sm">
                <Card.Body className="p-4">
                    <Card.Title as="h2" className="text-center mb-4">
                        Iniciar Sesión
                    </Card.Title>
                    <Form onSubmit={handleSubmit} noValidate>
                        <Form.Group className="mb-3" controlId="formBasicUsername">
                            <Form.Label>Usuario</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ingresa tu usuario"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Contraseña"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </Form.Group>

                        {loginError && (
                            <Alert variant="danger" className="mt-3">
                                {loginError}
                            </Alert>
                        )}

                        <Button variant="primary" type="submit" className="w-100 mt-3">
                            Entrar
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
};
