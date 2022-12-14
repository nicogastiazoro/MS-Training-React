import React from "react";
import { useItems } from "./CartContext";
import { Button, Container } from "react-bootstrap";
import { Table } from "react-bootstrap";
import CartItems from "./CartItems";
import Form from "react-bootstrap/Form";
import { useRef } from "react";
import { Link } from "react-router-dom";
import {
  addDoc,
  collection,
  doc,
  getFirestore,
  updateDoc,
} from "firebase/firestore";
import Swal from "sweetalert2";

function Cart() {
  const { items, clear } = useItems();

  const onSubmit = (evt) => {
    evt.preventDefault();
    evt.stopPropagation();

    const order = {
      buyer: {
        name: name.current.value,
        phone: phone.current.value,
        email: email.current.value,
      },
      items: { ...items },
      cantidadItems: items.reduce((acc, c) => acc + c.quantity, 0),
      total: items.reduce((acc, c) => acc + c.price * c.quantity, 0),
    };
    console.log(order);

    const db = getFirestore();
    const orderCollection = collection(db, "orders");

    addDoc(orderCollection, order).then(({ id }) => {
      console.log({ id });
      // debugger
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Su orden fue generada con exito",
        showConfirmButton: false,
        timer: 1500,
      });

      items.map((d) => {
        let docRef = doc(db, "items", d.id);
        let data = { sold: d.quantity };
        updateDoc(docRef, data)
          .then((docRef) => {
            console.log("Value of an Existing Document Field has been updated");
          })
          .catch((error) => {
            console.log(error);
          });
        console.log(d.id, d.quantity);
        return true;
      });
      clear();
    });
  };

  const name = useRef(null);
  const phone = useRef(null);
  const email = useRef(null);
  return (
    <Container>
      <h1 className="display-4 text-center">Finalizar compra</h1>
      {items.length ? (
        <Container>
          <Table striped bordered hover className="text-center">
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
            <CartItems />
          </Table>
        </Container>
      ) : (
        <>
          <h3 style={{ margin: "5rem" }}>
            A??n no ha seleccionado ning??n articulo
          </h3>
          <Link to={`/`}>
            <Button variant="outline-dark">Agregar productos</Button>
          </Link>
        </>
      )}
      <Container>
        {items.reduce((acc, c) => acc + c.quantity, 0) > 0 && (
          <>
            <Table striped bordered hover className="text-center">
              <thead>
                <tr>
                  <th>Cantidad Productos</th>
                  <th>Precio</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td> {items.reduce((acc, c) => acc + c.quantity, 0)}</td>
                  <td>
                    {" "}
                    $ {items.reduce((acc, c) => acc + c.price * c.quantity, 0)}
                  </td>
                </tr>
              </tbody>
            </Table>
            {items.length > 0 && (
              <>
                <Button variant="outline-dark" className="m-5" onClick={clear}>
                  VACIAR CARRITO
                </Button>
              </>
            )}

            <Form>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  ref={name}
                  type="text"
                  placeholder="Ingresar nombre"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  ref={email}
                  type="email"
                  placeholder="Ingresar email"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  ref={phone}
                  type="text"
                  placeholder="Ingrese su n??mero de telefono"
                />
              </Form.Group>

              <Button variant="outline-dark" type="submit" onClick={onSubmit}>
                Comprar
              </Button>
            </Form>
          </>
        )}
      </Container>
    </Container>
  );
}

export default Cart;
