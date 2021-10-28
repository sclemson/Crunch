import React from "react"
import axios from "axios"
import { YearShow } from "./YearShow"

let factsArray = []
const getYearFactFromApi = async (yearUrl) => {
  try {
    const response = await axios.get(yearUrl)
    console.log(response.data)
    factsArray.push(response.data)
    console.log(factsArray)
  } catch (err) {
    console.log(err)
  }
}

const YearTest = ({ yearsArray }) => {
  const handleClick = () => {
    for (let i = 0; i < yearsArray.length; i++) {
      const yearUrl = `http://numbersapi.com/${yearsArray[i]}/year`
      getYearFactFromApi(yearUrl)
    }
  }

  return (
    <>
      <div>
        <button onClick={handleClick}>Complete List</button>
      </div>
      <YearShow factsArray={factsArray} />
    </>
  )
}
export default YearTest
