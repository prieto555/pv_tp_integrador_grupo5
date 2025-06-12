import { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "asda",
      price: 123,
      description: "asdasd",
      category: "asdasd",
      image: "https://imgs.search.brave.com/n1CuJotKHxi27tTB5t3arQoAy3YJdhE_H0CMI6XrnvY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9lcy1z/dG9yZS5tc2kuY29t/L2Nkbi9zaG9wL2Zp/bGVzL3RhcmpldGEt/Z3JhZmljYS1tc2kt/bnZpZGlhLWdlZm9y/Y2UtcnR4LTUwOTAt/MzJnLXN1cHJpbS1z/b2MucG5nP3Y9MTcz/NzcyMjY3OSZ3aWR0/aD00NjA",
      active: true,
    }
  ]);

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
    <ProductContext.Provider value={{ findProduct, editProducts, products, addProduct, handleDeleteProduct }}>
      {children}
    </ProductContext.Provider>
  );
};