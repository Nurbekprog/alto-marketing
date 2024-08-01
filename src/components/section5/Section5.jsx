import "./Section5.scss";
import section5Img from "../../assets/images/section5.png";
const Section5 = () => {
  return (
    <div className="section5 container">
        <div className="section5-text">
            <h3>Ask your pharmacist, not the Internet.</h3>
            <p>Prescriptions can be tricky. Our pharmacists are just a chat, text, or phone call away.</p>
        </div>
        <img src={section5Img} alt="section5 Img" />    
    </div>
  )
}

export default Section5
