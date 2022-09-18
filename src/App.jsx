import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import {CartItemsProvider} from './components/CartContext';

function App() {
  return (
    <CartItemsProvider>
      <BrowserRouter>
         <NavBar/>
         <h1 className="display-3 text-center">Tienda MS</h1>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/category/:category' element={<ItemListContainer/>}/>  
          <Route path='/item/:id' element={<ItemDetailContainer className="align-items-center"/>}/>
        </Routes>
      </BrowserRouter>
    </CartItemsProvider>
    );
}

export default App;
 