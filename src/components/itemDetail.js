import React, { useContext, useState } from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ItemCount from "./itemCount";
import { CartContext } from "../context/CartContext";


function Items({ detailProduct}) {
  const {cart, addItem, itemInCart}= useContext(CartContext);
  console.log(itemInCart(detailProduct.id) );


  const [cantidad, setCantidad] = useState(0);

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(-1);
  };

  const addCart = () => {
    const itemAdd={
      detailProduct
    }
    addItem(itemAdd)
  };

  return (
    <div className="card">
      <div className="titulo-producto">
        <h4>{detailProduct.name}</h4>
      </div>
      <Card style={{ width: "18rem" }} className="contenedor-card">
        <Card.Img variant="top" src={detailProduct.img} />
        <Card.Body>
          <Card.Title>{detailProduct.name}</Card.Title>
          <h5>Precio: ${detailProduct.price},00</h5>
          <Card.Text>{detailProduct.detail} </Card.Text>
        </Card.Body>
        <ItemCount
          stock={detailProduct.stock}
          addTocart={addCart}
          id={detailProduct.id}
          cantidad={cantidad}
          setCantidad={setCantidad}
        />
      </Card>

      <button className="btn-return" onClick={handleNavigate}>
        Ir a pagina anterior
      </button>
    </div>
  );
}
export default Items;
