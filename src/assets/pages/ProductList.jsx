import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { Link } from "react-router-dom";

const ProductList = () => {
  const { products } = useContext(ProductContext);
  console.log(products, "Productos en la lista")
  return (
    <div>
      {products.length > 0  ? (
        <>
          <h2>Lista de Productos</h2>
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                <h3>{product.name}</h3>
                <p>Precio: ${product.price}</p>
                <p>{product.description}</p>
                <img src={product.image} alt={product.name} width="100" />
                <Link to={`/editar/${product.id}`}>Editar</Link>
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