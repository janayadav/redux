import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import {
  deposite,
  mobileUpdate,
  nameUpadate,
  reset,
  withdraw,
} from "./actions";

function Form() {
  let dispatch = useDispatch();
  const [amount, setAmount] = useState("");
  const [user, setUser] = useState("");
  const [updateMobile, setUpdateMobile] = useState("");
  const [trnsId, setTransId] = useState(0);
  return (
    <Fragment>
      <div className="container p-2">
        <h2 className="text-warning">Form</h2>
        <div className="row p-2">
          <div className="col-4">
            <input
              className="form-control"
              type="number"
              placeholder="enter amount.."
              value={amount}
              onChange={(e) => {
                let data = e.target.value;
                setAmount(data);
              }}
            />
          </div>
          <button
            onClick={() => {
              dispatch(deposite(amount));
              setTransId(trnsId + 1);
              dispatch({
                id: trnsId,
                type: "ADD",
                payload: { amount: amount, date: new Date(), type: "Credit" },
              });
              setAmount("");
            }}
            className="btn btn-primary col-1"
          >
            Deposite
          </button>

          <button
            onClick={() => {
              dispatch(withdraw(amount));
              setTransId(trnsId + 1);
              dispatch({
                id: trnsId,
                type: "ADD",
                payload: { amount: amount, date: new Date(), type: "Debit" },
              });
              setAmount("");
            }}
            className="btn btn-danger mx-2 col-1 p-2"
          >
            Withdraw
          </button>
        </div>

        <div className="row p-2">
          <div className="col-4">
            <input
              className="form-control"
              type="text"
              placeholder="enter userName"
              value={user}
              onChange={(e) => {
                let data = e.target.value;
                setUser(data);
              }}
            />
          </div>
          <button
            onClick={() => {
              dispatch(nameUpadate(user));
              setUser("");
            }}
            className="btn btn-primary col-1 p-1"
          >
            update
          </button>
        </div>

        <div className="row p-2 ">
          <div className="col-4">
            <input
              className="form-control"
              type="number"
              placeholder="enter mobile number"
              value={updateMobile}
              onChange={(e) => {
                let data = e.target.value;
                setUpdateMobile(data);
              }}
            />
          </div>
          <button
            onClick={() => {
              dispatch(mobileUpdate(updateMobile));
              setUpdateMobile("");
            }}
            className="btn btn-primary col-1 p-1"
          >
            update
          </button>
        </div>
        <button
          onClick={() => {
            dispatch(reset());
          }}
          className="btn btn-danger col-1 p-1"
        >
          Reset
        </button>
      </div>
    </Fragment>
  );
}

export default Form;
