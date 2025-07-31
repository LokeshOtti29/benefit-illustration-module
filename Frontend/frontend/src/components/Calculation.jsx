import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Calculation = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    dob: "",
    gender: "",
    sumAssured: "",
    premium: "",
    frequency: "",
    pt: "",
    ppt: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { dob, sumAssured, premium, pt, ppt, frequency } = form;
    const age = calculateAge(dob);

    if (age < 23 || age > 56) return setError("Age must be between 23 and 56");
    if (ppt < 5 || ppt > 10) return setError("PPT must be between 5 and 10");
    if (pt < 10 || pt > 20) return setError("PT must be between 10 and 20");
    if (+pt <= +ppt) return setError("PT must be greater than PPT");
    if (premium < 10000 || premium > 50000)
      return setError("Premium must be between ₹10,000 and ₹50,000");
    if (!["Yearly", "Half-Yearly", "Monthly"].includes(frequency))
      return setError("Invalid Premium Frequency");

    navigate("/illustration");
  };

  return (
    <div className="container d-flex align-items-center justify-content-center min-vh-100">
      <div className="card shadow p-4 w-100" style={{ maxWidth: "800px" }}>
        <h4 className="text-center mb-4 fw-bold">Enter Policy Details</h4>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleSubmit} className="p-4">
          <div className="row mb-3">
            <div className="col-md-6 d-flex align-items-center">
              <label htmlFor="dob" className="col-5 col-form-label">
                Date of Birth
              </label>
              <input
                type="date"
                id="dob"
                name="dob"
                className="form-control"
                value={form.dob}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <label htmlFor="gender" className="col-5 col-form-label">
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                className="form-select"
                value={form.gender}
                onChange={handleChange}
                required
              >
                <option value="">Select</option>
                <option value="M">Male</option>
                <option value="F">Female</option>
              </select>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6 d-flex align-items-center">
              <label htmlFor="sumAssured" className="col-5 col-form-label">
                Sum Assured (₹)
              </label>
              <input
                type="number"
                id="sumAssured"
                name="sumAssured"
                className="form-control"
                value={form.sumAssured}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <label htmlFor="premium" className="col-5 col-form-label">
                Modal Premium (₹)
              </label>
              <input
                type="number"
                id="premium"
                name="premium"
                className="form-control"
                value={form.premium}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6 d-flex align-items-center">
              <label htmlFor="frequency" className="col-5 col-form-label">
                Premium Frequency
              </label>
              <select
                id="frequency"
                name="frequency"
                className="form-select"
                value={form.frequency}
                onChange={handleChange}
                required
              >
                <option value="">Select</option>
                <option value="Yearly">Yearly</option>
                <option value="Half-Yearly">Half-Yearly</option>
                <option value="Monthly">Monthly</option>
              </select>
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <label htmlFor="pt" className="col-5 col-form-label">
                Policy Term (PT)
              </label>
              <input
                type="number"
                id="pt"
                name="pt"
                className="form-control"
                value={form.pt}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-md-6 d-flex align-items-center">
              <label htmlFor="ppt" className="col-5 col-form-label">
                Premium Paying Term (PPT)
              </label>
              <input
                type="number"
                id="ppt"
                name="ppt"
                className="form-control"
                value={form.ppt}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-primary px-5 w-100">
              Calculate
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Calculation;
