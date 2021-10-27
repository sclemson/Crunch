import "./App.css"
import DateFact from "./components/DateFact"
import MathFact from "./components/MathFact"
import MathForm from "./components/MathForm"
import NumberTrivia from "./components/NumberTrivia"
import YearFact from "./components/YearFact"
import YearForm from "./components/YearForm"

function App() {
  return (
    <div className="crunch">
      <YearFact />
      <NumberTrivia n={30} />
      <DateFact month={8} day={12} />
      <MathForm />
      <YearForm />
      {/* <YearForm /> */}
    </div>
  )
}

export default App
