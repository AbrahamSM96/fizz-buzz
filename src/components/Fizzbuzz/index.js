import React, { useState, useEffect } from 'react'
import fizzbuzz from '../../../fizzbuzz'
import ItemFizzBuzz from '../ItemFizzBuzz'
import '../../styles/components/fizzbuzz/index.scss'

export default function FizzBuzz() {
  const [valueInput, setValueInput] = useState('')
  const [resultLoop, setResultLoop] = useState([])

  const loop = () => {
    for (let index = 0; index <= valueInput; index++) {
      let result = `${index}: ${fizzbuzz(index)}`
      resultLoop.push(result)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setValueInput(parseInt(valueInput))
    console.log(valueInput, 'valueinputleft')
    // if (resultLoop.length > 0) {
    //   setResultLoop([])
    // } else {
    //   setValueInput(parseInt(valueInput))
    // }
    loop()
  }
  const handleSubmitReset = (event) => {
    event.preventDefault()
    setResultLoop([])
    setValueInput(0)
  }

  useEffect(() => {
    const resetInput = () => {
      if (valueInput.length === 0) {
        setResultLoop([])
      }
    }
    resetInput()
  }, [valueInput])

  return (
    <>
      <form onSubmit={handleSubmit} className="fizzBuzz">
        <label className="input">
          <input
            className="input__field"
            type="number"
            value={valueInput}
            name="Value"
            placeholder="Value"
            onChange={({ target }) => setValueInput(target.value)}
          />
          <span className="input__label">Enter any number</span>
        </label>
        <div className="button-group">
          <button>Send</button>
          <button type="reset" onClick={handleSubmitReset}>
            Reset
          </button>
        </div>
      </form>

      <ItemFizzBuzz resultLoop={resultLoop} />
    </>
  )
}
