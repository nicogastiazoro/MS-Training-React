import React from "react";
import { Card } from "react-bootstrap";
import ItemCount from "./ItemCount";
import { useState } from "react";
import { useItems } from "./CartContext";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ItemDetail = ({ item }) => {

  const {addItem} = useItems();

  const [flagItemCount,setFlagItemCount] = useState(true);

  const onAdd = (quantityToAdd) =>{
    
    setFlagItemCount(!flagItemCount)

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
          { 
            flagItemCount ?
            <ItemCount className="text-center" stock={5} initial={1} onAdd={onAdd}/>
            :
            <Link to={`/cart`}>
              <Button variant="outline-dark">
                Finalizar Compra
              </Button>
            </Link>
          }
        </Card.Body>
      </Card>
  );
};

export default ItemDetail;
