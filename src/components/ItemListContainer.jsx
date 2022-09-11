import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import Container from "react-bootstrap/esm/Container";
import itemsJson from "../itemsJson.json";
import products from "./products";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const { category } = useParams();

  const getItems = (data, time) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (data) {
          resolve(data);
        } else {
          reject("Error");
        }
      }, time);
    });

  useEffect(() => {
    getItems(products, 2000)
      .then((res) => {
        console.log(res);
        console.log(category)
        category ? setItems(res.filter( p => p.category == category)) : setItems(res);
      })
      .catch((err) => {
        console.log(err, ": no hay items para mostrar");
      });
  });
  return (
    <Container>
      <ItemList items={items} />
    </Container>
  );
};
export default ItemListContainer;
