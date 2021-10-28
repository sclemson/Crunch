import React from "react"
import { useState } from "react"
import YearInput from "./YearInput"

const YearFact = () => {
  const [years, setYears] = useState([])

  const addYear = (year) => {
    setYears([...years, year])
  }

  return (
    <>
      <YearInput addYear={addYear} />
    </>
  )
}

export default YearFact
