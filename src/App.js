import './App.css';
import Saludo from './components/Saludo';

function App() {

  const mensaje = 'Bienvenido a mi APP'
  const estilos = {
    backgroundColor: '#888',
    padding: '20px'
  }
  return (
    <div className="container">
      <h1>Hola Mundo</h1>
      <h3 style={estilos}>{mensaje}</h3>
      <Saludo name='Juan' lastname='Perez'/>    
    </div>
  );
}

export default App;
