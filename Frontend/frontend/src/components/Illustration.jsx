import React from "react";

const Illustration = () => {
  const data = [
    {
      policyYear: 1,
      premium: 80000,
      sumAssured: 0,
      bonusRate: "2.50%",
      bonusAmount: 30000,
      totalBenefit: 0,
      netCashflow: -80000,
    },
    {
      policyYear: 2,
      premium: 80000,
      sumAssured: 0,
      bonusRate: "3%",
      bonusAmount: 36000,
      totalBenefit: 0,
      netCashflow: -80000,
    },

    {
      policyYear: 18,
      premium: 0,
      sumAssured: 1200000,
      bonusRate: "4.50%",
      bonusAmount: 54000,
      totalBenefit: 2256000,
      netCashflow: 2256000,
    },
  ];

  const IRR = "8.4%";

  return (
    <div className="container mt-1">
      <h3 className="text-center mb-4">Policy Illustration</h3>
      <div className="text-end mb-2 fw-bold">
        IRR: <span className="text-success">{IRR}</span>
      </div>
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
            {data.map((row, index) => (
              <tr key={index}>
                <td>{row.policyYear}</td>
                <td>₹{row.premium.toLocaleString()}</td>
                <td>₹{row.sumAssured.toLocaleString()}</td>
                <td>{row.bonusRate}</td>
                <td>₹{row.bonusAmount.toLocaleString()}</td>
                <td>₹{row.totalBenefit.toLocaleString()}</td>
                <td>₹{row.netCashflow.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Illustration;
