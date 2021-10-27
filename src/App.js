import "./App.css"
import DateFact from "./components/DateFact"
import MathFact from "./components/MathFact"
import NumberTrivia from "./components/NumberTrivia"
import YearFact from "./components/YearFact"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <YearFact y="random" />
        <NumberTrivia n={30} />
        <MathFact m={35} />
        <DateFact month={8} day={12} />
      </header>
    </div>
  )
}

export default App
