import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, updateData } from "../features/userSlice";
import imagen1 from "../assets/imagen1.png";

import { useHistory } from "react-router-dom";

import { useInput } from "../hooks/custom-hooks";
import { selectCart, empty } from "../features/cartSlice";
import Notification from "../utils/Notification";
import Swal from "sweetalert2";

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
        checkoutInfo: {
          address: direction.value || user?.checkoutInfo.address,
          phone: phone.value || user?.checkoutInfo.phone,
        },
      })
      .then(({ data }) => {
        dispatch(updateData(data));
        return metodo.value === "tarjetaDeCredito"
          ? history.push("/creditcard")
          : Swal.fire({
              title: "Confirmar compra",
              showCancelButton: true,
              confirmButtonText: "Comprar",
              showLoaderOnConfirm: true,
              preConfirm: () => {
                return axios
                  .post("/api/checkout/buycart", { user, cart })
                  .then((data) => {
                    Notification.successMessage("Dummie compra lista");
                  })
                  .then(async () => {
                    await axios.delete("/api/cart/clear");
                    dispatch(empty());
                    history.push("/myProfile");
                  });
              },
            });
      })
      .catch((err) => {
        Notification.errorMessage("Oops...");
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
                    <h3 className="card-text">
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
                    <div className="input-group mb-3">
                      <span className="input-group-text" id="basic-addon1">
                        DIRECCION
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={user?.checkoutInfo.address}
                        value={direction.value}
                        onChange={direction.onChange}
                        required
                      />
                    </div>
                    <div className="input-group mb-3">
                      <span className="input-group-text" id="basic-addon1">
                        NUMERO CELULAR
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={user?.checkoutInfo.phone}
                        value={phone.value}
                        onChange={phone.onChange}
                        maxLength="15"
                        pattern="[0-9]+"
                        required
                      />
                    </div>
                    <div className="input-group mb-3">
                      <span className="input-group-text" id="basic-addon1">
                        TOTAL
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        value={priceFormat.format(cart.total)}
                        disabled
                      />
                    </div>
                    <div className="input-group mb-3">
                      <span className="input-group-text" id="basic-addon1">
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
                    <div className="input-group mb-3">
                      <span className="input-group-text" id="basic-addon1">
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
