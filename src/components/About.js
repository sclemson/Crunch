import MiloPic from "../images/MiloPic.jpg"
import SimonPic from "../images/SCprofile.jpg"

const About = () => {
  return (
    <div className="about">
      <h1>About Us</h1>
      <div className="profiles">
        <div className="Milo">
          <h2>Milo</h2>
          <p>
            <img id="Milo" src={MiloPic} alt="Milo"></img>
          </p>
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
        <div className="Simon">
          <h2>Simon</h2>
          <p>
            <img id="Simon" src={SimonPic} alt="Simon"></img>
          </p>
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
