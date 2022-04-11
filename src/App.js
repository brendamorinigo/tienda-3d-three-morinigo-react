import NavBar from "./components/Navbar";
import ItemlistContainer from "./components/ItemListContainer";
import ItemDetail from "./components/ItemDetailContainer";
import CartView from "./components/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacto from "./components/Contacto";
import Error from "./components/Error";
import { products } from "./mocks/FalseApi";
import {CartProvider } from "./context/CartContext";


function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <div className="contenedor-navbar">
              <NavBar products={products}> </NavBar>
            </div>
          </header>
        </div>
        <Routes>
          <Route path="/" element={<ItemlistContainer />} />
          <Route path="/categoria/:parametro" element={<ItemlistContainer />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="detail/:detalleId" element={<ItemDetail />} />{" "}
          <Route path="/cart" element={<CartView />}></Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}
export default App;
