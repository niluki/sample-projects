import React from "react";
import {Link} from 'react-router-dom';
import contact from '../Compenents/CSS/ContactStyle.css';
const Contact=() =>{
    return (
      <>
      <h1>Contact us</h1>
      <form className="contact">
        <div>
            <label htmlFor="name">Name</label>
            <input type="text" placeholder="Enter your name"></input>
        </div>
        <div>
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Enter your email"></input>
        </div>
        <div>
            <label htmlFor="password">Name</label>
            <input type="password" placeholder="Enter your Password"></input>
        </div>
        <div>
            <label htmlFor="mobile">Name</label>
            <input type="mobile" placeholder="Enter your Mobile"></input>
        </div>
        <div className="btnBox">
      <div className="btn">
      <Link to="/Home" className="readMore">Submit Details</Link>
      </div>
      </div>
      </form>
      </>
    )
} 

export default Contact;