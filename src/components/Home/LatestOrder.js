import React from "react";
import { Link } from "react-router-dom";

const LatestOrder = () => {
  return (
    <div className="card-body">
      <h5 className="card-title">Latest orders</h5>
      <div className="table-responsive">
        <table className="table">
          <tbody>
            <tr>
              <td>
                <b>Usman</b>
              </td>
              <td>Usman@example.com</td>
              <td>Rs 2345</td>
              <td>
                <span className="badge rounded-pill alert-success">
                  Paid At Today at 10:13 AM
                </span>
              </td>
              <td>Today at 10:13 AM</td>
              <td className="d-flex justify-content-end align-item-center">
                <Link to={`/order`} className="text-success">
                  <i className="fas fa-eye"></i>
                </Link>
              </td>
            </tr>
            {/* Not Paid */}
            <tr>
            <td>
                <b>Usman Baber</b>
              </td>
              <td>Usmanbaber@example.com</td>
              <td>Rs 2345</td>
              <td>
                <span className="badge rounded-pill alert-danger">
                  Created At Today at 10:13 AM
                </span>
              </td>
              <td>Today at 10:13 AM</td>
              <td className="d-flex justify-content-end align-item-center">
                <Link to={`/order`} className="text-success">
                  <i className="fas fa-eye"></i>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LatestOrder;
