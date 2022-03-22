import React, { useState } from 'react';
import Shopinitial from './ShopInicial'


const ItemListContainer = () => {
    const [products, setProducts]= useState(
        [
            {id:1, name:"cortante", price:100, stock:10},
            {id:2, name:"iron man", price:800,stock:10},
            {id:3, name:"maceta", price:300,stock:10},
        ])
    ;

return (
    <div className='containerCard'>
    {products.map((product)=>{
        return <Shopinitial name={product.name} price={product.price} stock={10} />
    })}</div>
);
    
}
export default ItemListContainer; 

