import React from "react"
import { useState } from "react"
import YearInput from "./YearInput"
import YearList from "./YearList"

const YearFact = () => {
  const [years, setYears] = useState([])

  const addYear = (year) => {
    setYears([...years, year])
  }

  return (
    <>
      <YearInput addYear={addYear} />
      <YearList years={years} />
    </>
  )
}

export default YearFact
