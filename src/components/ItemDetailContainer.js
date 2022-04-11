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