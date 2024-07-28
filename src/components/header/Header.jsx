import "./Header.scss";
import AltoLogo from "../../assets/images/alto-logo.png";
import MenuBtn from "../../assets/images/menu-btn.png";
const Header = () => {
  return (
    <div>
      <div className="header container">
        <img src={MenuBtn} alt="" />
        <img src={AltoLogo} alt="" />
        <ul className="header-links">
            <li><a className="header-links-item" href="">For Providers</a></li>
            <li><a className="header-links-item" href="">Sign in</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Header
