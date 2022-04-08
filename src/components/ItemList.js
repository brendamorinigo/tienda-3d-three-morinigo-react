import react from 'react'
import Item from './Item'

const listItem=({lista})=>{
    return(
    <div className='containerCard'>
    {lista.map((product)=><Item product={product} key={product.id}/>)}
    </div>
    )
}

export default listItem;