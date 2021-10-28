import React from "react"

import DateForm from "../components/DateForm"
import MathForm from "../components/MathForm"

import NumberForm from "../components/NumberForm"
import YearFact from "../components/YearFact"
import YearTest from "./YearTest"
import YearSubmit from "./YearTest"

const Home = () => {
  return (
    <>
      <div className="title">
        <h1>Crunch</h1>
        <p>Your go to number guzzling app.</p>
      </div>
      <div className="crunch">
        <YearFact />
        <YearTest />
        {/* <NumberForm />
        <DateForm /> */}
        {/* <MathForm /> */}
      </div>
    </>
  )
}

export default Home
