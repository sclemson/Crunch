import { useEffect, useState } from "react"
import axios from "axios"

const MathFact = ({ finalMath }) => {
  const mathUrl = `//numbersapi.com/${finalMath}/math`
  const [mathTrivia, setMathTrivia] = useState("")
  useEffect(() => {
    const getMathFactFromApi = async () => {
      try {
        if (!finalMath) {
          return
        }
        const response = await axios.get(mathUrl)
        setMathTrivia(response.data)
      } catch (err) {
        console.log(err)
      }
    }
    getMathFactFromApi()
  }, [finalMath, mathUrl])

  return <p>{mathTrivia}</p>
}

export default MathFact
