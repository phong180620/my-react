import logo from './logo.svg';
import './App.scss'
import Home from './components/Home';
import AddNewProduct from './components/AddNewProduct';
import Product from './components/Products/Product';
import 'react-image-lightbox/style.css';
import Nav from './components/Navigation/Nav';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
  <Router>
    <Nav/>
    <Switch>
      <Route path="/about">
            <Product/>
      </Route>
      <Route path="/users">
          {/* <Users /> */}
     </Route>
      <Route path="/">
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
        <Product/>
      </div>
    </div>
      </Route>
      
    </Switch>
    
    
  </Router>
  );
}

export default App;
