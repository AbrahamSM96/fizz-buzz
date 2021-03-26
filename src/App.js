import React from 'react'
import './styles/components/App.scss'
import Title from './components/Title'
import FizzBuzz from './components/Fizzbuzz'
import gifTitle from './assets/statics/title.gif'

const App = () => (
  <main>
    <Title />
    <div className="text">
      <h1>What is Fizz Buzz?</h1>
      <div className="text__paragraph">
        <p>
          Fizz Buzz is a logic exercise, if the remainder of the division of
          multiple of 3 is equal to zero, this return "Fizz" and the remainder
          of the division of multiple of 5 is equal to zero this return "Buzz"
          and if the number is multiple of 3 and 5 this return "FizzBuzz"
        </p>
      </div>
    </div>
    <FizzBuzz />
  </main>
)

export default App
