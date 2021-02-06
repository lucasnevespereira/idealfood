import { useRef } from "react";
import "./SignUp.css";

const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  return (
    <div className="signup">
      <h2>Create your Account</h2>
      <form className="form">
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
        <button type="submit" className="btn-signup">
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
