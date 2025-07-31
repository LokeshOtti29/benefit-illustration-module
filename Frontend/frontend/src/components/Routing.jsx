import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "./Home";
import Calculation from "./Calculation";
import Illustration from "./Illustration";
import Login from "./Login";
import Register from "./Register";
import ProtectedRoute from "./ProtectedRoute";

const Routing = () => {
  const routes = useRoutes([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/",
      element: <ProtectedRoute />,
      children: [
        {
          path: "/",
          element: <Home />,
          children: [
            { path: "/calculate", element: <Calculation /> },
            { path: "/illustration", element: <Illustration /> },
          ],
        },
      ],
    },
  ]);

  return routes;
};

export default Routing;
