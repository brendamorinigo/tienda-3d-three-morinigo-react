import React, { useEffect, useState } from 'react'
import { promesa } from '../mocks/FalseApi'
import ItemDetail from './itemDetail'

const ItemDetailContainer = () => {
  const [detailProduct, setdetailProduct]=useState({})
  useEffect(()=>{promesa
    .then((respuesta)=>setdetailProduct(respuesta.find((item)=> item.id===1)))
  }, [])

  return (
    <ItemDetail detailProduct={detailProduct}/>
  )
}

export default ItemDetailContainer