import React from "react";
import {Link} from 'react-router-dom';
import logo from '../Compenents/Images/lion.png';
import Same from '../Compenents/Same';
const About=() =>{
    return (
      <>
      <Same
      title="Konw more about us"
      text=" Noah Claypole, who had fled to London with the Sowerberrys' maid Charlotte after robbing Mr Sowerberry, joins Fagin's gang."
      imgsrc={logo}
      btn="Read More"/>
       </>
    )
  } 

  export default About;