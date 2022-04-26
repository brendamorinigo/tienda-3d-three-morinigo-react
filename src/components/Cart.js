import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, total, clearCart, deleteItem } = useContext(CartContext);

  return (
    <div className="container-cart">
      <h3>Mis productos</h3>
      <div>
        {cart.map((art) => (
          <div className="container-products" key={art.id}>
            <Card style={{ width: "60rem" }} className="item-products"> 
              <h5>Articulo: {art.name}</h5>
              
              <h5>Cantidad: {art.cantidad}</h5>
              <h4>Total: {art.price * art.cantidad} </h4>
              <button type="button" onClick={() => deleteItem(art.id)}>
                Eliminar
              </button>
            </Card>
          </div>
        ))}
        {cart === 0 ? (
          <h3>Tu carrito esta vacio</h3>
        ) : (
          <div className="container-count">
            <h3>Total: ${total()}</h3>
            <Button
              variant="primary"
              className="btn-contador"
              onClick={clearCart}
            >
              Vaciar carrito
            </Button>
            <Link to="/checkOut">
              <Button variant="primary" className="btn-contador">
                Finalizar compra
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
