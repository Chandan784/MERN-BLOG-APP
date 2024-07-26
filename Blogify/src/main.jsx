import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Component/Home/Home.jsx";
import About from "./Component/About/About.jsx";
import Contact from "./Component/Contact/Contact.jsx";
import Login from "./Component/Auth/Login.jsx";
import Signup from "./Component/Auth/Signup.jsx";
import CreateBlog from "./Component/Blogs/CreateBlog.jsx";
import BlogDetails from "./Component/Blogs/BlogDetails.jsx";
import MyBlog from "./Component/Blogs/MyBlog.jsx";
import Profile from "./Component/Profile/Profile.jsx";
import EditProfile from "./Component/Profile/EditProfile.jsx";
let routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },

      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/create-blog",
        element: <CreateBlog />,
      },
      {
        path: "/blog-details",
        element: <BlogDetails />,
      },
      {
        path: "/my-blog",
        element: <MyBlog />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/edit-profile",
        element: <EditProfile />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes}></RouterProvider>
  </React.StrictMode>
);
