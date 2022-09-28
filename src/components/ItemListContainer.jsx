import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import Container from "react-bootstrap/esm/Container";
import products from "./products";
import { useParams } from "react-router-dom";
import { getAllProducts,getProductsByCategory } from "./helpers/firebaseHelpers";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import Item from "./Item";

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  // // const getItems = (data, time) =>
  // //   new Promise((resolve, reject) => {
  // //     setTimeout(() => {
  // //       if (data) {
  // //         resolve(data);
  // //       } else {
  // //         reject("Error");
  // //       }
  // //     }, time);
  // //   });

  useEffect(() => {
    const getProducts = () => {
      const db = getFirestore();
      const itemCollection = collection(db, "items");
      getDocs(itemCollection).then((res) => {
        setItems(res.docs.map((d) => ({ id: d.id, ...d.data() })));
        console.log(items);
      });
    };
    getProducts();
  }, []);

  // // useEffect(() => {
  // //   getItems(products, 2000)
  // //     .then((res) => {
  // //       category ? setItems(res.filter( p => p.category == category)) : setItems(res);
  // //     })
  // //     .catch((err) => {
  // //       console.log(err, ": no hay items para mostrar");
  // //     });
  // // });

  // return (
  //   <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
  //   {items.length ? (
  //     items.map((item) =>
  //       // <Link to={`/item/${item.id}`} key={item.id}>
  //         <Item key={item.id} item={item}/>
  //       // </Link>)
  //   )) : (
  //     <h2>Cargando items...</h2>
  //   )}
  // </div>
  // );

  return (
    <Container>
      <ItemList items={items} />
    </Container>
  );
};
export default ItemListContainer;
