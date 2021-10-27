import "./App.css"
import DateFact from "./components/DateFact"
import MathFact from "./components/MathFact"
import MathForm from "./components/MathForm"
import NumberTrivia from "./components/NumberTrivia"
import YearFact from "./components/YearFact"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <YearFact y={1995} />
        <NumberTrivia n={30} />
        <DateFact month={8} day={12} />
        <MathForm />
        <MathFact />
      </header>
    </div>
  )
}

export default App
