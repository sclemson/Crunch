import React from "react"
import { useState } from "react"

const NumberInput = () => {
  const [numberChoice, setNumberChoice] = useState("")
  const handleChange = (event) => {
    // setNumberChoice(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("adding", numberChoice)
    setNumberChoice(event.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="number">Number Trivia</label>
      <input
        id="number"
        value={numberChoice}
        type="number"
        placeholder="64"
        onChange={handleChange}
      />
    </form>
  )
}

export default NumberInput
