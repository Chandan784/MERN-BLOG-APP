import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import AuthContext from "./Component/Store/AuthStore";
function App() {
  let [isLogin, setIsLogin] = useState(false);

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
