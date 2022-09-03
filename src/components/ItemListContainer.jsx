import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import Container from "react-bootstrap/esm/Container";

const ItemListContainer = ( {greeting} ) => {

    const [items, setItems] = useState ([]);

    useEffect( () => {
      
      const getItems = new Promise((resolve, reject) => {
        const productos = [{id:1342,title:'Mancuerna',price:2142.50,pictureUrl:'/assets/products/1234.png'},
                           {id:2341,title:'Disco',price:1231.50,pictureUrl:'/assets/products/2341.png'},
                           {id:5235,title:'Colchoneta',price:643.50,pictureUrl:'/assets/products/5235.png'},
                           {id:1512,title:'Barra',price:34532,pictureUrl:'/assets/products/1512.png'},
                           {id:9134,title:'Pesa Rusa',price:14124,pictureUrl:'/assets/products/9134.png'}]  
        setTimeout( () => {
          resolve (productos);
        },2000)
      })

      getItems.then(data => {
        setItems(data);
      })
      .catch(err => {console.log(err);})
    },[])


    return (
      <Container>
        <ItemList items={items}/>
      </Container>
    );
  }
  export default ItemListContainer  