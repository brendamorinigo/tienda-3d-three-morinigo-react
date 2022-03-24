import React, { useEffect, useState } from 'react';
import Itemlist from './itemlist'



const ItemListContainer = () => {
    const [lista, setlista]=useState([]);
    const[loading, setLoading]=useState(false);

    const products= 
        [
            {id:1, name:"cortante", price:100, stock:12},
            {id:2, name:"iron man", price:800,stock:12},
            {id:3, name:"maceta", price:300,stock:12},
        ]
    ;

    const promesa= new Promise((resolver, error)=>{
        let condicion= true
        if(condicion){
            setTimeout(()=>{
                resolver(products)
            },3000)
        }else{
            error('esta mal')
        }
    })
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








