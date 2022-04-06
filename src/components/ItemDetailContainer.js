import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { promesa } from '../mocks/falseApi'
import ItemDetail from './itemDetail'

const ItemDetailContainer = (cart, setCart) => {
  const [detailProduct, setdetailProduct]=useState(true)
  const {detalleId}= useParams();

   useEffect(()=>{
     promesa
    .then((respuesta)=>setdetailProduct(respuesta.find((item)=> item.id=== Number(detalleId))))
  }, [detalleId]) 



  return (
  <ItemDetail detailProduct={detailProduct} /> 
  )
}

export default ItemDetailContainer