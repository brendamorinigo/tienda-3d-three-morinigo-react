/* import React, {useState} from "react";
import { Button } from 'react-bootstrap';


function ContadorProd(props) {
    const[contador, setContador]= useState(1);
    const FuncionesContador=(type)=>{
        if(contador < 1 && type==='restar') {
            return
        }
        if(type==='sumar'){
            setContador(contador +1)
        }else if(type==='restar'){
            setContador(contador -1)
        }
}
     return(
         <div className="btn-count">
             <h2>Agregar al carrito</h2>
             <h3>{contador}</h3>
             <Button variant="primary" className="btn-contador" onClick={()=> FuncionesContador('sumar')}>Agregar</Button>
             <Button variant="primary" className="btn-contador" onClick={()=> FuncionesContador('restar')} >Eliminar</Button>
         </div>
     )
 }

 export default ContadorProd; */