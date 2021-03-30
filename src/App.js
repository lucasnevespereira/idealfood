import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Main from "./components/main/Main";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from "./utils/PrivateRoute";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Profile from "./components/profile/Profile";
import ForgotPassword from "./components/forgot-password/ForgotPassword";
import UpdateProfile from "./components/update-profile/UpdateProfile";
import List from "./components/list/List";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <PrivateRoute path="/" component={Main} exact />
          <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute path="/update-profile" component={UpdateProfile} />
          <PrivateRoute path="/list" component={List} />
        </Switch>
      </AuthProvider>
    </Router>
  );
};

export default App;
