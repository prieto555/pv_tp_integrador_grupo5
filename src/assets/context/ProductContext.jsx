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
  const editProducts = (id, formulario)=>{
    console.log(formulario);
    
    setProducts(products.map((a) => (a.id === id ? a : formulario)));
  }
  return (
    <ProductContext.Provider value={{ findProduct, editProducts, products, addProduct }}>
      {children}
    </ProductContext.Provider>
  );
};