import React from "react";
import Confetti from "react-confetti"

export default function Welcome(props){

   

 
    return(
        <div className="popup-inner">
            <Confetti/>
            <button onClick={props.popUpclose} className="popup-close-btn">X</button>
            <h1><span className="score-text" >SCORE</span> <br></br>10 / {props.scoreCountprop}</h1>
        </div>
    )
}