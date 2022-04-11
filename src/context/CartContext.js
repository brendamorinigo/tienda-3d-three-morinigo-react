import { createContext } from "react";
import React, { useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
  const [cart, setCart] = useState([]);
  const [cantidad, setCantidad] = useState(0);

  function addItem(item) {
    setCart([...cart, item]);
  }
  console.log(cart);
  function itemInCart(id) {
    return cart.some((element) => element.id === id);
  }

  function cantItems() {
    return cart.reduce((acc, prod) => (acc += prod.cantidad), 0);
  }
  return (
    <CartContext.Provider
      value={{ cart, addItem, itemInCart, cantItems, cantidad, setCantidad }}>
        {children}
    </CartContext.Provider>
  );
};
