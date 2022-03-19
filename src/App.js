import NavBar from './components/NavBar'
import ItemlistContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
        <NavBar/>
        </div>
      </header>
      <ItemlistContainer greeting="Esto es una prop"/>
    </div>
    
  );
}
export default App;

