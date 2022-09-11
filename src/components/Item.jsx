import { Card } from "react-bootstrap";
import ItemCount from "./ItemCount";
import {Col} from "react-bootstrap";
import {Button} from "react-bootstrap";
import { Link } from "react-router-dom";


function Item({item}) {
//Estructura item: {id, title, price, pictureUrl}

return(
    <Col>
        <Card className="text-center py-4" style={{ width: '18rem' }}>
            <Card.Img style={{width: '5rem'}} variant="top" src={item.pictureUrl} />
            <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                    <span>
                        $ {Number.parseFloat(item.price).toFixed(2)}
                    </span>
                </Card.Text>
                <Link to={`/item/${item.id}`} key={item.id}>
                <Button variant="outline-dark" className="mt-4 ">Ver detalle de productoo</Button>
                </Link>
            </Card.Body>
        </Card>
    </Col>
)}

export default Item;