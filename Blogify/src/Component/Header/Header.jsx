import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import AuthContext from "../Store/AuthStore";
import { IoMdContact } from "react-icons/io";



function Header() {
  let [display, SetDisplay] = useState("hidden");
  let [menu, setMenu] = useState(1);

  let authData = useContext(AuthContext);

  console.log(authData);
  return (
    <>
      <div
        className="navbar lg:h-20 bg-slate-900 text-white flex gap-5 justify-between
      lg:flex-row  lg:items-center text-xl font-medium p-4 fixed top-0 left-0 right-0 z-10 "
      >
        <div className="left hover:text-green-700">
          <Link to = "/"><h1 className="text-2xl font-display">BLOGIFY</h1></Link>
        </div>
        {/* <Link to="/profile" className="hover:text-green-700 text-4xl">
              <IoMdContact  className="profile "/>
        </Link> */}
        <div
          className={`medium ${display}  flex flex-col  text-center lg:flex-row gap-4 lg:flex
    lg:gap-2  font-medium lg:block `}
        >
          {/* <Link to="/" className="hover:text-green-700">
            Home
          </Link> */}
          {/* <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link> */} 
        </div>
        <div
          className={`medium  flex flex-col  text-center lg:flex-row gap-4 lg:flex
      lg:gap-4  font-medium `}
        >
          {authData.isLogin ? (
            <>
              <Link to="/profile" className="hover:text-green-700 text-4xl">
                <IoMdContact  className="profile "/>
              </Link>
              {/* <Link onClick={handelLogoutBtn} className="hover:text-green-700">
                Logout
              </Link> */}
            </>
          ) : (
            <>
              <Link to="/login" className=" hover:text-green-700">
                Login
              </Link>
              {/* <Link to="/signup" className="hover:text-green-700">
                Signup
              </Link> */}
            </>
          )}
        </div>

        {/* <div className=" absolute left-0 lg:hidden">
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
        </div> */}
      </div>
    </>
  );
}

export default Header;
