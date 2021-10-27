import "./App.css"
import DateFact from "./components/DateFact"
import MathFact from "./components/MathFact"
import NumberTrivia from "./components/NumberTrivia"
import YearFact from "./components/YearFact"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <YearFact y={1991} />
        <NumberTrivia n={35} />
        <MathFact m={35} />
        <DateFact month={9} day={12} />
      </header>
    </div>
  )
}

export default App
