import React from 'react'
import './Quiz.css'
import Question from './Question'
import Questions from "../../data.js"
import { useState } from 'react'
import QuizFinish from './QuizFinish'

const Quiz = ({playerName}) => {

  const length = Questions.length

  const [rightAnswers, setRightAnswers] = useState(0)
  const [currentQuestion, setcurrentQuestion] = useState(Questions[0])
  const [finishQuiz, setFinishQuiz] = useState(false)

  const toggleQuestion = (answerID=-1) => {
    if(answerID > 0) setRightAnswers(cor => cor+1)
    if(finishQuiz) return
    if(!Questions[currentQuestion.id+1]) return setFinishQuiz(true)
    setcurrentQuestion((cur) => Questions[cur.id+1])
  }

  // useEffect(() => {
  //   if(!Questions[currentQuestion.id+1]) return setFinishQuiz(true)
  // }, [currentQuestion])

  return (
    <div className="quiz_main_div">
      {currentQuestion && !finishQuiz && <Question key={currentQuestion.id} currentQuestion={currentQuestion} finishQuiz={finishQuiz} toggleQuestion={toggleQuestion}  length={length} />}

      {finishQuiz && <QuizFinish playerName={playerName} rightAnswers={rightAnswers} length={length}/>}
    </div>
  )
}

export default Quiz