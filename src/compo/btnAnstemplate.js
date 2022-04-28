import React from "react";

export default function Welcome(){

const qestionList = triviaArr.map(assignVal =>

<div key={assignVal.id} className="question-asnwer-grid"> 

           <h1 className="quizpage-qestions">{assignVal.questions}</h1> 
<div className="felx-answers">
        <button style={assignVal.answers[0].isHeld ? {backgroundColor:"red"} :{backgroundColor:"white"}} key={assignVal.answers[0].id} onClick={(event)=>answerClicked(event, assignVal.cortansw, assignVal.answers[0].id)} className="quizpage-answers" value={assignVal.answers[0].answrs}> {assignVal.answers[0].answrs} </button>
        <button style={assignVal.answers[1].isHeld ? {backgroundColor:"red"} :{backgroundColor:"white"}} key={assignVal.answers[1].id} onClick={(event)=>answerClicked(event, assignVal.cortansw, assignVal.answers[1].id)} className="quizpage-answers" value={assignVal.answers[1].answrs}> {assignVal.answers[1].answrs} </button>
        <button style={assignVal.answers[2].isHeld ? {backgroundColor:"red"} :{backgroundColor:"white"}} key={assignVal.answers[2].id} onClick={(event)=>answerClicked(event, assignVal.cortansw, assignVal.answers[2].id)} className="quizpage-answers" value={assignVal.answers[2].answrs}> {assignVal.answers[2].answrs} </button>
        <button style={assignVal.answers[3].isHeld ? {backgroundColor:"red"} :{backgroundColor:"white"}} key={assignVal.answers[3].id} onClick={(event)=>answerClicked(event, assignVal.cortansw, assignVal.answers[3].id)} className="quizpage-answers" value={assignVal.answers[3].answrs}> {assignVal.answers[3].answrs} </button>      
        </div>
    </div>
)
 
    return(

<div className="grid-quizbackground">
{/* eslint-disable-next-line */}
            <img className="hometopimg" src="/images/yellowblob.png"></img>

            <div className="qestion-middel">{qestionList}</div>
            
            <button onClick={submitAnswers} className="submitquizbtn">Check answers</button>
            {/* eslint-disable-next-line */}
            <img className="homebotimg"  src="/images/blueblob.png" ></img>

</div>

    )
}