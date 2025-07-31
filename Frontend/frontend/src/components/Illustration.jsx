import React, { useEffect, useState } from "react";
import axios from "axios";

const Illustration = () => {
  const [data, setData] = useState([]);
  const [IRR, setIRR] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchIllustration = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/illustration", {
          withCredentials: true,
        });
        setData(res.data.data || []);
        setIRR(res.data.IRR || null);
      } catch (err) {
        setError("Failed to load illustration data.");
      }
    };

    fetchIllustration();
  }, []);

  return (
    <div className="container mt-1">
      <h3 className="text-center mb-4">Policy Illustration</h3>

      {error && (
        <div className="alert alert-danger text-center" role="alert">
          {error}
        </div>
      )}

      {IRR && (
        <div className="text-end mb-2 fw-bold">
          IRR: <span className="text-success">{IRR}</span>
        </div>
      )}

      <div className="table-responsive">
        <table className="table table-bordered table-striped text-center">
          <thead className="table-dark">
            <tr>
              <th>Policy Year</th>
              <th>Premium</th>
              <th>Sum Assured</th>
              <th>Bonus Rate</th>
              <th>Bonus Amount</th>
              <th>Total Benefit</th>
              <th>Net Cashflows</th>
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr>
                <td colSpan="7" className="text-center">
                  No data available
                </td>
              </tr>
            ) : (
              data.map((row, index) => (
                <tr key={index}>
                  <td>{row.policyYear}</td>
                  <td>₹{row.premium?.toLocaleString() || 0}</td>
                  <td>₹{row.sumAssured?.toLocaleString() || 0}</td>
                  <td>{row.bonusRate}</td>
                  <td>₹{row.bonusAmount?.toLocaleString() || 0}</td>
                  <td>₹{row.totalBenefit?.toLocaleString() || 0}</td>
                  <td>₹{row.netCashflow?.toLocaleString() || 0}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Illustration;
