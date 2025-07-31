import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const formSchema = z.object({
  dob: z.string().min(1, "Date of Birth is required"),
  gender: z.enum(["M", "F"], { message: "Gender is required" }),
  sumAssured: z
    .number({ invalid_type_error: "Sum Assured is required" })
    .min(1, "Sum Assured is required"),
  premium: z
    .number({ invalid_type_error: "Premium is required" })
    .min(10000, "Minimum ₹10,000")
    .max(50000, "Maximum ₹50,000"),
  frequency: z.enum(["Yearly", "Half-Yearly", "Monthly"], {
    message: "Frequency is required",
  }),
  pt: z
    .number({ invalid_type_error: "Policy Term is required" })
    .min(10)
    .max(20),
  ppt: z.number({ invalid_type_error: "PPT is required" }).min(5).max(10),
});

const Calculation = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: zodResolver(formSchema),
    mode: "onTouched",
  });

  const onSubmit = async (data) => {
    const age = calculateAge(data.dob);
    if (age < 23 || age > 56) {
      alert("Age must be between 23 and 56");
      return;
    }
    if (data.pt <= data.ppt) {
      alert("Policy Term must be greater than PPT");
      return;
    }

    try {
      await axios.post(
        "http://localhost:5000/api/illustration/calculate",
        data,
        {
          withCredentials: true,
        }
      );
      navigate("/illustration");
    } catch (err) {
      alert(err.response?.data?.message || "Something went wrong");
    }
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

  return (
    <div className="container d-flex align-items-center justify-content-center min-vh-100">
      <div className="card shadow p-4 w-100" style={{ maxWidth: "800px" }}>
        <h4 className="text-center mb-4 fw-bold">Enter Policy Details</h4>
        <form onSubmit={handleSubmit(onSubmit)} className="p-4">
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="dob" className="form-label">
                Date of Birth
              </label>
              <input
                type="date"
                {...register("dob")}
                className="form-control"
              />
              {errors.dob && (
                <p className="text-danger">{errors.dob.message}</p>
              )}
            </div>
            <div className="col-md-6">
              <label htmlFor="gender" className="form-label">
                Gender
              </label>
              <select {...register("gender")} className="form-select">
                <option value="">Select</option>
                <option value="M">Male</option>
                <option value="F">Female</option>
              </select>
              {errors.gender && (
                <p className="text-danger">{errors.gender.message}</p>
              )}
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="sumAssured" className="form-label">
                Sum Assured (₹)
              </label>
              <input
                type="number"
                {...register("sumAssured", { valueAsNumber: true })}
                className="form-control"
              />
              {errors.sumAssured && (
                <p className="text-danger">{errors.sumAssured.message}</p>
              )}
            </div>
            <div className="col-md-6">
              <label htmlFor="premium" className="form-label">
                Modal Premium (₹)
              </label>
              <input
                type="number"
                {...register("premium", { valueAsNumber: true })}
                className="form-control"
              />
              {errors.premium && (
                <p className="text-danger">{errors.premium.message}</p>
              )}
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="frequency" className="form-label">
                Premium Frequency
              </label>
              <select {...register("frequency")} className="form-select">
                <option value="">Select</option>
                <option value="Yearly">Yearly</option>
                <option value="Half-Yearly">Half-Yearly</option>
                <option value="Monthly">Monthly</option>
              </select>
              {errors.frequency && (
                <p className="text-danger">{errors.frequency.message}</p>
              )}
            </div>
            <div className="col-md-6">
              <label htmlFor="pt" className="form-label">
                Policy Term (PT)
              </label>
              <input
                type="number"
                {...register("pt", { valueAsNumber: true })}
                className="form-control"
              />
              {errors.pt && <p className="text-danger">{errors.pt.message}</p>}
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-md-6">
              <label htmlFor="ppt" className="form-label">
                Premium Paying Term (PPT)
              </label>
              <input
                type="number"
                {...register("ppt", { valueAsNumber: true })}
                className="form-control"
              />
              {errors.ppt && (
                <p className="text-danger">{errors.ppt.message}</p>
              )}
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
