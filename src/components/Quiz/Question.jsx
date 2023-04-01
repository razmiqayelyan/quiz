import React from 'react'
import { useState } from 'react'
import './Question.css'


const Question = ({currentQuestion, length, toggleQuestion}) => {
 let {id, question, answers , correct} = currentQuestion

  const [selectedAnswerID, setSelectedAnswerID] = useState(null)

  const onAnswerSelection = (e) => {
      let answer = parseInt(e.target.name)
      setSelectedAnswerID(answer)
  }

  let sendAnswer = () => {
    if(parseInt(selectedAnswerID) === correct) toggleQuestion(selectedAnswerID)
    else toggleQuestion()
  }

  return (
    <div className='question_card'>
          <h2 className='main_question'>{question}</h2>
          <h3 className='question_title'>Question {id +1} / {length}</h3>
          <div className='question_buttons'>
             {answers.map((answer, index) => 
                <button key={index} onClick={onAnswerSelection} style={{backgroundColor:"white", color:"black"}} name={index+1} className='welcome_button'>{answer}</button>
              )}
              {length === currentQuestion.id + 1? 
              <button onClick={sendAnswer}  style={{backgroundColor:"green", color:"white", marginTop:"50px"}} className='welcome_button'>Finish</button>
              :
              <button onClick={sendAnswer}  style={{backgroundColor:"rgba(66,0,255,1)", color:"white", marginTop:"50px"}} className='welcome_button'>Next</button>}

         </div>
    </div>
  )
}

export default Question