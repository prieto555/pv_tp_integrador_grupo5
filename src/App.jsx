import { ProductProvider } from "./assets/context/ProductContext";
import { Route, Routes } from "react-router-dom";
import Añadir from "./assets/pages/Añadir";
import { Inicio } from "./assets/pages/Inicio";
import ProductList from "./assets/pages/ProductList";
import  Navbar   from "./assets/components/Navbar";
import { Footer } from "./assets/components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Editar } from "./assets/pages/Editar";

const App = () => {
  return (
    <>
      <ProductProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/añadir" element={<Añadir />} />
          <Route path="/lista-productos" element={<ProductList />} />
          <Route path="/editar/:id" element={<Editar/>} ></Route>
        </Routes>
        <Footer />
      </ProductProvider>
    </>
  );
};
export default App;