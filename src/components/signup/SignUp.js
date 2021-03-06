import { useRef, useState } from "react";
import "./Signup.css";
import { useAuth } from "../../contexts/AuthContext";
import Alert from "@material-ui/lab/Alert";
import { Link, useHistory } from "react-router-dom";
import logo from "../../assets/logo.svg";
import Footer from "../../components/footer/Footer";
import Loader from "../../components/loader/Loader";

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const onSignUp = async (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords are not equal");
    }
    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/");
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

      <div className="signup">
        <h2>Create your Account</h2>
        {error && (
          <Alert className="error" severity="error">
            {error}
          </Alert>
        )}

        {loading ? (
          <div className="loader-wrapper">
            <Loader />
          </div>
        ) : (
          ""
        )}
        <form className="form" onSubmit={onSignUp}>
          <div className="form-field">
            <label>E-mail</label>
            <input id="email" ref={emailRef} type="email" required />
          </div>
          <div className="form-field">
            <label>Password</label>
            <input id="password" ref={passwordRef} type="password" required />
          </div>
          <div className="form-field">
            <label>Confirm Password</label>
            <input
              id="password-confirm"
              ref={passwordConfirmRef}
              type="password"
              required
            />
          </div>
          <button type="submit" className="btn-signup" disabled={loading}>
            Sign Up
          </button>
          <Link className="account-link" to="/login">
            Already have an account? Log In
          </Link>
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Signup;
