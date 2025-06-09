import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const ProductList = () => {
  const { products } = useContext(ProductContext);

  return (
    <div>
      <h2>Lista de Productos</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>Precio: ${product.price}</p>
            <p>{product.description}</p>
            <img src={product.image} alt={product.name} width="100" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;