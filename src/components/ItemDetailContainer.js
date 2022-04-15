import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { datab } from '../firebase/config'
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [detailProduct, setdetailProduct]=useState(true)
  const {detalleId}= useParams();

   useEffect(()=> {
     const detailFireBase= doc(datab, "Productos", detalleId)  
     getDoc(detailFireBase)
     .then(art=>{
       setdetailProduct({id: art.id, ...art.data()})
     })
  },[detalleId]) 

  return (
  <ItemDetail 
  name={detailProduct.name}
  price={detailProduct.price}
  categoria={detailProduct.categoria}
  id={detailProduct.id}
  stock={detailProduct.stock}
  img={detailProduct.img} /> 
  )
}

export default ItemDetailContainer