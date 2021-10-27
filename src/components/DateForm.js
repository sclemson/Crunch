import React from "react"
import { useState } from "react"
import DateFact from "./DateFact"

const DateForm = () => {
  const [userDay, setUserDay] = useState(parseInt(""))
  const [userMonth, setUserMonth] = useState(parseInt(""))

  const handleDayChange = (event) => {
    setUserDay(event.target.value)
  }
  const handleMonthChange = (event) => {
    setUserMonth(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("adding", userDay, userMonth)
    setUserMonth(event.target.value)
    setUserDay(event.target.value)
  }
  return (
    <>
      <div className="date">
        <form onSubmit={handleSubmit}>
          <label htmlFor="date">Date Fact</label>
          <input
            id="day"
            value={userDay}
            type="number"
            placeholder="12"
            onChange={handleDayChange}
          />
          <input
            id="month"
            value={userMonth}
            type="number"
            placeholder="9"
            onChange={handleMonthChange}
          />
          <input type="submit" value="Get a date fact!" />
        </form>
        <DateFact userDay={userDay} userMonth={userMonth} />
      </div>
    </>
  )
}

export default DateForm
