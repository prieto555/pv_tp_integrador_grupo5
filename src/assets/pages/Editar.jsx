import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { Form, Button, Container } from "react-bootstrap";
export const Editar = () => {
    const { editProducts, findProduct } = useContext(ProductContext);
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
        editProducts(params.id, formulario)
        navigate("/");
    };

return (
  <Container className="mt-4">
    <Form onSubmit={actualizarProducto}>
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

      <Button variant="success" type="submit">
        Actualizar Producto
      </Button>
    </Form>
  </Container>
);
}