import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { Link } from "react-router-dom";
import { Eliminar } from "./Eliminar";

const ProductList = () => {
  const { products } = useContext(ProductContext);
  const activeProducts = products.filter(product => product.active !== false);
  console.log(products, "Productos en la lista")
  return (
    <div>
      {activeProducts.length > 0 ? (
        <>
          <h2>Lista de Productos</h2>
          <ul>
            {activeProducts.map((product) => (
              <li key={product.id}>
                <div className="card" style={{ width: '18rem' }}>
                  <img className="card-img-top" src={product.image} alt="No imagen" width="100" />
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">
                      <span>Precio: ${product.price}</span>
                      <span>{product.description}</span>
                    </p>
                    <Eliminar id={product.id} />
                    <Link className="btn btn-primary" to={`/editar/${product.id}`}>Editar</Link>
                    <Link to={`/detalles/${product.id}`}>Ver detalles</Link>
                  </div>
                </div>
              </li>

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