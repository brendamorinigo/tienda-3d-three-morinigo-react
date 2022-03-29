import React from "react";
import { Button, Card} from 'react-bootstrap';

function item({detailProduct}){
    const {name, price}=detailProduct;

    return (
        <div className='card'>
                        <Card style={{ width: '18rem'}} className="contenedor-card">
                <Card.Img variant="top" src={detailProduct.img}/>
                <Card.Body>
                    <Card.Title>{detailProduct.name}</Card.Title>
                    <Card.Text>${detailProduct.price} </Card.Text>
                    <Card.Text>{detailProduct.detail} </Card.Text>
                 </Card.Body>   
             <Button variant="primary" className="btn-contador" >Agregar</Button>
             <Button variant="primary" className="btn-contador"  >Eliminar</Button>  
        </Card> 
        </div>
      )
}
export default item;