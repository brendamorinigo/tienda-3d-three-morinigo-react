import { createContext } from "react";
import React, { useState } from "react";
import { clear } from "@testing-library/user-event/dist/clear";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
  const [cart, setCart] = useState([]);
  console.log(cart)

  function addItem(item) {
    setCart([...cart, item]);

  }

  function itemInCart(id) {
    return cart.some((element) => element.id === id);
  }

  function cantItems() {
      return cart.reduce((acc, prod) => (acc += prod.cantidad), 0)

  }
  function total(){
    return cart.reduce((acc, prod) => (acc += prod.cantidad * prod.price),0)
  }

  function clearCart(){
    setCart([])
  }
  function deleteItem() {
    
    }
  return (
    <CartContext.Provider
      value={{ cart, addItem, itemInCart, cantItems, total, clearCart, clearItem}}>
        {children}
    </CartContext.Provider>
  );
};
