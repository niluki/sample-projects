import React from "react";
import services from '../Compenents/CSS/ServiceStyle.css';
import Card from '../Compenents/Card';
import {Data} from '../Compenents/Data';

const Services=() =>{
    return (
      <>
      <h1>Our Services</h1>
      <div className="services">
       
         <Card/>
         <Card/>
         <Card/>
     
      
      </div>
      
      </>
    )
} 

export default Services;