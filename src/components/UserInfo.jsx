import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../features/userSlice";
import { useInput } from "../hooks/custom-hooks";
import axios from "axios";
import { login } from "../features/userSlice";
import { useHistory } from "react-router-dom";
import MyOrders from "./MyOrders"

const UserInfo = () => {
  const user = useSelector(selectUser);
  const phone = useInput("phone");
  const address = useInput("address");

  const dispatch = useDispatch();
  const history = useHistory();

  const handleEdit = (e) => {
    e.preventDefault();
    history.push("/myProfileEdit");
  };

  return (
    <div>
      <br />
      <br />
      <br />
      <h2 className="fw-light titleNoMain">My Profile</h2>

      <form
        className="container col-sm-8 shadow-2-strong rounded"
        style={{ fontFamily: "Bebas Neue" }}
        onSubmit={handleEdit}
      >
        <br />
        <div>
          <input
            type="submit"
            className="btn btn-dark "
            value="Edit"
            style={{ fontSize: "15px" }}
          ></input>
        </div>
        <br />

        <div className="row">
          <div className="col-sm-6">
            <label for="name">Name</label>
            <input
              type="text"
              value={user?.firstName}
              className="form-control"
              disabled
            ></input>
          </div>
          <div className="col-sm-6">
            <label for="lastName">Last Name</label>
            <input
              type="text"
              value={user?.lastName}
              className="form-control"
              disabled
            ></input>
          </div>
        </div>

        <br />
        <div className="row">
          <div className="col-sm-6">
            <label for="phone">Phone</label>
            <input
              type="text"
              defaultValue={user?.checkoutInfo.phone}
              value={phone.value}
              className="form-control"
              onChange={phone.onChange}
              required
              disabled
            ></input>
          </div>
          <div className="col-sm-6">
            <label for="adress">Address </label>
            <input
              type="text"
              defaultValue={user?.checkoutInfo.address}
              value={address.value}
              className="form-control"
              onChange={address.onChange}
              required
              disabled
            />
          </div>
        </div>

        <br />
        <div className="row">
          <div className="col-sm-12">
            <label for="phone">EMAIL</label>
            <input
              type="text"
              defaultValue={user?.email}
              className="form-control"
              required
              disabled
            ></input>
          </div>
        </div>
        <br />
      
        <div className="row">
          <div className="col-sm-12">
            <label for="phone">MY ORDERS</label>
           <MyOrders/>
            <br/>
          </div>
        </div>
      </form>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default UserInfo;
