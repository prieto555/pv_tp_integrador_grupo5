import { useState, useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const Añadir = () => {
  const { addProduct } = useContext(ProductContext);
  const [product, setProduct] = useState({
    id: "",
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
    active: true,
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct({ ...product, id: Date.now() });
    setProduct({ id: "", title: "", price: "", description: "", category: "", image: "" });
  };

  return (
    <>
    <h1>Agregar producto</h1>
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="Nombre" value={product.title} onChange={handleChange} required />
      <input type="number" name="price" placeholder="Precio" value={product.price} onChange={handleChange} required />
      <input type="text" name="description" placeholder="Descripción" value={product.description} onChange={handleChange} required />
      <input type="text" name="category" placeholder="Categoría" value={product.category} onChange={handleChange} required />
      <input type="text" name="image" placeholder="URL Imagen" value={product.image} onChange={handleChange} required />
      <button type="submit">Añadir Producto</button>
    </form>
    </>
  );
};

export default Añadir;