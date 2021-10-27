import React from "react"

const YearList = ({ years }) => {
  const checkNumbers = (num1, num2) => num1 - num2
  return (
    <ul>
      {years.sort(checkNumbers).map((year) => (
        <li>
          <span>{year}</span>
        </li>
      ))}
    </ul>
  )
}

export default YearList
