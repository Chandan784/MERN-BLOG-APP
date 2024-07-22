import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import AuthContext from "./Component/Store/AuthStore";
import { useEffect } from "react";
import BlogContext from "./Component/Store/blogStore";

function App() {
  let loginValue;
  let user = localStorage.getItem("userId");

  if (user) {
    loginValue = true;
  } else {
    loginValue = false;
  }
  let [isLogin, setIsLogin] = useState(loginValue);

  let [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getBlogs();
  }, []);

  async function getBlogs() {
    let response = await fetch("/api/v1/blogs/all-blog");

    let data = await response.json();

    console.log(data);

    setBlogs(data.blogs);
  }

  return (
    <>
      <BlogContext.Provider value={{ blogs, setBlogs, getBlogs }}>
        <AuthContext.Provider value={{ isLogin, setIsLogin }}>
          <Header />
          <Outlet />
          <Footer />
        </AuthContext.Provider>
      </BlogContext.Provider>
    </>
  );
}

export default App;
