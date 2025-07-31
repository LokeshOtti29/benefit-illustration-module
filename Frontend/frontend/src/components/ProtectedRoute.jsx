import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import axios from "axios";

const ProtectedRoute = () => {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/auth/check-auth", {
        withCredentials: true,
      })
      .then(() => setAuth(true))
      .catch(() => setAuth(false));
  }, []);

  if (auth === null) return <div>Loading...</div>;
  if (!auth) return <Navigate to="/login" />;
  return <Outlet />;
};
export default ProtectedRoute;
