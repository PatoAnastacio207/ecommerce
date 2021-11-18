import axios from "axios";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, login, update } from "../features/userSlice";
import imagen1 from "../assets/imagen1.png";
import CartProductCard from "./CartProductCard";
import { Link, useHistory } from "react-router-dom";
import imagen from "../assets/caballoGrinder.png";
import { useInput } from "../hooks/custom-hooks";
import { selectCart, checkout } from "../features/cartSlice";
import Notification from "../utils/Notification";

const Checkout = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const metodo = useInput("");
  const envio = useInput("");
  const direction = useInput("");
  const phone = useInput("");
  const cart = useSelector(selectCart);
  const priceOptions = { style: "currency", currency: "USD" };
  const priceFormat = new Intl.NumberFormat("en-US", priceOptions);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios

      .put(`/api/users/single/${user._id}`, {
        checkoutInfo: { address: direction.value, phone: phone.value },

      })
      .then((data) => {
        dispatch(login(data.data));
      })
      .then(() => {
        metodo.value === "tarjetaDeCredito"
          ? history.push("/creditcard")
          : axios
              .post("/api/checkout/buycart", { user, cart })
              .then((data) => {
                Notification.successMessage("Dummie compra lista");
                history.push("/myProfile");
              })
              .catch((err) => {
                Notification.errorMessage("Oops...");
                console.log(err);
              });
      });
  };

  //

  return (
    <section className="section-content padding-y">
      <div className="container-fluid">
        <br />
        <br />
        <h2 className="fw-light titleNoMain">
          <img src={imagen1} alt="" style={{ width: "10%" }} />
          Checkout
        </h2>
        <br />
        <div
          className="row container-fluid"
          style={{ fontFamily: "Bebas Neue" }}
        >
          <div>
            <div className="container">
              <br />
              <h1>HEY! {user?.firstName} YA CASI TENEMOS TODO LISTO</h1>
              <br />
              <div className="card container">
                <br />
                <div className="card-body container">
                  <form onSubmit={handleSubmit}>
                    <h3 class="card-text">
                      Tus productos:
                      <br />
                      <br />
                      {cart.items.map((cartItem) => (
                        <div>
                          <h4 className="text-muted">
                            {cartItem.name}{" "}
                            {priceFormat.format(
                              cartItem.price * cartItem.quantity
                            )}
                          </h4>
                        </div>
                      ))}
                    </h3>
                    <br></br>
                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        DIRECCION
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        defaultValue={user?.checkoutInfo.address}
                        value={direction.value}
                        onChange={direction.onChange}
                        required
                      />
                    </div>
                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        NUMERO CELULAR
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        defaultValue={user?.checkoutInfo.phone}
                        value={phone.value}
                        onChange={phone.onChange}
                        maxLength="15"
                        pattern="[0-9]+"
                        required
                      />
                    </div>
                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        TOTAL
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        value={priceFormat.format(cart.total)}
                        disabled
                      />
                    </div>
                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        METODO DE PAGO
                      </span>
                      <select
                        className="form-control-lg"
                        onChange={metodo.onChange}
                        required
                      >
                        <option value={"contraEntrega"}>Contraentrega</option>
                        <option value={"tarjetaDeCredito"}>
                          Tarjeta de credito
                        </option>
                      </select>
                    </div>
                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        METODO DE ENVIO
                      </span>
                      <select
                        className="form-control-lg"
                        onChange={envio.onChange}
                        required
                      >
                        <option value={(envio.value = 1)}>
                          Envio a domicilio
                        </option>
                        <option value={(envio.value = 2)}>
                          Recojo en tienda
                        </option>
                      </select>
                    </div>
                    <button
                      className="w-400 mainButton "
                      type="submit"
                      style={{ fontSize: "20px", fontFamily: "Bebas Neue" }}
                    >
                      CONFIRMAR
                    </button>
                  </form>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </section>
  );
};

export default Checkout;
