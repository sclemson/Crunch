import axios from "axios"
import YearShow from "./YearShow"
import { useState } from "react"

const getYearFactFromApi = async (yearUrl) => {
  try {
    const response = await axios.get(yearUrl)
    return response.data
  } catch (err) {
    console.log(err)
  }
}

const YearReveal = ({ yearsArray }) => {
  const [factsArray, setFactsArray] = useState([])
  const handleClick = async () => {
    const usefulArray = []
    for (let i = 0; i < yearsArray.length; i++) {
      const yearUrl = `//numbersapi.com/${yearsArray[i]}/year`
      const fact = await getYearFactFromApi(yearUrl)
      usefulArray.push(fact)
    }
    setFactsArray(usefulArray)
  }

  return (
    <>
      <div>
        <button onClick={handleClick}>Complete List</button>
      </div>
      <YearShow
        factsArray={factsArray.length ? factsArray : yearsArray}
        yearsArray={yearsArray}
      />
    </>
  )
}
export default YearReveal
