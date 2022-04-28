import React from "react"
import Home from "./compo/welcome"
import Quiz from "./compo/quizpage"

 export default function App() {

const[welcomePage, startQuiz]=React.useState(true)

  
  return (
    <>
    {welcomePage ? <Home startNewqiz={startQuiz} /> :
    
    <Quiz /> }
   
    
    </>
  );
}


