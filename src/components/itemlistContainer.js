import React, { useState } from 'react';
import Shopinitial from './ShopInicial'

const stock=10;
const initial=1;

function onAdd(){
    console.log("click")
}

const ItemListContainer = () => {

return (
    <div className='containerCard'>
     <Shopinitial  stock={stock} initial={initial} onAdd={onAdd} />
    </div>

);
    
}
export default ItemListContainer; 


/* const [products, setProducts]= useState(
    [
        {id:1, name:"cortante", price:100},
        {id:2, name:"iron man", price:800},
        {id:3, name:"maceta", price:300},
    ])
;

return (
<div className='containerCard'>
{products.map((product)=>{
    return <Shopinitial name={product.name} price={product.price} stock={stock} initial={initial} onAdd={onAdd} />
})}</div>
); */
