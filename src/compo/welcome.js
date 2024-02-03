import React from "react";

export default function Welcome(props){


  return(


<div className="grid-welcome">
  

  <img alt="yellowbtn" className="hometopimg-welcome" src="/images/yellowblob.png"></img>
            
    <div className="middel-text-welcome">
        <h1 className="homepage-titile">Know Your Work</h1>
        <p className="homepage-paragraph">Answer tricky questions and test your worldly knowledge in IT.</p>
      <button onClick={()=>props.startNewqiz(oldVal=>!oldVal)} className="startquizbtn">Start quiz</button>
    </div>

        
   <img alt="bbtn" className="homebotimg-welcome"  src="/images/blueblob.png" ></img>
        
        
        </div>
    )
}