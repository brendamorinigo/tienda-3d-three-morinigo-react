import { Button, Card} from 'react-bootstrap';
import { Link } from "react-router-dom";

function Item({product}){
    return (
    <div>
                        <Card style={{ width: '18rem'}} className="contenedor-card" >
                <Card.Img variant="top" src={product.img} />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>Precio: ${product.price} </Card.Text>
                 </Card.Body>   
             <Link to={ `/detail/${product.id}`}><Button variant="primary" className="btn-ver" >Ver mas</Button></Link>
        </Card> 
    </div>
      )
}
export default Item;
