import axios from "axios"
import { useEffect, useState } from "react"
import { proxyUrl, origin } from "../config/environment"

const DateFact = ({ finalDay, finalMonth }) => {
  const dateUrl = `http://numbersapi.com/${finalMonth}/${finalDay}/date`
  const [dateTrivia, setDateTrivia] = useState("")
  useEffect(() => {
    const getDateFactFromApi = async () => {
      try {
        if (!finalDay || !finalMonth) {
          return
        }
        const response = await axios.get(proxyUrl + dateUrl, {
          headers: {
            "Crunch-App": origin,
          },
        })
        setDateTrivia(response.data)
      } catch (err) {
        console.log(err)
      }
    }
    getDateFactFromApi()
  }, [finalDay, finalMonth, dateUrl])

  return <p>{dateTrivia}</p>
}

export default DateFact
