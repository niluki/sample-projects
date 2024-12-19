import React from "react";
import logo from '../Compenents/Images/lion.png';
import {Link} from 'react-router-dom';
const Card=() =>{
    return (
      <>
       <div className="card">
            <h2>Web Development</h2>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Mr_Bumble_1889_Dickens_Oliver_Twist_character_by_Kyd_%28Joseph_Clayton_Clarke%29.jpg/170px-Mr_Bumble_1889_Dickens_Oliver_Twist_character_by_Kyd_%28Joseph_Clayton_Clarke%29.jpg" alt="logo" className="serviceimg"/>
            <p>Noah Claypole, who had fled to London with the Sowerberrys' maid Charlotte after robbing Mr Sowerberry, joins Fagin's gang.</p>
            <div className="btnBox">
      <div className="btn">
      <Link to="/About" className="readMore">Start Learning</Link>
      </div>
      </div>
      </div>
      </>
    )
} 

export default Card;