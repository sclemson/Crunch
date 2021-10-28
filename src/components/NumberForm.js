import React from "react"
import { useState } from "react"
import NumberFact from "./NumberFact"

const NumberForm = () => {
  const [userNumber, setUserNumber] = useState(parseInt(""))
  const [finalNumber, setFinalNumber] = useState("")

  const handleChange = (event) => {
    setUserNumber(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setFinalNumber(userNumber)
  }
  return (
    <>
      <div className="number">
        <form onSubmit={handleSubmit}>
          <label htmlFor="number">Number Fact</label>
          <input
            id="number"
            value={userNumber}
            type="number"
            placeholder="712"
            onChange={handleChange}
          />
          <input type="submit" value="Get a number fact!" />
        </form>
        <NumberFact finalNumber={finalNumber} />
      </div>
    </>
  )
}

export default NumberForm
