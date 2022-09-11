import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import { Container } from 'react-bootstrap';

function App() {
  return (
    // <Container>
    //   <ItemListContainer/>
    // </Container>
    <BrowserRouter>
       <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category/:category' element={<ItemListContainer/>}/>  
        <Route path='/item/:id' element={<ItemDetailContainer className="align-items-center"/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
 