import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { Link } from "react-router-dom";
import { Eliminar } from "./Eliminar";
import { Card, Button, Badge } from "react-bootstrap";
import { useAuth } from '../hooks/useAuth.js';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';



const ProductList = () => {

  const { products, toggleFavorite } = useContext(ProductContext);
  console.log(products, "Productos en la lista")
  const activeProducts = products.filter(product => product.active !== false);
  const { user } = useAuth();
  return (
    <div className="d-flex flex-wrap justify-content-center gap-3 px-3 py-5">
      {activeProducts.map((product) => (
        <Card key={product.id} style={{ width: "21rem" }}>
          <Card.Img
            variant="top"
            src={product.image}
            alt="No imagen"
            style={{ height: '200px', objectFit: 'cover' }}
          />
          <Card.Body>
            <Badge bg="primary">{product.category}</Badge>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>${product.price}</Card.Text>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                {user?.rol === 'ADMINISTRATIVO' && (
                  <>
                    <Eliminar id={product.id} />
                    <Link className="btn btn-primary" to={`/editar/${product.id}`}>Editar</Link>
                  </>
                )}
                <div className="d-grid gap-2">
                  <Link className="btn btn-success" to={`/detalles/${product.id}`}>Ver detalles</Link>
                </div>

              </div>
              <Button variant="link" onClick={() => toggleFavorite(product.id)}>
                {product.favorite ? <AiFillHeart color="crimson" size={40} /> : <AiOutlineHeart size={35} />}
              </Button>

            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};


export default ProductList;