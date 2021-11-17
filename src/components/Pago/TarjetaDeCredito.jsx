import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { selectCart } from "../../features/cartSlice";
import { selectUser } from "../../features/userSlice";
import Notification from "../../utils/Notification";

const Tarjeta = () => {
  const history = useHistory();
  const user = useSelector(selectUser);
  const cart = useSelector(selectCart);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/checkout/buycart", { user, cart })
      .then((data) => {
        Notification.successMessage("Dummie compra lista");
        history.push("/");
      })
      .catch((err) => {
        Notification.errorMessage("Oops...");
        console.log(err);
      });
  };
  return (
    <div>
      <br />
      <br />
      <br />
      <h2 className="fw-light titleNoMain">Tarjeta de credito</h2>
      <form
        className="container col-sm-3 shadow-2-strong rounded"
        style={{ fontFamily: "Bebas Neue" }}
        onSubmit={handleSubmit}
      >
        <br />
        <div className="row">
          <div className="col-sm-9">
            <label for="name">Card Number</label>
            <input
              type="tel"
              className="form-control"
              name="number"
              maxlength="16"
              pattern="[0-9]+"
            ></input>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-sm-9">
            <label for="name">Card Name</label>
            <input type="text" className="form-control" name="name"></input>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-sm-8">
            <label for="month">Expiration Date</label>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-4">
            <select className="form-control" name="expiry">
              <option value=" ">Month</option>
              <option value="01">Jan</option>
              <option value="02">Feb</option>
              <option value="03">Mar</option>
              <option value="04">April</option>
              <option value="05">May</option>
              <option value="06">June</option>
              <option value="07">July</option>
              <option value="08">Aug</option>
              <option value="09">Sep</option>
              <option value="10">Oct</option>
              <option value="11">Nov</option>
              <option value="12">Dec</option>
            </select>
          </div>
          &nbsp;
          <div className="col-sm-4">
            <select className="form-control" name="expiry">
              <option value=" ">Year</option>
              <option value="21">2021</option>
              <option value="22">2022</option>
              <option value="23">2023</option>
              <option value="24">2024</option>
              <option value="25">2025</option>
              <option value="26">2026</option>
              <option value="27">2027</option>
              <option value="28">2028</option>
              <option value="29">2029</option>
              <option value="30">2030</option>
            </select>
          </div>
        </div>
        <br />
        <div className="col-sm-3">
          <label for="cvv">CVV</label>

          <input
            type="tel"
            name="cvc"
            maxlength="3"
            className=" form-control"
            pattern="\d*"
          ></input>
        </div>
        <br />
        <input
          type="submit"
          className="btn btn-primary form-control"
          value="Submit"
        />

        <br />
        <br />
      </form>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Tarjeta;
