import NavBar from "./components/NavBar";
import ItemlistContainer from "./components/ItemlistContainer";
import ItemDetail from "./components/ItemDetailContainer";
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
        <Route path="/" element={<ItemlistContainer />} />
        <Route path="/categoria/:parametro" element={<ItemlistContainer />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="detail/:detalleId" element={<ItemDetail />} />{" "}
        <Route path=""></Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
