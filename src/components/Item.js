import { Button, Card} from 'react-bootstrap';
import { Link } from "react-router-dom";

function Item({product}){
    return (
    <div>
                        <Card style={{ width: '18rem'}} className="contenedor-card">
                <Card.Img variant="top" src={product.img} />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>Precio: ${product.price} </Card.Text>
                 </Card.Body>   
             <Button variant="primary" className="btn-contador" >Agregar</Button>
             <Button variant="primary" className="btn-contador"  >Eliminar</Button> 
             <Link to={ `/detail/${product.id}`}><Button variant="primary" className="btn-contador" >Ver mas</Button></Link>
        </Card> 
    </div>
      )
}
export default Item;

