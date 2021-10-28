import React from "react"
import axios from "axios"
import { YearShow } from "./YearShow"
import { useState } from "react"

const getYearFactFromApi = async (yearUrl) => {
  try {
    const response = await axios.get(yearUrl)
    console.log(response.data)
    // factsArray.push(response.data)
    // console.log(factsArray)
    // return factsArray
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
      const yearUrl = `http://numbersapi.com/${yearsArray[i]}/year`
      const fact = await getYearFactFromApi(yearUrl)
      console.log(fact)
      usefulArray.push(fact)
    }
    setFactsArray(usefulArray)
  }
  console.log(factsArray)

  return (
    <>
      <div>
        <button onClick={handleClick}>Complete List</button>
      </div>
      <YearShow factsArray={factsArray.length ? factsArray : yearsArray} yearsArray={yearsArray} />
    </>
  )
}
export default YearReveal
