import React, { useEffect, useState } from 'react';
import Itemlist from './itemlist'
import { promesa } from '../mocks/FalseApi';


const ItemListContainer = () => {
    const [lista, setlista]=useState([]);
    const[loading, setLoading]=useState(false);


    useEffect(()=>{
        setLoading(true)
        promesa.then((result)=>setlista(result))
        .catch((bad)=> console.log("error"))
        .finally(()=> setLoading(false))
    },[]) 

    return(
        <div>
            <h1>
                Titulo
            </h1>
            {loading ? <p>Loading...</p> : ''}
            <Itemlist lista={lista}/>
        </div>
    )
}
export default ItemListContainer; 








