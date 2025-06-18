import { useState, useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { Form, Button, Container, Alert } from "react-bootstrap";

const Añadir = () => {
  const { addProduct } = useContext(ProductContext);
  const [loginError, setLoginError] = useState('');
  const [product, setProduct] = useState({
    id: "",
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
    active: true,
    favorite: false,
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!product.title || !product.price || !product.description || !product.category || !product.image) {
      setLoginError('Por favor, complete todos los campos.');
      return;
    }
    
    addProduct({ ...product, id: Date.now() });

    setProduct({
      id: "",
      title: "",
      price: "",
      description: "",
      category: "",
      image: "",
      active: true,
      favorite: false,
    });

    setLoginError('');
  };

  return (
    <Container className="mt-4">
      <h1>Agregar producto</h1>
      <Form onSubmit={handleSubmit} noValidate>
        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={product.title}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPrice">
          <Form.Label>Precio</Form.Label>
          <Form.Control
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Descripción</Form.Label>
          <Form.Control
            type="text"
            name="description"
            value={product.description}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>Categoría</Form.Label>
          <Form.Control
            type="text"
            name="category"
            value={product.category}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>URL Imagen</Form.Label>
          <Form.Control
            type="text"
            name="image"
            value={product.image}
            onChange={handleChange}
            required
          />
        </Form.Group>
        {loginError && (
          <Alert variant="danger" className="mt-3">
            {loginError}
          </Alert>
        )}

        <Button variant="primary" type="submit">
          Añadir Producto
        </Button>
      </Form>
    </Container>
  );
};

export default Añadir;