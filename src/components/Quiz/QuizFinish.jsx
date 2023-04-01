import React from 'react'
import Confetti from 'react-confetti'


const QuizFinish = ({playerName, rightAnswers, length}) => {
  return (
    <div>
        <h1>Congratulations dear {playerName}</h1>
        <h2 style={{textAlign:"center", marginTop:"30px"}}>You answered {rightAnswers} right from {length} questions.</h2>
       <Confetti
      width={window.innerWidth || 300	}
      height={window.innerHeight || 200	}
    />
    </div>
  )
}

export default QuizFinish