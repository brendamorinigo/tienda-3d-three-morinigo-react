import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import ItemlistContainer from "./components/ItemListContainer";
import ItemDetail from "./components/ItemDetailContainer";
import Contacto from "./components/Contacto";
import Error from "./components/Error";
import { products } from "./mocks/FalseApi";
import { CartContext } from "./context/CartContext";

function App() {
  const [cart, setCart] = useState([]);
  console.log(cart);

  function addItem(item) {
    setCart([...cart, item]);
  }
  function itemInCart(id) {
    console.log(id);
    return cart.some((prod) => prod.id === id);
  }

  return (
    <CartContext.Provider value={{ cart, addItem, itemInCart }}>
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
    </CartContext.Provider>
  );
}
export default App;
