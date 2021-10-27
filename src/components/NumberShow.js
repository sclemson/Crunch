import axios from "axios"
import React from "react"
import { useEffect, useState } from "react"
import NumberInput from "./NumberInput"

const baseUrl = "http://numbersapi.com"

const NumberShow = ({ numberChoice }) => {
  const [number, setNumber] = useState("")
  const numberUrl = `http://numbersapi.com/${numberChoice}`

  useEffect(() => {
    const getNumberFactFromApi = async () => {
      try {
        const response = await axios.get(numberUrl)
        // console.log(response.data)
        setNumber(response.data)
      } catch (err) {
        console.log(err)
      }
    }
    getNumberFactFromApi()
  }, [number])

  return <h2>{number}</h2>
}

export default NumberShow
