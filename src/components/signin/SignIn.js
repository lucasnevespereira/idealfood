import "./SignIn.css";

const Signin = () => {
  return (
    <div className="signin">
      <h2>Sign In </h2>
      <form className="form">
        <div className="form-field">
          <label for="login-email">E-mail</label>
          <input id="login-email" type="email" required />
        </div>
        <div className="form-field">
          <label for="login-password">Password</label>
          <input id="login-password" type="password" required />
        </div>
        <button type="submit" className="btn-login">
          Sign In
        </button>
        <a className="create-account-link" href="#">
          Don't have an account yet? Create one here
        </a>
      </form>
    </div>
  );
};

export default Signin;
