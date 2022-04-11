import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";

function ItemDetail({ name, price, stock, id, categoria, detail, img }) {
  const { cart, addItem, itemInCart } = useContext(CartContext);
  console.log(itemInCart(id));

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(-1);
  };

  const addCart = (cantidad) => {
    if(cantidad<=stock){
    const itemAdd = { name, price, stock, cantidad, id, categoria };
    addItem(itemAdd);
    }
  };

  return (
    <div className="card">
      <div className="titulo-producto">
        <h4>{name}</h4>
      </div>
      <Card style={{ width: "18rem" }} className="contenedor-card">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <h5>Precio: ${price},00</h5>
          <Card.Text>{detail} </Card.Text>
        </Card.Body>

        {!itemInCart(id) ? (
          <ItemCount stock={stock} addTocart={addCart} />
        ) : (
         <Link to="/cart" ><Button  variant="primary" className="btn-contador">
            Finalizar compra
          </Button></Link>
        )}
      </Card>

      <button className="btn-return" onClick={handleNavigate}>
        Ir a pagina anterior
      </button>
    </div>
  );
}
export default ItemDetail;
