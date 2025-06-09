import Añadir from "./assets/components/Añadir";
import { ProductProvider } from "./assets/context/ProductContext";
import ProductList from "./assets/components/ProductList"


const App = () => {
  return (
    <ProductProvider>
      <div>
        <h1>Gestión de Productos</h1>
        <Añadir />
        <ProductList/>
      </div>
    </ProductProvider>
  );
};

export default App;