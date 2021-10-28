import React from "react"

export const YearShow = ({ factsArray }) => {
  console.log(factsArray)
  return (
    <ul>
      {factsArray.map((fact) => (
        <li>
          <span>{fact}</span>
        </li>
      ))}
    </ul>
  )
}
export default YearShow
