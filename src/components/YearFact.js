import axios from "axios"
import React from "react"
import { useEffect, useState } from "react"
import YearForm from "./YearForm"
import YearList from "./YearList"

const baseUrl = "http://numbersapi.com"

const YearFact = ({ year }) => {
  const yearUrl = `http://numbersapi.com/${year}/year`
  const [yearTrivia, setYearTrivia] = useState("")
  useEffect(() => {
    console.log(year)
    const getYearFactFromApi = async () => {
      try {
        const response = await axios.get(yearUrl)
        console.log(response.data)
        setYearTrivia(response.data)
      } catch (err) {
        console.log(err)
      }
    }
    getYearFactFromApi()
  }, [year])

  const [years, setYears] = useState([])
  const addYear = (year) => {
    setYears([...years, year])
  }

  return (
    <>
      <p>{yearTrivia}</p>
      <p>
        <YearForm addYear={addYear} />
      </p>
      <p>
        <YearList years={years} />
      </p>
    </>
  )
}

export default YearFact
