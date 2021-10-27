import React from "react"
import { useState } from "react"
import NumberFact from "./NumberFact"

const NumberForm = () => {
  const [userNumber, setUserNumber] = useState(parseInt(""))

  const handleChange = (event) => {
    setUserNumber(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("adding", userNumber)
    setUserNumber(event.target.value)
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
        <NumberFact userNumber={userNumber} />
      </div>
    </>
  )
}

export default NumberForm
