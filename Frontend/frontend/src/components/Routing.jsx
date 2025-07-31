import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "./Home";
import Calculation from "./Calculation";
import Illustration from "./Illustration";
import Login from "./Login";
import Register from "./Register";

const Routing = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
      children: [
        { path: "calculate", element: <Calculation /> },
        { path: "illustration", element: <Illustration /> },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return routes;
};

export default Routing;
