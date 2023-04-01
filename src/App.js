import React from 'react'
import { useState } from 'react'
import FirstPage from './components/FirstPage/FirstPage'
import Quiz from './components/Quiz/Quiz'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';

const App = () => {
  const [quizStarted, setQuizStarted] = useState(false)
  const [playerName, setPlayerName] = useState(null)
  const [error, setError] = useState(null)


  const getNameAndStartQuiz = (full_name) => {
    if(!full_name || !full_name.trim()) return setError("Full name is empty, please fill it.")
    setPlayerName(full_name)
    setQuizStarted((res) => !res)
  }

  useEffect(() => {
    if(error){
      toast.error(error)
      setTimeout(() => setError(null), 3000)
    }
  }, [error])

  return (
    <div>
        {quizStarted?  <Quiz playerName={playerName}  /> : <FirstPage getNameAndStartQuiz={getNameAndStartQuiz}  />}
        <ToastContainer />
    </div>
  )
}

export default App