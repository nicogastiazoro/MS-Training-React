import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import Container from "react-bootstrap/esm/Container";
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs,where,query } from "firebase/firestore";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const getProducts = () => {
      const db = getFirestore();
      const itemCollection = collection(db, "items");
      getDocs(itemCollection).then((res) => {
        setItems(res.docs.map((d) => ({ id: d.id, ...d.data() })));
      });
    };
    const getProductsByCategory = async(categoryId) => {
      const db = getFirestore()
      const itemCollection = collection( db, 'items' )
      const q = query(itemCollection, where('category', '==', categoryId) )
      const snapshot = await getDocs( q )
      setItems( snapshot.docs.map( d => ({id: d.id, ...d.data()}) ) )
  }
    categoryId ? getProductsByCategory(categoryId) : getProducts();
  }, [items]);

  return (
    <Container>
      <h1 className="display-3 text-center">Tienda MS</h1>
      <ItemList items={items} />
    </Container>
  );
};
export default ItemListContainer;
