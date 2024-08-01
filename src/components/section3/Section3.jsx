import "./Section3.scss";
import section3Img from "../../assets/images/section3-img.png";
const Section3 = () => {
  return (
    <div className="section3 container">
        <div className="section3-video">
            <img src={section3Img} alt="" />
            <button>Watch Lisa`s story → </button>
        </div>
        <div className="section3-text">
            <h4>``It`s been a life changer for me - how easy it is to use. I`ll never go to a pharmacy again``</h4>
            <p>-Lisa, Alto customer</p>
        </div>
    </div>
  );
};

export default Section3;
