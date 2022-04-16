import { createContext } from "react";
import React, { useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  function addItem(item) {
    if (item.cantidad > 0) {
      setCart([...cart, item]);
    } else {
      alert("La cantidad debe ser mayor a 0");
    }
  }

  function itemInCart(id) {
    return cart.some((element) => element.id === id);
  }

  function cantItems() {
    return cart.reduce((acc, prod) => (acc += prod.cantidad), 0);
  }
  function total() {
    return cart.reduce((acc, prod) => (acc += prod.cantidad * prod.price), 0);
  }

  function clearCart() {
    setCart([]);
  }
  function deleteItem(id) {
    const prodInCart = cart.filter((productInCart) => productInCart.id !== id);
    setCart(prodInCart);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        itemInCart,
        cantItems,
        total,
        clearCart,
        deleteItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
