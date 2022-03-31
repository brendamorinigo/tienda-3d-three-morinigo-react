import React, { useState } from 'react'
import {Button} from 'react-bootstrap'


function Count ({initial, stock, onAdd}){
    const[contador,setContador]=useState(initial);

  
     function sumar(){
        if (contador === stock ){
            return
        }
        else{
            setContador(contador+1)
            console.log(stock)
        }
    }
  
    function restar() { 
        if(contador===0){
            return
        } else{
            setContador(contador - 1)
        }
     };

    function addTocart(){
        if(contador<=stock && contador >0){
            onAdd()
          }
          else{
            alert("No hay stock")
          }
    }
    return(
        <div>
        <h3>{contador}</h3>
        <h6>{stock} </h6>
        <Button variant="primary" className="btn-contador" onClick={sumar}>Agregar</Button>
        <Button variant="primary" className="btn-contador" onClick={restar}>Eliminar</Button> 
{       <Button variant="primary" className="btn-contador" onClick={addTocart}>Agregar al carro</Button>}
        </div>
    )
}

export default Count;