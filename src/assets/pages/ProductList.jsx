import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { Link } from "react-router-dom";
import { Eliminar } from "./Eliminar";
import Image from 'react-bootstrap/Image';

const ProductList = () => {
  const { products,toggleFavorite } = useContext(ProductContext);
  console.log(products, "Productos en la lista")
  const activeProducts = products.filter(product => product.active !== false);
  
  return (
    <div>
      {activeProducts.length > 0 ? (
        <>
          <h2>Lista de Productos</h2>
          <ul>
            {activeProducts.map((product) => (
              <div key={product.id}>
                <div className="card" style={{ width: '18rem' }}>
                  <Image className="card-img-top" src={product.image} alt="No imagen" width="100" thumbnail />
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">
                      <span>Precio: ${product.price}</span>
                    </p>
                    <Eliminar id={product.id} />
                    <Link className="btn btn-primary" to={`/editar/${product.id}`}>Editar</Link>
                    <Link to={`/detalles/${product.id}`}>Ver detalles</Link>
                    <button onClick={() => toggleFavorite(product.id)}>
                              {product.favorite ? ' Quitar de favoritos' : 'Agregar a favoritos'}
                    </button>
                  </div>
                </div>
              </div>

            ))}
          </ul>
        </>
      ) : (
        <h2 className="text-center text-danger mt-4">No se encontraron alumnos...</h2>
      )}
    </div>

  );
};
export default ProductList;