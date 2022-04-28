import React from "react";
import { nanoid } from "nanoid";
import Popup from "./popUp";


export default function Welcome(){


    //Start FUNCTIONS

// Popup close
const [popupstate, cngpopUpbtn] = React.useState(false)

    function closepopUp(){
        cngpopUpbtn(oldVal=> !oldVal)
    }




//answer check
function answerClicked(event, btnIndex, mainIndex, id){


    triviaCng(oldArr=> oldArr.map(item=>{
        const isExist =item.answers.findIndex(itm=>itm.id === id);
        if (isExist >= 0) {
            item.answers[btnIndex].isHeld = !item.answers[btnIndex].isHeld;
            if (event.target.value === item.cortansw){
            item.answers[btnIndex].isAnstrue = !item.answers[btnIndex].isAnstrue; 
        }
        } return item;
    
    }))
}


// answer submition

const [submitArr, submitCliked] =React.useState(false) 




//count of ture answers
const [countCorrAns, cngCountcorr] = React.useState(0)

//refreshthe answers
const [reFresh, cngRefresh] = React.useState(false)
function refreshAnswers(){
    cngRefresh(oldVal=> !oldVal)
    submitCliked(oldVal=> !oldVal)
    cngCountcorr(0)
    cngpopUpbtn(oldArr=>!oldArr)

}



function submitAnswers(){


    
    // const isHeldfalseExist = triviaArr.answers.find(mapItms=>mapItms.isAnstrue===false);
    // console.log(isHeldfalseExist)

      
 
 
    
    
    triviaCng(oldArrwithisheld=> oldArrwithisheld.map(mapItms=>{
        
        
        // finding the index of answer clikced and also the answer is wrong button
        
        const isHeldfalseExist = mapItms.answers.findIndex(mapItms=>mapItms.isHeld===true && mapItms.isAnstrue === false);

        
        if (isHeldfalseExist >= 0) {
            
                mapItms.answers[isHeldfalseExist].colorCng="#F8BCBC";
            
            }


            return mapItms;


    
    }))

    submitCliked(true)
    
    const count = triviaArr.map((e) => {
    const x = e.answers.filter((it) => it.isAnstrue===true);

    return Number(x.length);
  })
  .reduce((x, y) => x + y, 0);
    

  cngCountcorr(count)
  console.log(countCorrAns)

}
//END FUNCTIONS



// // trivia externel Database state value

const [triviaArr, triviaCng] = React.useState([])

// //get trivia from api

    React.useEffect(()=>{

        
        fetch("https://opentdb.com/api.php?amount=10&category=18&type=multiple")
        .then(dataSep=> dataSep.json())
        
        .then(assignData=> triviaCng(assignData.results.map((oldArr) => {
            const incorrectAnswersIndex = oldArr.incorrect_answers.length
            const randomindexVal = Math.random() * (incorrectAnswersIndex - 0)+0

            oldArr.incorrect_answers.splice(
                randomindexVal,
                0,
                oldArr.correct_answer
            )

            return{
                questions:oldArr.question,
                cortansw:oldArr.correct_answer,
                answers: oldArr.incorrect_answers.map(answrs=> ({answrs, id:nanoid(), isHeld:false, isAnstrue:false, colorCng:""})),
                countCorrect:0,
                id:nanoid()
            }
            
        })
        
        )
        )
     
        
    
        
        

},[reFresh])




const qestionList = triviaArr.map((assignVal, mainIndex) =>

<div key={assignVal.id} className="question-asnwer-grid"> 

           <h1 className="quizpage-qestions">{assignVal.questions}</h1> 
<div className="felx-answers">



{assignVal.answers.map((inside, btnIndex)=> 


 <button 
 
 style={submitArr ? 
    assignVal.cortansw === inside.answrs ?

    {backgroundColor:"#94D7A2"} :{backgroundColor:inside.colorCng} : 
    
    inside.isHeld ?
      {backgroundColor:"#D6DBF5"} :{}}


      key={inside.id}
      onClick={(event)=>answerClicked(event, btnIndex, mainIndex, inside.id)}
 className="quizpage-answers" 
 value={inside.answrs}> 
 
 {inside.answrs} 
 </button>)}

        </div>
    </div>
)

    return(

<div className="grid-quizbackground">
{submitArr && !popupstate && <div className="score-count" ><Popup popUpclose={closepopUp} scoreCountprop={countCorrAns} /> </div>}


{submitArr &&<div className="scoreshow-ontop">
            <h1><span className="score-text" >SCORE</span> <br></br>10 / {countCorrAns}</h1>

        </div>}


{/* eslint-disable-next-line */}
            <img className="hometopimg" src="/images/yellowblob.png"></img>

            <div className="qestion-middel">{qestionList}</div>
            
            <div className="flex-btn-bot">
                <button onClick={submitAnswers} className="submitquizbtn">Check answers</button>
                {submitArr && <button onClick={refreshAnswers} className="resetquizbtn">Reset Game</button>}
            </div>
            {/* eslint-disable-next-line */}
            <img className="homebotimg"  src="/images/blueblob.png" ></img>

</div>

    )
}