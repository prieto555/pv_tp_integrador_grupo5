import { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const toggleFavorite = (id) => {
    setProducts(nuevo =>
      nuevo.map(p =>
        p.id === id ? { ...p, favorite: !p.favorite } : p
      )
    );
  };
  const deleteFavorito = () => {
    setProducts(products =>
      products.map(p => ({ ...p, favorite: false }))
    );
  };

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
      product.id === id ? { ...product, active: !product.active } : product
    ));
  };


  return (
    <ProductContext.Provider value={{ deleteFavorito, findProduct, editProducts, products, addProduct, handleDeleteProduct, setProducts, toggleFavorite }}>
      {children}
    </ProductContext.Provider>
  );
};