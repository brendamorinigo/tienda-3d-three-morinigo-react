import { Button, Card} from 'react-bootstrap';

function item({product}){
    return (
        <div className='card'>
                        <Card style={{ width: '18rem'}} className="contenedor-card">
                <Card.Img variant="top" src={product.img} />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>${product.price} </Card.Text>
                 </Card.Body>   
             <Button variant="primary" className="btn-contador" >Agregar</Button>
             <Button variant="primary" className="btn-contador"  >Eliminar</Button> 
        </Card> 
        </div>
      )
}
export default item;

