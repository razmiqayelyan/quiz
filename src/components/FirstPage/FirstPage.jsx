import React from 'react'
import './FirstPage.css'



const FirstPage = ({getNameAndStartQuiz}) => {
  const onFormSubmit = (e) => {
    e.preventDefault()
    let full_name = e.target[0].value
    getNameAndStartQuiz(full_name)
}

  return (
    <div className='first_page_main_div'>
      <div className="welcome_page">
          <div className='form_part'>
            <h1 className='welcome_text'>We need more details about you before starting Quiz</h1>
            <form action="/" onSubmit={onFormSubmit}>
                <input className='form_input' type="text" placeholder='Full Name' />
                <button type="submit" className="welcome_button">Let's Start</button>
            </form>


          </div>
          <div className="img_part">
          </div>
      </div>

    </div>
  )
}

export default FirstPage