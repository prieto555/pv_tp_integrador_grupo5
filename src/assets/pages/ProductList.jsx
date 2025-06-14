import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { Link } from "react-router-dom";
import { Eliminar } from "./Eliminar";
import Image from 'react-bootstrap/Image';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";



const ProductList = () => {
  const { products,toggleFavorite } = useContext(ProductContext);
  console.log(products, "Productos en la lista")
  const activeProducts = products.filter(product => product.active !== false);
  
  return (
    <div className="d-flex flex-wrap justify-content-center gap-3">
      {activeProducts.map((product) => (
        <Card key={product.id} style={{ width: "18rem" }}>
          <Card.Img variant="top" src={product.image} alt="No imagen" />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>Precio: ${product.price}</Card.Text>
            <Eliminar id={product.id} />
            <Link className="btn btn-primary" to={`/editar/${product.id}`}>Editar</Link>
            <Link className="btn btn-secondary mx-2" to={`/detalles/${product.id}`}>Ver detalles</Link>
            <Button variant={product.favorite ? "danger" : "success"} onClick={() => toggleFavorite(product.id)}>
              {product.favorite ? ' Quitar de favoritos' : 'Agregar a favoritos'}
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};


export default ProductList;