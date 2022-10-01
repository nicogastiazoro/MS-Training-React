import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import {CartItemsProvider} from './components/CartContext';
import Cart from './components/Cart';
import ProductsContainer from './components/Firebase/ProductsContainer';
import Category from './components/Firebase/Category';

function App() {
  return (
    <CartItemsProvider>
      <BrowserRouter>
         <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer/>}/>  
          <Route path='/item/:id' element={<ItemDetailContainer className="align-items-center"/>}/>
          <Route path='/cart' element={<Cart/>}/>
          
          //!PRUEBA FIREBASE
          <Route path='/products' element={<ProductsContainer/>}/>
          <Route path='/products/category/:id' element={<Category/>}/>
        </Routes>
      </BrowserRouter>
    </CartItemsProvider>
    );
}

export default App;
 