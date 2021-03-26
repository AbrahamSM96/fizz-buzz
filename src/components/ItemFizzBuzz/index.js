import React from 'react'
import { Span } from './styles'
import '../../styles/components/itemFizzBuzz/index.scss'
export default function ItemFizzBuzz({ resultLoop }) {
  const styleResult = (item) => {
    if (item.includes('FizzBuzz')) {
      // const onlyFizzBuzz = item.split(' ')[1]
      // let colors = new Array('red', 'blue', 'green')
      // for (let i = 0; i < onlyFizzBuzz.length; i++) {
      //   let onlyLetter = onlyFizzBuzz[i]
      //   let spann
      //   spann = `<span style{{color: "${
      //     colors[i % colors.length]
      //   }" }}> ${onlyLetter} </span>`
      //   console.log(spann, 'itemfizzbuzz')
      // }

      return 'itemFizzBuzz__li colorFizzBuzz'
    }
    if (item.includes('Fizz')) {
      return 'itemFizzBuzz__li colorFizz'
    }
    if (item.includes('Buzz')) {
      return 'itemFizzBuzz__li colorBuzz'
    }
    return 'itemFizzBuzz__li colorDefault'
  }

  return (
    <div className="itemFizzBuzz">
      {resultLoop.map((item, index) => (
        <Span key={index} className={styleResult(item)}>
          {item}
        </Span>
      ))}
    </div>
  )
}
