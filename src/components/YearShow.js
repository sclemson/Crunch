import React from "react"

export const YearShow = ({ factsArray, yearsArray }) => {
  return (
    <ul>
      {factsArray.map((fact, years) => (
        <li value={years}>
          <span>{fact}</span>
        </li>
      ))}
    </ul>
  )
}
export default YearShow
