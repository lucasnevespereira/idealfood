import "./ForgotPassword.css";
import { useRef, useState } from "react";
import Alert from "@material-ui/lab/Alert";
import logo from "../../assets/logo.svg";
import Footer from "../../components/footer/Footer";
import Loader from "../loader/Loader";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const ForgotPassword = () => {
  const resetEmailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const onResetPassword = async (e) => {
    e.preventDefault();
    setError("");
    try {
      setLoading(true);
      await resetPassword(resetEmailRef.current.value);
      setMessage("Check your inbox for further informations");
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <div className="container">
      <div className="container-header">
        <img className="logo" src={logo} alt="logo" />
      </div>
      <div className="signin">
        <h2>Reset Password</h2>
        {loading ? (
          <div className="loader-wrapper">
            <Loader />
          </div>
        ) : (
          ""
        )}

        {error && (
          <Alert className="message" severity="error">
            {error}
          </Alert>
        )}

        {message && (
          <Alert className="message" severity="success">
            {message}
          </Alert>
        )}

        <form className="form" onSubmit={onResetPassword}>
          <div className="form-field">
            <label>E-mail</label>
            <input id="email" ref={resetEmailRef} type="email" required />
          </div>

          <button type="submit" className="btn-login" disabled={loading}>
            Reset
          </button>
          <Link className="create-account-link" to="/login">
            Back to Log In
          </Link>
        </form>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default ForgotPassword;
