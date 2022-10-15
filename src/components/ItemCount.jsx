import { useState } from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

function ItemCount({ stock, initial, onAdd }) {
  const [counter, setCounter] = useState(initial);

  const handleOnAdd = () => {
    if (counter + 1 <= stock) {
      setCounter(counter + 1);
    }
  };

  const handleSubtract = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };
  return (
    <div>
      <Row>
        <Col className="ms-5">
          <Button onClick={handleSubtract} variant="outline-secondary">
            -
          </Button>
        </Col>
        <Col>
          <Card.Text className="text-center">{counter}</Card.Text>
        </Col>
        <Col className="me-5">
          <Button onClick={handleOnAdd} variant="outline-secondary">
            +
          </Button>
        </Col>
      </Row>
      <Button onClick={() => { onAdd(counter)}} variant="outline-success" className="my-3 ">
        Agregar a Carrito
      </Button>
    </div>
  );
}

export default ItemCount;
