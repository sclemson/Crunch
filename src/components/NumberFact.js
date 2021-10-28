import React from "react"
import { useEffect, useState } from "react"
import axios from "axios"

const NumberFact = ({ userNumber }) => {
  const numberUrl = `http://numbersapi.com/${userNumber}`
  const [numberTrivia, setNumberTrivia] = useState("")
  useEffect(() => {
    console.log(userNumber)
    const getNumberFactFromApi = async () => {
      try {
        const response = await axios.get(numberUrl)
        // console.log(response.data)
        setNumberTrivia(response.data)
      } catch (err) {
        console.log(err)
      }
    }
    getNumberFactFromApi()
  }, [userNumber, numberUrl])
  return <p>{numberTrivia}</p>
}

export default NumberFact
