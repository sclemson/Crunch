import "./App.css"
import DateFact from "./components/DateFact"
import MathFact from "./components/MathFact"
import NumberInput from "./components/NumberInput"
import NumberShow from "./components/NumberShow"
import YearFact from "./components/YearFact"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NumberInput />
        <YearFact y={1991} />
        <NumberShow numberChoice={numberChoice} />
        <MathFact m={35} />
        <DateFact month={8} day={12} />
      </header>
    </div>
  )
}

export default App
