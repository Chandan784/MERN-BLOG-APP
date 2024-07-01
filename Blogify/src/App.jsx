import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import AuthContext from "./Component/Store/AuthStore";
import { login } from "../../client/src/store/authSlice";
function App() {
  let loginValue;
  let user = localStorage.getItem("userId");

  if (user) {
    loginValue = true;
  } else {
    loginValue = false;
  }
  let [isLogin, setIsLogin] = useState(loginValue);

  return (
    <>
      <AuthContext.Provider value={{ isLogin, setIsLogin }}>
        <Header />
        <Outlet />
        <Footer />
      </AuthContext.Provider>
    </>
  );
}

export default App;
