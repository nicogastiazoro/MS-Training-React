import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import Container from "react-bootstrap/esm/Container";
import itemsJson from "../itemsJson.json"

const ItemListContainer = ( {greeting} ) => {

    const [items, setItems] = useState ([]);

    const getItems = (data,time) => 
      new Promise((resolve, reject) => {
        setTimeout( () => {
        if(data){
          resolve(data);
        }else{
          reject("Error");
        }
      },time)
    })

    useEffect( () => {
      getItems(itemsJson,2000).then(res => {
        setItems(res);
      })
      .catch(err => {console.log(err,": no hay items para mostrar");})
    },[])
    return (
      <Container>
        <ItemList items={items}/>
      </Container>
    );
  }
  export default ItemListContainer  