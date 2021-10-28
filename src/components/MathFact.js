import React from "react"
import { useEffect, useState } from "react"
import axios from "axios"

const MathFact = ({ finalMath }) => {
  const mathUrl = `http://numbersapi.com/${finalMath}/math`
  const [mathTrivia, setMathTrivia] = useState("")
  useEffect(() => {
    // console.log(userMath)
    const getMathFactFromApi = async () => {
      try {
        const response = await axios.get(mathUrl)
        // console.log(response.data)
        setMathTrivia(response.data)
      } catch (err) {
        console.log(err)
      }
    }
    getMathFactFromApi()
  }, [finalMath])
  // create a different state variable to trigger text.

  return <p>{mathTrivia}</p>
}

export default MathFact
