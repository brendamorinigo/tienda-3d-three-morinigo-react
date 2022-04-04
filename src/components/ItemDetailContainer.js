import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { promesa } from '../mocks/FalseApi'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
  const [detailProduct, setdetailProduct]=useState(true)
  const {detalleId}= useParams();

   useEffect(()=>{
     promesa
    .then((respuesta)=>setdetailProduct(respuesta.find((item)=> item.id=== Number(detalleId))))
  }, [detalleId]) 

  const AddTocart = (id) => {
    console.log(id)
  };
  const delItem = () => {};


  return (
  <ItemDetail detailProduct={detailProduct} AddTocart={AddTocart} /> 
  )
}

export default ItemDetailContainer