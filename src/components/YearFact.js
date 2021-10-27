import axios from "axios"
import React from "react"
import { useEffect, useState } from "react"
import YearInput from "./YearInput"
import YearForm from "./YearInput"
import YearList from "./YearList"

const baseUrl = "http://numbersapi.com"

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
