import React from 'react'
import {doc, getDocs,getDoc, getFirestore,collection} from 'firebase/firestore'
import { useEffect } from 'react'
import { useState } from 'react'
import Links from './Links'

export const ProductCard = ( {title, price, stock, img} ) => {
  return (
    <div>
        <li>{title}</li>
        <li>{price}</li>
        <li>{stock}</li>
        <img className="w-10" src={img} />
    </div>
  )
}

const ProductsContainter = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    // getIphone()
    getProducts()
  }, [])

//   const getIphone = () => {
//     const db = getFirestore()
//     const iphoneRef = doc( db, 'items', 'ez07nI5oGmxgO33pFUEg' )
//     getDoc( iphoneRef ).then( res => {
//       const data = res.data()
//       console.log( data );
//       setProducts( data )
//     })
//   }

  const getProducts = () => {
    const db = getFirestore()
    const itemCollection = collection( db, 'items' )
    getDocs( itemCollection ).then( res => {
        setProducts( res.docs.map( d => ({id: d.id, ...d.data()}) ) );
        console.log(products)
    })
  }

  return (
    // <ProductCard {...products}/>
    <>
      <Links/>
      { products.map( p => <ProductCard key={p.id} {...p}/> ) }
    </>
  )
}
export default ProductsContainter




// const ProductsContainer = () => {
  
//   const [products, setProducts] = useState({})

//   useEffect(() => {
//     getProducts()
//   },[])

//   const getProducts = () => { 
//     const db =  getFirestore()
//     const itemCollection = collection(db,'items')

//     getDocs (itemCollection).then( res => { 
//       setProducts (res.docs.map(d => ({id: d.id, ...d.data()})))
//       console.log(products)}
//       )}
    
//     // const mancuerna = doc(db, 'items' , 'aNDruwpirpKeWJgZP8MB')
//     // getDoc(mancuerna).then( res => { 
//     //   const data = res.data();
//     //   console.log(data) 
//     //   setProducts (data)}
      
  
//   return (
//     <div>prueba</div>
//   )
// }

// export default ProductsContainer;