import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"

const getProductsByCategory = async(categoryId) => {
    const db = getFirestore()
    const itemCollection = collection( db, 'items' )
    const q = query(itemCollection, where('category', '==', categoryId) )
    const snapshot = await getDocs( q )
    return ( snapshot.docs.map( d => ({id: d.id, ...d.data()}) ) )
}

const getAllProducts = () => {
    const db = getFirestore()
    const itemCollection = collection( db, 'items' )
    getDocs( itemCollection ).then( res => {
        const data = res.docs.map( d => ({id: d.id, ...d.data()}) )
        console.log(data.length)
        return ( res.docs.map( d => ({id: d.id, ...d.data()}) ) );
    })
  }

export { getProductsByCategory, getAllProducts }