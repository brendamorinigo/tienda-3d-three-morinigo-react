import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Card } from "react-bootstrap";

function Cart() {
  const { cart } = useContext(CartContext);
  return (
    <div className="container-cart">
      <h3>Mis productos</h3>
      <div>
        {cart.map((art) => (
          <div key={art.id}>
            <Card style={{ width: "18rem" }} className="contenedor-card">
              <h5>Articulo: {art.name}</h5>
              <h5>Cantidad: {art.cantidad}</h5>
              <h4>Total: {art.price * art.cantidad} </h4>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;