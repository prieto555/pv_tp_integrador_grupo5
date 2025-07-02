import { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const toggleFavorite = (id) => {
    setProducts(prev =>
      prev.map(p =>
        p.id === id ? { ...p, favorite: !p.favorite } : p
      )
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
    <ProductContext.Provider value={{ findProduct, editProducts, products, addProduct, handleDeleteProduct, setProducts, toggleFavorite }}>
      {children}
    </ProductContext.Provider>
  );
};