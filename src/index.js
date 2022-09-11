import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    
<App />
  //   <BrowserRouter>
  //     <NavBar/>
  //   <Routes>
  //     <Route path='/' element={<App />}/>
  //     <Route path='/category/:category' element={<ItemListContainer/>}/>  
  //     <Route path='/item/:id' element={<ItemDetailContainer/>}/>
  //   </Routes>
  // </BrowserRouter>
);
