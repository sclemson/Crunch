import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./App.css"
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
        </Switch>
      </main>
    </Router>
  )
}

export default App
