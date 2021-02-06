import "./Profile.css";
import { useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Loader from "../loader/Loader";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Alert from "@material-ui/lab/Alert";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

const Profile = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  const onLogout = async () => {
    setError("");
    try {
      setLoading(true);
      await logout();
      history.push("/login");
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };
  return (
    <div className="app">
      <Header></Header>
      <div className="main">
        <Card>
          <h2>Profile</h2>
          {loading ? (
            <div className="loader-wrapper">
              <Loader />
            </div>
          ) : (
            ""
          )}
          <CardContent>
            {error && (
              <Alert className="error" severity="error">
                {error}
              </Alert>
            )}
            <p>
              <b>Email:</b>
              {currentUser && currentUser.email}
            </p>
            <Link to="/update-profile">
              <div className="btn btn-primary">Update Profile</div>
            </Link>
          </CardContent>
        </Card>
        <div className="logout">
          <div className="btn logout-btn" onClick={onLogout}>
            Log Out
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Profile;
