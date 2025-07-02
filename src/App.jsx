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
import { ProtectorRutas } from "./assets/components/ProtectorRutas";
const App = () => {
  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <Navbar_function />
          <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/inicio" element={<ProtectorRutas rolesPermitidos={['ADMINISTRATIVO','CLIENTE']}><Inicio /></ProtectorRutas>} />
          <Route path="/añadir" element={<ProtectorRutas rolesPermitidos={['ADMINISTRATIVO']}><Añadir /></ProtectorRutas>} />
          <Route path="/lista-productos" element={<ProtectorRutas rolesPermitidos={['ADMINISTRATIVO','CLIENTE']}><ProductList /></ProtectorRutas>} />
          <Route path="/editar/:id" element={<ProtectorRutas rolesPermitidos={['ADMINISTRATIVO']}><Editar /></ProtectorRutas>} />
          <Route path="/contacto" element={<ProtectorRutas rolesPermitidos={['ADMINISTRATIVO','CLIENTE']}><Contacto /></ProtectorRutas>} />
          <Route path="/detalles/:id" element={<ProtectorRutas rolesPermitidos={['ADMINISTRATIVO','CLIENTE']}><Detalles /></ProtectorRutas>} />
          <Route path="/favoritos" element={<ProtectorRutas rolesPermitidos={['ADMINISTRATIVO','CLIENTE']}><Favoritos /></ProtectorRutas>} />
          <Route path="/papelera" element={<ProtectorRutas rolesPermitidos={['ADMINISTRATIVO']}><Papelera /></ProtectorRutas>} />
          <Route path="/*" element={<ProtectorRutas rolesPermitidos={['ADMINISTRATIVO','CLIENTE']}><ErrorPage /></ProtectorRutas>} />
        </Routes>
        </main>
        <Footer />
      </div >
    </>

  );
};
export default App;