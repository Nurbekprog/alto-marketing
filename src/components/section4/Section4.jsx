import "./Section4.scss";
import cardImg1 from "../../assets/images/section4-img1.png";
import cardImg2 from "../../assets/images/section4-img2.png";
import cardImg3 from "../../assets/images/section4-img3.png";

const Section4 = () => {
  return (
    <div className="section4 container">
      <h2>The extraordinary care you deserve.</h2>
      <ul className="cards">
        <li className="cards-item">
            <img src={cardImg1} alt="" />
            <h3>Low prices</h3>
            <p>We’ve saved our users more than $40 million on their medications.</p>
        </li> 
        <li className="cards-item">
            <img src={cardImg2} alt="" />
            <h3>Free same-day delivery</h3>
            <p>Before work, in the evening, or right to your office. The same day, and it’s free.</p>
        </li>
        <li className="cards-item">
            <img src={cardImg3} alt="" />
            <h3>Chat with a pharmacist</h3>
            <p>Worried about side effects? Something else? Chat with a pharmacist anytime.</p>
        </li>
      </ul>
    </div>
  )
}

export default Section4
