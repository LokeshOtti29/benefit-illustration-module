import React from "react";

const Register = () => {
  return (
    <div className="bg-light min-vh-100 d-flex align-items-center justify-content-center px-3">
      <div className="w-100" style={{ maxWidth: "500px" }}>
        <div className="card shadow border-0 rounded-4">
          <div className="card-body px-4 py-5">
            <h3 className="mb-4 text-center fw-bold">Create Your Account</h3>

            <form>
              <div className="row">
                <div className="col-12 col-md-6 mb-3">
                  <input
                    type="text"
                    id="firstName"
                    className="form-control"
                    placeholder="First name"
                  />
                </div>
                <div className="col-12 col-md-6 mb-3">
                  <input
                    type="text"
                    id="lastName"
                    className="form-control"
                    placeholder="Last name"
                  />
                </div>
              </div>

              <div className="mb-3">
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="Email address"
                />
              </div>

              <div className="mb-4">
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  placeholder="Password"
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
                <a href="#" className="text-primary text-decoration-none">
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
