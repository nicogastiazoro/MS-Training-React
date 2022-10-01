import React from "react";
import { useItems } from "./CartContext";
import { Button, Container } from "react-bootstrap";
import ItemList from "./ItemList";
import {Table} from "react-bootstrap";
import CartItems from "./CartItems";

function Cart() {
  const {items,clear} = useItems();
  return (
    <div>
      <h1 className="display-4 text-center">Finalizar compra</h1>
      {items.length ? (
        <Container>
          <Table striped bordered hover className='text-center'>
            <thead>
              <tr>
                <th>Item ID</th>
                <th>Producto</th>
                <th>Precio Unitario</th>
                <th>Cantidad</th>
                <th>Subtotal</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <CartItems/>
            </Table>
        </Container>
      ) : (
        <h3 style={{ margin: "5rem" }}>No hay compras...</h3>
      )}
      <Container>
        {items.length > 0 && (
          <>
            <Button variant="outline-dark" className="m-5" onClick={clear}>
              VACIAR CARRITO
            </Button>
          </>
        )}
        {items.reduce((acc, c) => acc + c.quantity, 0) > 0 && (
          <>
            <h6 style={{ margin: "1rem" }}>
              Cantidad Total de Items:{" "}
              {items.reduce((acc, c) => acc + c.quantity, 0)}
            </h6>
          </>
        )}
        {items.reduce((acc, c) => acc + c.price * c.quantity, 0) > 0 && (
          <>
            <h6 style={{ margin: "1rem" }}>
              Total de la Compra:{" "}
              {items.reduce((acc, c) => acc + c.price * c.quantity, 0)}
            </h6>
          </>
        )}
      </Container>
    </div>
  );
}

export default Cart;
