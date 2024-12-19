import React from "react";
import {Link} from 'react-router-dom';
import logo from '../Compenents/Images/lion.png';

const Same=(props) =>{
    return (
      <>
      <div className="mainSection">
    <div className="contentBox">
      <h1>{props.title}</h1>
      <p>
      {props.text}
      </p>
      <div className="btnBox">
      <div className="btn">
      <Link to="./About" className="readMore">{props.btn}</Link>
      </div>
      </div>
    </div>
    <div className="imagecontainer">
    <img src={props.imgsrc} alt="logo" className="logo"/>
    </div>
    </div>
      </>

    )
  } 

  export default Same;