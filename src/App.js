import NavBar from './components/NavBar'
import ItemlistContainer from './components/ItemlistContainer';
import Contador from './components/contador'
import ItemDetailContainer from './components/ItemDetailContainer';

function onAdd(){
alert("agregado")
}

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <div className='contenedor-navbar'>
        <NavBar/>
        </div>
      </header>
    <ItemlistContainer/>
    <ItemDetailContainer/>
    </div>
  );
}
export default App;

