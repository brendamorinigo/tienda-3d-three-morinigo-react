import NavBar from './components/NavBar'
import ItemlistContainer from './components/ItemlistContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Contacto from './components/contacto';
import Error from './components/error';


function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <div className='contenedor-navbar'>
        <NavBar/>
        </div>
      </header>
    </div>
    <Routes>
      <Route path='/' element={<ItemlistContainer/>}/>
      <Route path='/categoria/:parametro' element={<ItemlistContainer/>}/>
      <Route path='/contacto' element={<Contacto/>}/>
      <Route path='*' element={<Error/>} />
    </Routes>
{/*     <ItemDetailContainer/> */}
    </BrowserRouter>
  );
}
export default App;

