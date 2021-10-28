import React from "react"

const About = () => {
  return (
    <div className="about">
      <h1>About Us</h1>
      <div className="profiles">
        <div>
          <h2>Milo</h2>
          <p>He's very cool.</p>
          <p>
            <a
              href="https://github.com/milobedini"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </p>
          <p>
            <a
              href="https://www.linkedin.com/in/milo-bedini-794787154/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </p>
        </div>
        <div>
          <h2>Simon</h2>
          <p>He's even cooler.</p>
          <p>
            <a
              href="https://github.com/sclemson"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </p>
          <p>
            <a
              href="https://www.linkedin.com/in/simon-clemson-067142205/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
