import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { Card, Button } from "react-bootstrap";



export const Papelera = () => {

  const { products, handleDeleteProduct } = useContext(ProductContext);
  const reactivar = products.filter(product => product.active === false);

  if (reactivar.length === 0) {
    return <h2 className="text-center mt-4 text-danger">No hay productos en la papelera</h2>;
  }
  return (
    <div className="d-flex flex-wrap justify-content-center gap-3">
      {reactivar.map(product => (
        <Card key={product.id} style={{ width: "18rem" }}>
          <Card.Img variant="top" src={product.image} alt={product.name} />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>Precio: ${product.price}</Card.Text>
            <Button variant="danger" onClick={() => handleDeleteProduct(product.id)}>
              Quitar de Papelera
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

