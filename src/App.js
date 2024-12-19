
import './App.css';
import Home from './Compenents/Home';
import About from './Compenents/About';
import Services from './Compenents/Services';
import Contact  from './Compenents/Contact';
import Datas from './Compenents/Data';
import List from './Compenents/List';
import { Routes, Route, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
      <List/>
      <Routes>
      <Route  path ="/" exact Component={Home}/>
      <Route  path ="/About" Component={About}/>
      <Route  path ="/Services" Component={Services}/>
      <Route  path ="/Contact" Component={Contact}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
