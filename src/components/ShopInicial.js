import React, {useState} from "react";
import { Button, Card} from 'react-bootstrap';

const ShopInicial = ({stock, initial, onAdd}) =>{
let [contador, setContador]= useState(initial);
let [cant, setStock]= useState(stock);

function sumar(){
    if(contador<=cant){
      setContador(contador+1)

    }
    else if(contador=cant){
      return
    }
};

function restar(){
    if(contador<=0){
        return
    }
    else if(contador>=0){
        setContador(contador-1)
    }    
};
const addToCart=()=>{
  onAdd();
}

  return (
    <div className='card'>
                    <Card style={{ width: '18rem'}} className="contenedor-card">
            <Card.Img variant="top" src='https://img2.cgtrader.com/items/3050459/60232a08f5/large/jujutsu-kaisen-ryomen-sukuna-3d-model-stl.jpg' />
            <Card.Body>
                <Card.Title>{/* {props.name} */}titulo </Card.Title>
                <Card.Text>${/* {props.price} */}precio </Card.Text>
             </Card.Body>   
         <h3>{contador}</h3>
         <h4>{stock}</h4>
         <Button variant="primary" className="btn-contador" onClick={sumar} >Agregar</Button>
         <Button variant="primary" className="btn-contador" onClick={restar} >Eliminar</Button> 
         <Button variant="primary" className="btn-contador" onClick={addToCart} >ADD</Button> 
    </Card> 
    </div>

  )
}
export default ShopInicial;
