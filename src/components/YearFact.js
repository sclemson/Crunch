import axios from "axios"
import React from "react"
import { useEffect, useState } from "react"

const baseUrl = "http://numbersapi.com"

const YearFact = ({ y }) => {
  const [year, setYear] = useState("")
  const yearUrl = `http://numbersapi.com/${y}/year`

  useEffect(() => {
    const getYearFactFromApi = async () => {
      try {
        const response = await axios.get(yearUrl)
        console.log(response.data)
        setYear(response.data)
      } catch (err) {
        console.log(err)
      }
    }
    getYearFactFromApi()
  }, [y])

  return <h2>{year}</h2>
}

export default YearFact
