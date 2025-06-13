import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { Link } from "react-router-dom";

export const Favoritos = () => {
  const { products, toggleFavorite } = useContext(ProductContext);

  const favoritos = products.filter(product => product.favorite);

  if (favoritos.length === 0) {
    return <div className="text-center mt-4 text-danger">No hay productos marcados como favoritos</div>;
  }

  return (
    <ul className="d-flex flex-wrap justify-content-center gap-3">
      {favoritos.map(product => (
        <li key={product.id} className="list-unstyled">
          <div className="card" style={{ width: '18rem' }}>
            <img src={product.image} className="card-img-top" alt={product.name} />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="text-muted">Precio: ${product.price}</p>
                <button onClick={() => toggleFavorite(product.id)} >
                 Quitar de favoritos
                </button>
                <Link to={`/detalles/${product.id}`}>Ver detalles</Link>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};