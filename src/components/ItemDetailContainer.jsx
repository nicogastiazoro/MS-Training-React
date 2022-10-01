import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { getDoc,doc,getFirestore } from 'firebase/firestore';

function ItemDetailContainer() {
    const { id } = useParams();
    const [producto, setProducto] = useState({})

    const getItem = (time) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        const db = getFirestore()
        const itemRef = doc( db, 'items', id )
        getDoc( itemRef ).then( res => {
          const data = res.data()
          resolve( {id: id,...data} )
        })
      }, time);
    },[]);

    useEffect(() => {
        getItem(500)
          .then((res) => {setProducto(res);})
          .catch((err) => {console.log(err, ": No existe el componente");});
        // },[]);
        });

  return (
    <ItemDetail className="justify-content-center" item={producto} />
  )
}

export default ItemDetailContainer