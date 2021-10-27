import React from "react"
import { useState } from "react"
import YearFact from "./YearFact"

const YearForm = ({ addYear }) => {
  const [year, setYear] = useState("")

  const handleChange = (event) => {
    setYear(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("adding", year)
    addYear(year)
    setYear("")
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="year">Year</label>
        <input
          id="year"
          value={year}
          type="number"
          placeholder="e.g. 2021"
          onChange={handleChange}
        />
        <input type="submit" value="Add year" />
      </form>
      <YearFact year={year} />
    </>
  )
}

export default YearForm
