import React from "react";
import { Link } from "react-router-dom";

const OrderDetailProducts = () => {
  return (
    <table className="table border table-lg">
      <thead>
        <tr>
          <th style={{ width: "40%" }}>Product</th>
          <th style={{ width: "20%" }}>Unit Price</th>
          <th style={{ width: "20%" }}>Quantity</th>
          <th style={{ width: "20%" }} className="text-end">
            Total
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <Link className="itemside" to="#">
              <div className="left">
                <img
                  src="/images/1 (1).jpg"
                  alt="product"
                  style={{ width: "40px", height: "40px" }}
                  className="img-xs"
                />
              </div>
              <div className="info">
              Straw Floppy Hat{" "}
              </div>
            </Link>
          </td>
          <td>RS 2500 </td>
          <td>3 </td>
          <td className="text-end"> RS 8500</td>
        </tr>

        <tr>
          <td colSpan="4">
            <article className="float-end">
              <dl className="dlist">
                <dt>Subtotal:</dt> <dd>RS 4000</dd>
              </dl>
              <dl className="dlist">
                <dt>Shipping cost:</dt> <dd>RS 56,907</dd>
              </dl>
              <dl className="dlist">
                <dt>Grand total:</dt>
                <dd>
                  <b className="h5">RS 2,345</b>
                </dd>
              </dl>
              <dl className="dlist">
                <dt className="text-muted">Status:</dt>
                <dd>
                  <span className="badge rounded-pill alert alert-success text-success">
                    Payment done
                  </span>
                </dd>
              </dl>
            </article>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default OrderDetailProducts;
