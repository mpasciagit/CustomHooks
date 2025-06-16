import { useState } from "react"

export const useCounter = (initiaValue = 0) => {

    const [counter, setCounter] = useState(initiaValue)

    const increment = (val = 1) => {
        setCounter(counter + val)
    }
    const reset = () => {
        setCounter(initiaValue)
    }
    const decrement = (val =1, allowNegative = true) => {
        if (!allowNegative && counter < 1) return
        setCounter(counter - val)
    }

  return {
    counter,
    increment,
    reset,
    decrement,
  }
}
