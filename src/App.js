import logo from './logo.svg';
import './App.scss'
import Home from './components/Home';
import AddNewProduct from './components/AddNewProduct';
import Produc from './components/Products/Produc';
import 'react-image-lightbox/style.css';

function App() {
  return (
    <div className="App">
      <header className="App-header content-left">
        <div style={{textAlign: "center"}}>
        <img src={logo} className="App-logo" alt="logo" />
        </div>
        <Home/>
        
        
       
      </header>
      <div className='content-right'>
        <AddNewProduct/>
        <hr/>
        <Produc/>
      </div>
    </div>
  );
}

export default App;
