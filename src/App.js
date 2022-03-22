import NavBar from './components/NavBar'
import ItemlistContainer from './components/ItemlistContainer';


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <div className='contenedor-navbar'>
        <NavBar/>
        </div>
      </header>
    <ItemlistContainer/>
    </div>
  );
}
export default App;

