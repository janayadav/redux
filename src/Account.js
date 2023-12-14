import React, { Fragment } from "react";
import { useSelector } from "react-redux";

function Account() {
  let data = useSelector((state) => {
    return state;
  });

  return (
    <Fragment>
      <div className="container">
        <h2 className="text-primary">Account component</h2>
        <table className="table table-borderd w-50">
          <thead>
            <tr>
              <th>balence</th>
              <th>userName</th>
              <th>mobile</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{data.account.balence}</td>
              <td>{data.account.fullName}</td>
              <td>{data.account.mobile}</td>
            </tr>
          </tbody>
        </table>

        <table className="table table-borderd w-50">
          <thead>
            <tr>
              <th>Id</th>
              <th>Amount</th>
              <th>Type</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{data.trasaction.id}</td>
              <td>{data.trasaction.amount}</td>
              <td>{data.trasaction.type}</td>
              <td>{data.trasaction.Date}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Fragment>
  );
}

export default Account;
