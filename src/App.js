import NavBar from './components/NavBar'
import ItemlistContainer from './components/ItemlistContainer';
import Contador from './components/contador'


const initial= 1;
const stock=12;

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
    <Contador initial={initial} stock={stock} onAdd={onAdd} />
    </div>
  );
}
export default App;

