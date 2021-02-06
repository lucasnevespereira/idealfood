import "./Login.css";
import { useRef, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import Alert from "@material-ui/lab/Alert";
import { Link, useHistory } from "react-router-dom";
import logo from "../../assets/logo.svg";
import Footer from "../../components/footer/Footer";
import Loader from "../loader/Loader";

const Login = () => {
  const loginEmailRef = useRef();
  const loginPasswordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const onLogin = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(loginEmailRef.current.value, loginPasswordRef.current.value);
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
      <div className="signin">
        <h2>Log In</h2>
        {loading ? (
          <div className="loader-wrapper">
            <Loader />
          </div>
        ) : (
          ""
        )}

        {error && (
          <Alert className="error" severity="error">
            {error}
          </Alert>
        )}

        <form className="form" onSubmit={onLogin}>
          <div className="form-field">
            <label>E-mail</label>
            <input id="email" ref={loginEmailRef} type="email" required />
          </div>
          <div className="form-field">
            <label>Password</label>
            <input
              id="password"
              ref={loginPasswordRef}
              type="password"
              required
            />
            <small>
              <Link to="/forgot-password">Forgot Password ?</Link>
            </small>
          </div>

          <button type="submit" className="btn-login" disabled={loading}>
            Log In
          </button>
          <Link className="create-account-link" to="/signup">
            Need an account? Sign Up
          </Link>
        </form>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Login;
