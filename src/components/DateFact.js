import axios from "axios"
import { useEffect, useState } from "react"

const DateFact = ({ finalDay, finalMonth }) => {
  const dateUrl = `http://numbersapi.com/${finalMonth}/${finalDay}/date`
  const [dateTrivia, setDateTrivia] = useState("")
  useEffect(() => {
    const getDateFactFromApi = async () => {
      try {
        const response = await axios.get(dateUrl)
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
