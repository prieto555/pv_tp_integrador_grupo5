import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { Form, Button, Container, Alert } from "react-bootstrap";

export const Editar = () => {
  const { editProducts, findProduct } = useContext(ProductContext);
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();
  let params = useParams();
  const product = findProduct(parseInt(params.id));

  const [formulario, setFormulario] = useState({ ...product });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulario({ ...formulario, [name]: value });
  };

  const actualizarProducto = (e) => {
    e.preventDefault();

    if (!formulario.title || !formulario.price || !formulario.description || !formulario.category || !formulario.image) {
      setLoginError('Por favor, complete todos los campos.');
      return;
    }

    if (formulario.price <= 0) {
      setLoginError('El precio debe ser un número válido mayor a 0.');
      return;
    }

    editProducts(params.id, formulario);
    navigate("/inicio");
    setLoginError('');
  };
  return (
    <Container className="mt-4">
      <Form onSubmit={actualizarProducto} noValidate>
        <h2>Modificar Producto</h2>

        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={formulario.title || ""}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>Precio</Form.Label>
          <Form.Control
            type="number"
            name="price"
            value={formulario.price || ""}
            onChange={handleChange}
            min="0"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>Descripción</Form.Label>
          <Form.Control
            type="text"
            name="description"
            value={formulario.description || ""}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>Categoría</Form.Label>
          <Form.Control
            type="text"
            name="category"
            value={formulario.category || ""}
            onChange={handleChange}
            required
          />
        </Form.Group>
        {loginError && (
          <Alert variant="danger" className="mt-3">
            {loginError}
          </Alert>
        )}
        <Button variant="success" type="submit">
          Actualizar Producto
        </Button>
      </Form>
    </Container>
  );
}