import React, { useState } from "react";
import { Button } from "react-bootstrap";

function ItemCount({stock, addTocart}) {
  const [cantidad, setCantidad]= useState(0);

  const sumar = () => {
    cantidad < stock && setCantidad(cantidad + 1);
  };
  const restar = () => {
    cantidad > 0 && setCantidad(cantidad - 1);
  };

  return (
    <div className="container-counter" >
      <div className="contador">
      <Button variant="primary" className="btn-contador" onClick={restar}>
        -
      </Button>
      <h3>{cantidad}</h3>
      <Button variant="primary" className="btn-contador" onClick={sumar}>
        +
      </Button>
      </div>
      
      {stock > 0 ?
      <Button onClick={()=>addTocart(cantidad)}>Agregar al carro</Button>
      : <h3>Sin Stock</h3>
      }
    </div>
  );
}

export default ItemCount;
