import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./App.css"
import DateForm from "./components/DateForm"
import MathForm from "./components/MathForm"
import NumberForm from "./components/NumberForm"
import YearFact from "./components/YearFact"
import Nav from "./components/Nav"

function App() {
  return (
    <Router>
      <main>
        <header>
          <Nav />
        </header>
        <div className="title">
          <h1>Crunch</h1>
          <p>Your go to number guzzling app.</p>
        </div>
        <div className="crunch">
          <YearFact />
          <NumberForm />
          <DateForm />
          <MathForm />
        </div>
      </main>
    </Router>
  )
}

export default App
