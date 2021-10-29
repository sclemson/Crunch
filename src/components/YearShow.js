export const YearShow = ({ factsArray, yearsArray }) => {
  return (
    <ul className="year-list">
      {factsArray.map((fact, years) => (
        <li
          style={{ marginTop: `${yearsArray[years] - yearsArray[0]}px` }}
          value={yearsArray[years]}
        >
          <span>{fact}</span>
        </li>
      ))}
    </ul>
  )
}
export default YearShow
