export const YearShow = ({ factsArray, yearsArray }) => {
  return (
    <ul className="year-list">
      {factsArray.map((fact, years) => (
        <li
          style={{
            marginTop: `${(yearsArray[years] - yearsArray[years - 1]) / 100}%`,
          }}
          value={yearsArray[years]}
        >
          <span>{fact}</span>
        </li>
      ))}
    </ul>
  )
}
export default YearShow
