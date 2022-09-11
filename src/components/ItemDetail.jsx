import React from "react";
import { Card, Container } from "react-bootstrap";
import ItemCount from "./ItemCount";
import { Col } from "react-bootstrap";
import {Button} from "react-bootstrap";

const ItemDetail = ({ item }) => {
  return (
      <Card className="py-4 " style={{ width: "18rem" }}>
        <Card.Img
          style={{ width: "5rem" }}
          variant="top"
          src={item.pictureUrl}
        />
        <Card.Body className="text-center">
          <Card.Title className="py-4">{item.title}</Card.Title>
          <Card.Subtitle>
            Descripcion
          </Card.Subtitle>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
            molestiae quas. Quis reiciendis ratione porro amet culpa molestiae
            qui. Dignissimos ex reiciendis corporis cupiditate dolorem atque,
            cumque deleniti doloribus blanditiis.
          </Card.Text>
          
          <Card.Subtitle>
                Precio Unitario
          </Card.Subtitle>
          <Card.Text className=''>  
            <span>$ {Number.parseFloat(item.price).toFixed(2)}</span>
          </Card.Text>
          <ItemCount className="text-center" stock={5} initial={1} />
          <Button variant="outline-success" className="my-3 ">Agregar a Carrito</Button>
        </Card.Body>
      </Card>
  );
};

export default ItemDetail;
