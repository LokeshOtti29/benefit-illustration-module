import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await axios.post("http://localhost:5000/api/auth/register", formData, {
        withCredentials: true,
      });

      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="bg-light min-vh-100 d-flex align-items-center justify-content-center px-3">
      <div className="w-100" style={{ maxWidth: "500px" }}>
        <div className="card shadow border-0 rounded-4">
          <div className="card-body px-4 py-5">
            <h3 className="mb-4 text-center fw-bold">Create Your Account</h3>
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-12 col-md-6 mb-3">
                  <input
                    type="text"
                    id="firstName"
                    className="form-control"
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-12 col-md-6 mb-3">
                  <input
                    type="text"
                    id="lastName"
                    className="form-control"
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                  Sign Up
                </button>
              </div>
            </form>
            <div className="text-center mt-4">
              <p className="mb-0">
                Already have an account?{" "}
                <a href="/login" className="text-primary text-decoration-none">
                  Login here
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
