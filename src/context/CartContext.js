import { createContext } from "react";
import React, { useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
  const [cart, setCart] = useState([]);

  function addItem(item) {
    setCart([...cart, item]);
  }

  function itemInCart(id) {
    return cart.some((element) => element.id === id);
  }

  function cantItems() {
      return cart.reduce((acc, prod) => (acc += prod.cantidad), 0)

  }
  return (
    <CartContext.Provider
      value={{ cart, addItem, itemInCart, cantItems}}>
        {children}
    </CartContext.Provider>
  );
};
