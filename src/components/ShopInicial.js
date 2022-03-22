import React, {useState} from "react";
import { Button, Card} from 'react-bootstrap';

const ShopInicial = (props) =>{
let [contador, setContador]= useState(0)
let [stock, setStock]= useState(10);

function sumar(){
    if(contador<=stock){
      setContador(contador+1)
      setStock(stock-1)
    }
    else{
        alert("sin stock")
    }
};

function restar(){
    if(contador<=0){
        return
    }
    else{
        setContador(contador-1)
    }    
};

  return (
    <div className='card'>
                    <Card style={{ width: '18rem'}} className="contenedor-card">
            <Card.Img variant="top" src='https://img2.cgtrader.com/items/3050459/60232a08f5/large/jujutsu-kaisen-ryomen-sukuna-3d-model-stl.jpg' />
            <Card.Body>
                <Card.Title>{props.name} </Card.Title>
                <Card.Text>${props.price} </Card.Text>
             </Card.Body>   
         <h3>{contador}</h3>
         <h4>{stock}</h4>
         <Button variant="primary" className="btn-contador" onClick={sumar} >Agregar</Button>
         <Button variant="primary" className="btn-contador" onClick={restar} >Eliminar</Button> 
    </Card> 
    </div>

  )
}
export default ShopInicial;
