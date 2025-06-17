import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { Link } from "react-router-dom";
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const Favoritos = () => {
  const { products, toggleFavorite } = useContext(ProductContext);

  const favoritos = products.filter(product => product.favorite);

  if (favoritos.length === 0) {
    return <h2 className="text-center mt-4 text-danger">No hay productos marcados como favoritos</h2>;
  }

  return (
    <div className="px-3 py-5" >
        <h2 >Productos Favoritos</h2>

    <ul className="d-flex flex-wrap justify-content-center gap-3 mt-5">

      {favoritos.map(product => (
        <li key={product.id} className="list-unstyled">

          <Card className="card" style={{ width: '21rem' }}>
          <Card.Img
            variant="top"
            src={product.image}
            alt="No imagen"
            style={{ height: '200px', objectFit: 'cover' }}
          />
            <Card.Body>
              <Card.Title >{product.title}</Card.Title>
              <Card.Text >Precio: ${product.price}</Card.Text>
              <Button variant="link" onClick={() => toggleFavorite(product.id)}>
                {product.favorite ? <AiFillStar color="crimson" size={40} /> : <AiOutlineStar size={35} />}
              </Button>
              <div class="d-grid gap-2">
                <Link class="btn btn-success" to={`/detalles/${product.id}`}>Ver detalles</Link>
              </div>
            </Card.Body>
           </Card>
        
        </li>
      ))}
    </ul>
    </div>
  );
};
