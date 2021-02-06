import "./Header.css";
import logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <div className="header">
      <img className="header__logo" src={logo} alt="app_logo" />
    </div>
  );
};

export default Header;
