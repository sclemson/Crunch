import "./App.css"
import DateForm from "./components/DateForm"
import MathForm from "./components/MathForm"
import NumberForm from "./components/NumberForm"
import YearFact from "./components/YearFact"

function App() {
  return (
    <main>
      <header>
        <h1>Crunch</h1>
        <p>Your go to number guzzling app.</p>
      </header>
      <div className="crunch">
        <YearFact />
        <NumberForm />
        <DateForm />
        <MathForm />
      </div>
    </main>
  )
}

export default App
