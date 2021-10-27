import axios from "axios"
import React from "react"
import { useEffect, useState } from "react"

const baseUrl = "http://numbersapi.com"

const MathFact = ({ m }) => {
  const [math, setMath] = useState("")
  const mathUrl = `http://numbersapi.com/${m}/math`

  useEffect(() => {
    const getMathFactFromApi = async () => {
      try {
        const response = await axios.get(mathUrl)
        console.log(response.data)
        setMath(response.data)
      } catch (err) {
        console.log(err)
      }
    }
    getMathFactFromApi()
  }, [m])

  return <h2>{math}</h2>
}

export default MathFact
