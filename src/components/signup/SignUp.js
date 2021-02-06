import { useRef, useState } from "react";
import "./SignUp.css";
import { useAuth } from "../../contexts/AuthContext";
import Alert from "@material-ui/lab/Alert";

const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords are not equal");
    }
    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  };

  return (
    <div className="signup">
      <h2>Create your Account</h2>
      {error && (
        <Alert className="error" severity="error">
          {error}
        </Alert>
      )}
      <form className="form" onSubmit={handleSubmit}>
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
        <a className="account-link" href="#">
          Already have an account? Sign In
        </a>
      </form>
    </div>
  );
};

export default SignUp;
