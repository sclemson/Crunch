import React from "react"
import axios from "axios"
import { useEffect, useState } from "react"

const DateFact = ({ userDay, userMonth }) => {
  const dateUrl = `http://numbersapi.com/${userMonth}/${userDay}}/date`
  const [dateTrivia, setDateTrivia] = useState("")
  useEffect(() => {
    console.log(userDay, userMonth)
    const getDateFactFromApi = async () => {
      try {
        const response = await axios.get(dateUrl)
        console.log(response.data)
        setDateTrivia(response.data)
      } catch (err) {
        console.log(err)
      }
    }
    getDateFactFromApi()
  }, [userDay, userMonth, dateUrl])

  return <p>{dateTrivia}</p>
}

export default DateFact
