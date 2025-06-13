import { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  
  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };
  const findProduct = (id) => {
    const productFind = products.find(prod => prod.id == id);
    return productFind;
  };

  const editProducts = (id, updatedProduct) => {
    setProducts(products.map(product =>
      product.id === parseInt(id) ? { ...product, ...updatedProduct } : product
    ));
  }

  const handleDeleteProduct = (id) => {
    setProducts(products.map(product =>
      product.id === id ? { ...product, active: false } : product
    ));
  };

  return (
    <ProductContext.Provider value={{ findProduct, editProducts, products, addProduct, handleDeleteProduct, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};