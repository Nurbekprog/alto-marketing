import "./Section1.scss";
import section1Bg from "../../assets/images/section1-bg.png";
const Section1 = () => {
  return (
    <div className="section1-out">
      <h1 className="section1-h1">The neighborhood pharmacy that comes to you.</h1>
      <button className="section1-btn">Transfer in seconds →</button>
      <img className="section1-bg-img" src={section1Bg} alt="section-bg" />
    </div>
  )
}

export default Section1
