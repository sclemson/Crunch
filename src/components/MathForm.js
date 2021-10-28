import React from "react"
import { useState } from "react"
import MathFact from "./MathFact"

const MathForm = () => {
  const [userMath, setUserMath] = useState(parseInt(""))
  const [finalMath, setFinalMath] = useState("")

  const handleChange = (event) => {
    setUserMath(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // console.log("adding", userMath)
    setFinalMath(userMath)
  }

  return (
    <>
      <div className="math">
        <form onSubmit={handleSubmit}>
          <label htmlFor="math">Math Fact</label>
          <input
            id="math"
            value={userMath}
            type="number"
            placeholder="64"
            onChange={handleChange}
          />
          <input type="submit" value="Get a nerdy fact!" />
        </form>
        <MathFact finalMath={finalMath} />
      </div>
    </>
  )
}
export default MathForm
