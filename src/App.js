import NavBar from "./components/navBar";
import ItemlistContainer from "./components/itemlistContainer";
import ItemDetail from "./components/itemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacto from "./components/contacto";
import Error from "./components/error";
import { products } from "./mocks/falseApi";
import { CartContext } from "./context/CartContext";
import { useState } from "react";

function App() {

  const [cart, setCart]= useState([]);
  console.log(cart)

    
    function addItem(item){
      setCart([...cart,item])
    }
    function itemInCart (id){
      console.log (id)
      return cart.some(prod=> prod.id===id)
    }
    
  return (
    <CartContext.Provider value={{cart, addItem, itemInCart}} >
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
