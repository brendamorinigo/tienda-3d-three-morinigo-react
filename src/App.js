import NavBar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacto from "./components/Contacto";
import Error from "./components/Error";
import { products } from "./mocks/FalseApi";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <div className="contenedor-navbar">
            <NavBar products={products} />
          </div>
        </header>
      </div>
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/categoria/:parametro" element={<ItemListContainer />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="detail/:detalleId" element={<ItemDetailContainer />} />
        <Route path=""></Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
