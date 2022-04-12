import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Card, Button} from "react-bootstrap";

function Cart() {
  const { cart, total,clearCart, deleteItem } = useContext(CartContext);
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
              <button type="button" >Eliminar</button>
            </Card>
          </div>
        ))}
        <div>
        <h3>Total: ${total()}</h3>
        <Button  variant="primary" className="btn-contador" onClick={clearCart}>
            Vaciar carrito
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
