import "./App.css"
import DateFact from "./components/DateFact"
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
        <DateFact month={8} day={12} />
        <MathForm />
      </div>
    </main>
  )
}

export default App
