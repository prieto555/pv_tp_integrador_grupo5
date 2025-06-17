import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { Link } from "react-router-dom";
import { Eliminar } from "./Eliminar";
import Image from 'react-bootstrap/Image';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useAuth } from '../hooks/useAuth.js';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';



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
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>Precio: ${product.price}</Card.Text>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                {user?.rol === 'ADMINISTRATIVO' && (<>
                  <Eliminar id={product.id} />
                  <Link className="btn btn-primary" to={`/editar/${product.id}`}>Editar</Link>
                </>)}
                <div className="d-grid gap-2">
                  <Link className="btn btn-success" to={`/detalles/${product.id}`}>Ver detalles</Link>
                </div>

              </div>
              <Button variant="link" onClick={() => toggleFavorite(product.id)}>
                {product.favorite ? <AiFillStar color="crimson" size={40} /> : <AiOutlineStar size={35} />}
              </Button>

            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};


export default ProductList;