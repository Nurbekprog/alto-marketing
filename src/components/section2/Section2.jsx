import "./Section2.scss";
import cardImg1 from "../../assets/images/section2-img1.png";
import cardImg2 from "../../assets/images/section2-img2.png";
import cardImg3 from "../../assets/images/section2-img3.png";
const Section2 = () => {
  return (
    <div className="section2-container">
      <h2>Getting started is easy</h2>
      <ul className="section2-cards">
        <li className="section2-cards-item">
          <img src={cardImg1} alt="" />
          <h3>Send in a prescription</h3>
          <p>Transfer your existing prescription or ask your doctor to send a new prescription to Alto.</p>
        </li>
        <li className="section2-cards-item">
          <img src={cardImg2} alt="" />
          <h3>See your savings</h3>
          <p>We`ll search for savings on your medication and show you delivery options. We accept most major insurance plans.</p>
        </li>
        <li className="section2-cards-item">
          <img src={cardImg3} alt="" />
          <h3>Receive your delivery</h3>
          <p>You pick the day and time and we`ll deliver it by hand, for free. No delivery or hidden fees.</p>
        </li>
      </ul>
    </div>
  )
}

export default Section2
