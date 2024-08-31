import React from "react";
import Blogs from "../Blogs/Blogs";
import Banner from "./Banner";
import Category from "../Category/Category";

function Home() {
  return (
    <div className=" h-fit overflow-x-hidden ">
      <Banner />
      <Category />
      <Blogs />
    </div>
  );
}

export default Home;
