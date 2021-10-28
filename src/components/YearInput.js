import React from "react"
import { useState } from "react"
import YearReveal from "./YearReveal"

let yearsArray = []
const checkNumbers = (num1, num2) => num1 - num2
const YearInput = ({ addYear }) => {
  const [year, setYear] = useState("")

  const handleChange = (event) => {
    setYear(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("adding ", year)
    // yearsArray.push(year)
    yearsArray = [...yearsArray, year]
    yearsArray.sort(checkNumbers)
    addYear(year)
    setYear("")
    console.log(yearsArray)
  }

  return (
    <>
      <div className="year-form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="year">Year Fact</label>
          <input
            id="year"
            value={year}
            type="number"
            placeholder="e.g. 2021"
            onChange={handleChange}
          />
          <input type="submit" value="Add a few years..." />
        </form>
      </div>
      <div className="year-show">
        <YearReveal yearsArray={yearsArray} />
      </div>
    </>
  )
}

export default YearInput
