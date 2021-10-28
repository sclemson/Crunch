import React from "react"

import DateForm from "../components/DateForm"
import MathForm from "../components/MathForm"

import NumberForm from "../components/NumberForm"
import YearFact from "../components/YearFact"

const Home = () => {
  return (
    <>
      <div className="title">
        <h1>
          <img src="../images/CrunchLogo.png" alt="logo"></img>
        </h1>
        <p>Your go to number guzzling app.</p>
      </div>
      <div className="crunch">
        <YearFact />
        <NumberForm />
        <DateForm />
        <MathForm />
      </div>
    </>
  )
}

export default Home
