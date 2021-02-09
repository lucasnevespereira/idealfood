import "./Header.css";
import logo from "../../assets/logo.svg";
import { makeStyles } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import PersonIcon from "@material-ui/icons/Person";
import ListIcon from "@material-ui/icons/List";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <div className="header">
      <Link to="/profile" className="profile-link">
        <IconButton className={classes.root}>
          <PersonIcon className="header__icon" />
          <p>Profile</p>
        </IconButton>
      </Link>

      <Link to="/" className="logo-link">
        <img className="header__logo" src={logo} alt="app_logo" />
      </Link>

      <Link to="/" className="list-link">
        <IconButton className={classes.root}>
          <ListIcon className="header__icon" />
          <p>My List</p>
        </IconButton>
      </Link>
    </div>
  );
};

export default Header;
