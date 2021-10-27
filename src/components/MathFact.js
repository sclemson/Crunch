import React from "react"
import { useEffect, useState } from "react"
import axios from "axios"

const MathFact = ({ userMath }) => {
  const mathUrl = `http://numbersapi.com/${userMath}/math`
  const [mathTrivia, setMathTrivia] = useState("")
  useEffect(() => {
    console.log(userMath)
    const getMathFactFromApi = async () => {
      try {
        const response = await axios.get(mathUrl)
        console.log(response.data)
        setMathTrivia(response.data)
      } catch (err) {
        console.log(err)
      }
    }
    getMathFactFromApi()
  }, [userMath])

  return <>{mathTrivia}</>
}

export default MathFact
