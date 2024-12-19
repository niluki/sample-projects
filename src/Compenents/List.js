import React from "react";
import logo from '../Compenents/Images/lion.png';
import {Link} from 'react-router-dom';
import { Routes, Route, BrowserRouter } from "react-router-dom";


const List=() =>{
    return (
      <>
   <header>
  <div className="navbar">
    <div className="leftside">
        <img src={logo} alt="logo" className="logo"/>
    </div>
     <div className="rightside">
       <Link to="/">Home</Link>
       <Link to="/About">About</Link>
       <Link to="/Services">Services</Link>
       <Link to="/Contact">Contact</Link>
    </div>
    
  </div>
   </header>

 
      </>
    )
  } 

  export default List;