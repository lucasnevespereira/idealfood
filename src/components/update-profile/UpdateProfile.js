import "./UpdateProfile.css";
import { useState, useRef } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Loader from "../loader/Loader";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Alert from "@material-ui/lab/Alert";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

const UpdateProfile = () => {
  const emailRef = useRef();
  const newPasswordRef = useRef();
  const newPasswordConfirmationRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { currentUser, updatePassword, updateEmail } = useAuth();
  const history = useHistory();

  const onUpdateProfile = (e) => {
    e.preventDefault();
    if (
      newPasswordRef.current.value !== newPasswordConfirmationRef.current.value
    ) {
      return setError("Passwords are not equal");
    }

    const promises = [];
    setLoading(true);
    setError("");

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value));
    }

    if (newPasswordRef.current.value) {
      promises.push(updatePassword(newPasswordRef.current.value));
    }

    Promise.all(promises)
      .then(() => {
        // This runs if all our promises are successful
        history.push("/profile");
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        // This runs if promises fail or succed
        setLoading(false);
      });

    try {
      setError("");
      setLoading(true);
      history.push("/profile");
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };
  return (
    <div className="app">
      <Header />
      <div className="main">
        <Card>
          <h2>Update Profile</h2>
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
            <form className="form" onSubmit={onUpdateProfile}>
              <div className="form-field">
                <label>E-mail</label>
                <input
                  id="email"
                  ref={emailRef}
                  defaultValue={currentUser.email}
                  type="email"
                  required
                />
              </div>
              <div className="form-field">
                <label>New Password</label>
                <input
                  id="password"
                  ref={newPasswordRef}
                  type="password"
                  placeholder="Leave empty to keep the same"
                />
              </div>
              <div className="form-field">
                <label>New Password Confirmation</label>
                <input
                  id="newPassword"
                  ref={newPasswordConfirmationRef}
                  type="password"
                  placeholder="Leave empty to keep the same"
                />
              </div>
              <button type="submit" className="btn-login" disabled={loading}>
                Update
              </button>

              <Link className="create-account-link" to="/profile">
                Cancel
              </Link>
            </form>
          </CardContent>
        </Card>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default UpdateProfile;
