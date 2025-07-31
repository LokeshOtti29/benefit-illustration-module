import React from "react";
import Login from "./Login";
import Register from "./Register";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="pt-5 mt-5">
        <Outlet />
      </div>
    </>
  );
};

export default Home;
