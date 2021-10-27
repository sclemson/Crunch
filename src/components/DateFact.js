import React from "react"
import axios from "axios"
import { useEffect, useState } from "react"

const DateFact = ({ month, day }) => {
  const [date, setDate] = useState("")
  const DateUrl = `http://numbersapi.com/${month}/${day}/date`

  useEffect(() => {
    const getDateFactFromApi = async () => {
      try {
        const response = await axios.get(DateUrl)
        console.log(response.data)
        setDate(response.data)
      } catch (err) {
        console.log(err)
      }
    }
    getDateFactFromApi()
  }, [month, day])
  return <h2>{date}</h2>
}

export default DateFact
