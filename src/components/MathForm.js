import React from "react"
import { useState } from "react"
import MathFact from "./MathFact"

const MathForm = () => {
  const [userMath, setUserMath] = useState(parseInt(""))

  const handleChange = (event) => {
    setUserMath(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("adding", userMath)
    setUserMath(event.target.value)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="math">Math Fact</label>
        <input
          id="math"
          value={userMath}
          type="number"
          placeholder="64"
          onChange={handleChange}
        />
        <input type="submit" value="Get fact!" />
      </form>
      <MathFact userMath={userMath} />
    </>
  )
}
export default MathForm
