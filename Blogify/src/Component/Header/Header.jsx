import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import AuthContext from "../Store/AuthStore";
function Header() {
  let [display, SetDisplay] = useState("hidden");
  let [menu, setMenu] = useState(1);

  let authData = useContext(AuthContext);
  let navigate = useNavigate();
  function handelLogoutBtn() {
    navigate("/login");
    authData.setIsLogin(false);
    localStorage.removeItem("userId");
  }
  console.log(authData);
  return (
    <>
      <div className="navbar relative lg:h-20 bg-slate-900 text-white flex gap-5 justify-between
      flex-col lg:flex-row  lg:items-center text-xl font-medium p-4 ">
        <div className="left hover:text-green-700">
          <h1>Blogify</h1>
        </div>

        <div
          className={`medium ${display}  flex flex-col  text-center lg:flex-row gap-4 lg:flex
    lg:gap-2  font-medium lg:block `}
        >
          <Link to="/" className="hover:text-green-700">Home</Link>
          {/* <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link> */}
          {authData.isLogin ? (
            <>

            <Link to="/create-blog" className="hover:text-green-700">CreateBlog</Link>
            <Link to="/my-blog" className="hover:text-green-700">MyBlog</Link>
            </>) 
            : null}

        </div>

        <div
          className={`medium ${display}  flex flex-col  text-center lg:flex-row gap-4 lg:flex
      lg:gap-4  font-medium lg:block  `}
        >
          {authData.isLogin ? (
            <Link onClick={handelLogoutBtn} className="hover:text-green-700">Logout</Link>
          ) : (
            <>
              <Link to="/login" className=" hover:text-green-700">Login</Link>
              <Link to="/signup" className="hover:text-green-700">Signup</Link>
            </>
          )}
        </div>

        <div className=" absolute right-3 lg:hidden">
          {menu ? (
            <IoIosMenu
              className={`   text-3xl font-semibold `}
              onClick={() => {
                setMenu(0);
                SetDisplay("block");
              }}
            />
          ) : (
            <RxCross2
              className={`  text-3xl font-semibold `}
              onClick={() => {
                setMenu(1);
                SetDisplay("hidden");
              }}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default Header;
