import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./App.css"
import DateForm from "./components/DateForm"
import MathForm from "./components/MathForm"
import NumberForm from "./components/NumberForm"
import YearFact from "./components/YearFact"
import Nav from "./components/Nav"
import About from "./components/About"
import Home from "./components/Home"

function App() {
  return (
    <Router>
      <header>
        <Nav />
      </header>
      <main>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/" component={Home} />
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
        </Switch>
      </main>
    </Router>
  )
}

export default App
