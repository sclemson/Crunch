import axios from "axios"
import React from "react"
import { useEffect, useState } from "react"

const baseUrl = "http://numbersapi.com"

const NumberTrivia = ({ n }) => {
  const [number, setNumber] = useState("")
  const numberUrl = `http://numbersapi.com/${n}`

  useEffect(() => {
    const getNumberFactFromApi = async () => {
      try {
        const response = await axios.get(numberUrl)
        console.log(response.data)
        setNumber(response.data)
      } catch (err) {
        console.log(err)
      }
    }
    getNumberFactFromApi()
  }, [n])

  return <h2>{number}</h2>
}

export default NumberTrivia
