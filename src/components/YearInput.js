import React from "react"
import { useState } from "react"

const YearInput = ({ addYear }) => {
  const [year, setYear] = useState("")

  const handleChange = (event) => {
    setYear(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("adding ", year)
    addYear(year)
    setYear("")
  }

  return (
    <div className="year-form">
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
    </div>
  )
}

export default YearInput
