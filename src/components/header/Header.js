import "./Header.css";
import logo from "../../assets/logo.svg";
import IconButton from "@material-ui/core/IconButton";
import PersonIcon from "@material-ui/icons/Person";
import ListIcon from "@material-ui/icons/List";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/profile">
        <IconButton>
          <PersonIcon className="header__icon" />
        </IconButton>
      </Link>

      <Link to="/">
        <img className="header__logo" src={logo} alt="app_logo" />
      </Link>

      <Link to="/">
        <IconButton>
          <ListIcon className="header__icon" />
        </IconButton>
      </Link>
    </div>
  );
};

export default Header;
