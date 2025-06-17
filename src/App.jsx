import { Route, Routes } from "react-router-dom";
import Añadir from "./assets/pages/Añadir";
import { Inicio } from "./assets/pages/Inicio";
import ProductList from "./assets/pages/ProductList";
import Navbar_function from "./assets/components/Navbar";
import { Footer } from "./assets/components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Editar } from "./assets/pages/Editar";
import { Contacto } from "./assets/pages/Contacto";
import { Detalles } from "./assets/pages/Detalles";
import { Favoritos } from "./assets/pages/Favoritos";
import { ErrorPage } from "./assets/pages/ErrorPage";
import { Papelera } from "./assets/pages/Papelera";
import { Login } from "./assets/components/Login";
const App = () => {
  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <Navbar_function />
          <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/añadir" element={<Añadir />} />
          <Route path="/lista-productos" element={<ProductList />} />
          <Route path="/editar/:id" element={<Editar />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/detalles/:id" element={<Detalles />} />
          <Route path="/favoritos" element={<Favoritos />} />
          <Route path="/papelera" element={<Papelera />} />
          <Route path="/*" element={<ErrorPage />} />

        </Routes>
        </main>
        <Footer />
      </div >
    </>

  );
};
export default App;