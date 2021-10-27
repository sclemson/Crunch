import axios from "axios"
import React from "react"
import { useEffect, useState } from "react"

const baseUrl = "http://numbersapi.com"
const url = "http://numbersapi.com/1995/year"

const YearFact = () => {
  const [year, setYear] = useState("")

  useEffect(() => {
    const getYearFactFromApi = async () => {
      try {
        const response = await axios.get(url)
        console.log(response.data)
        setYear(response.data)
      } catch (err) {
        console.log(err)
      }
    }
    getYearFactFromApi()
  }, [])

  return <div>{year}</div>
}

export default YearFact
