import React from "react";
import { Card } from "react-bootstrap";
import ItemCount from "./ItemCount";
import { useState } from "react";
import { useItems } from "./CartContext";

const ItemDetail = ({ item }) => {

  const {addItem} = useItems();

  const [counter,setCounter] = useState(0);

  const onAdd = (quantityToAdd) =>{
    setCounter(quantityToAdd)
    addItem(item,quantityToAdd)
  }


  
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
          <ItemCount className="text-center" stock={5} initial={1} onAdd={onAdd} />
        </Card.Body>
      </Card>
  );
};

export default ItemDetail;
