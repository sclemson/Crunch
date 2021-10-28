import { useState } from "react"
import DateFact from "./DateFact"

const DateForm = () => {
  const [userDay, setUserDay] = useState(parseInt(""))
  const [userMonth, setUserMonth] = useState(parseInt(""))
  const [finalDay, setFinalDay] = useState("")
  const [finalMonth, setFinalMonth] = useState("")

  const handleDayChange = (event) => {
    setUserDay(event.target.value)
  }
  const handleMonthChange = (event) => {
    setUserMonth(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setFinalMonth(userMonth)
    setFinalDay(userDay)
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
            placeholder="Day (e.g. 12)"
            onChange={handleDayChange}
          />
          <input
            id="month"
            value={userMonth}
            type="number"
            placeholder="Month (e.g. 9)"
            onChange={handleMonthChange}
          />
          <input type="submit" value="Get a date fact!" />
        </form>
        <DateFact finalDay={finalDay} finalMonth={finalMonth} />
      </div>
    </>
  )
}

export default DateForm
