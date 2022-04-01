import React from "react";
import { Button, Card} from 'react-bootstrap';
import { Link, useNavigate} from "react-router-dom";

function Items({detailProduct}){
    const {name, price}=detailProduct;
    const navigate= useNavigate()

    const handleNavigate=()=>{
        navigate(-1)
    }

    return (
        <div className='card'>
            <div className="titulo-producto"><h4>{detailProduct.name}</h4></div>
                        <Card style={{ width: '18rem'}} className="contenedor-card">
                <Card.Img variant="top" src={detailProduct.img}/>
                <Card.Body>
                    <Card.Title>{detailProduct.name}</Card.Title>
                    <Card.Text><h5>Precio: ${detailProduct.price}</h5></Card.Text>
                    <Card.Text>{detailProduct.detail} </Card.Text>
                 </Card.Body>   
             <Button variant="primary" className="btn-contador" >Agregar</Button>
             <Button variant="primary" className="btn-contador"  >Eliminar</Button> 
        </Card> 
        <p></p>
        <button className="btn-return" onClick={handleNavigate}>Ir a pagina anterior</button>
        </div>
      )
}
export default Items;