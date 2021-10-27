import React from "react"

const YearList = ({ years }) => {
  return (
    <ul>
      {years.map((year) => (
        <li>
          <span>{year}</span>
        </li>
      ))}
    </ul>
  )
}

export default YearList
