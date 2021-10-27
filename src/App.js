import "./App.css"
import DateFact from "./components/DateFact"
import MathForm from "./components/MathForm"
import NumberTrivia from "./components/NumberTrivia"
import YearFact from "./components/YearFact"
import YearForm from "./components/YearInput"

function App() {
  return (
    <main>
      <div className="crunch">
        <YearFact />
        <NumberTrivia n={30} />
        <DateFact month={8} day={12} />
        <MathForm />
      </div>
    </main>
  )
}

export default App
