import { useEffect, useState } from "react"
import axios from "axios"
import { proxyUrl, origin } from "../config/environment"

const MathFact = ({ finalMath }) => {
  const mathUrl = `http://numbersapi.com/${finalMath}/math`
  const [mathTrivia, setMathTrivia] = useState("")
  useEffect(() => {
    const getMathFactFromApi = async () => {
      try {
        if (!finalMath) {
          return
        }
        const response = await axios.get(proxyUrl + mathUrl, {
          headers: {
            "X-Requested-With": origin,
          },
        })
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
