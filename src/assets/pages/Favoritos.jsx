import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { Link } from "react-router-dom";
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { Button, Card, Row, Container, Col } from "react-bootstrap";


export const Favoritos = () => {
  const { products, toggleFavorite } = useContext(ProductContext);

  const favoritos = products.filter(product => product.favorite);

  if (favoritos.length === 0) {
    return <h2 className="text-center mt-4 text-danger">No hay productos marcados como favoritos</h2>;
  }

  return (
    <Container className="px-3 py-5">
      <h2>Productos Favoritos</h2>

      <Row className="mt-5 justify-content-center g-3">
        {favoritos.map(product => (
          <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Card className="h-100">
              <Card.Img
                variant="top"
                src={product.image}
                alt="No imagen"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>Precio: ${product.price}</Card.Text>
                </div>
                <div>
                  <Button variant="link" onClick={() => toggleFavorite(product.id)}>
                    {product.favorite
                      ? <AiFillHeart color="crimson" size={40} />
                      : <AiOutlineHeart size={35} />}
                  </Button>
                  <div className="d-grid gap-2">
                    <Link className="btn btn-success" to={`/detalles/${product.id}`}>
                      Ver detalles
                    </Link>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
