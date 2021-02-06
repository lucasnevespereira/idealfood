import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
// import SignIn from "./components/signin/SignIn";
import SignUp from "./components/signup/SignUp";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <div className="app">
        <Header></Header>
        <div className="main">
          {/* <SignIn></SignIn> */}
          <SignUp />
        </div>
        <Footer></Footer>
      </div>
    </AuthProvider>
  );
}

export default App;
