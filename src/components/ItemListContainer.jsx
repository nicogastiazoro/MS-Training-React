import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import Container from "react-bootstrap/esm/Container";
import products from "./products";
import { useParams } from "react-router-dom";
import { getAllProducts,getProductsByCategory } from "./helpers/firebaseHelpers";
import { getFirestore, collection, getDocs,where,query } from "firebase/firestore";
import Item from "./Item";

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const getProducts = () => {
      const db = getFirestore();
      const itemCollection = collection(db, "items");
      getDocs(itemCollection).then((res) => {
        setItems(res.docs.map((d) => ({ id: d.id, ...d.data() })));
        console.log("getProducts");
      });
    };
    const getProductsByCategory = async(categoryId) => {
      const db = getFirestore()
      const itemCollection = collection( db, 'items' )
      const q = query(itemCollection, where('category', '==', categoryId) )
      const snapshot = await getDocs( q )
      setItems( snapshot.docs.map( d => ({id: d.id, ...d.data()}) ) )
      console.log("getCategories")
  }
    console.log(categoryId)
    categoryId ? getProductsByCategory(categoryId) : getProducts();
  });

  return (
    <Container>
      <h1 className="display-3 text-center">Tienda MS</h1>
      <ItemList items={items} />
    </Container>
  );
};
export default ItemListContainer;
