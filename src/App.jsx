import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
      <NavBar/>
      <h1 className="display-3 text-center">Tienda MS</h1>
      <ItemListContainer greeting={'Aca va a estar el catalogo de productos'}/>
    </>
  );
}

export default App;
