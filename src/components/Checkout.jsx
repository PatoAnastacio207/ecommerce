import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import imagen1 from "../assets/imagen1.png";
import CartProductCard from "./CartProductCard";
import { Link } from "react-router-dom";
import imagen from "../assets/caballoGrinder.png";
import { useInput } from "../hooks/custom-hooks";

const Checkout = () => {
  const user = useSelector(selectUser);
  const direction = useInput("");
  const phone = useInput("");
  const [cart, setCart] = useState({ items: [], total: 0 });
  const priceOptions = { style: "currency", currency: "USD" };
  const priceFormat = new Intl.NumberFormat("en-US", priceOptions);
  console.log(user);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    // Devuelve un array de objectos con el id y la cantidad de cada item
    console.log("useEffect");
    axios
      .get("/api/cart")
      .then(({ data }) => {
        const itemsIds = data.map((item) => item._id);
        return axios.post("/api/products/array", itemsIds);
      })
      .then(({ data }) => {
        var total = data.reduce((previo, current) => {
          console.log("REDUCER", previo, current);
          return previo ? current.price + previo : current.price;
        }, 0);
        setCart({ items: data, total: total });
      })
      .catch(() => console.log("ERROR"));
  }, []);

  console.log(cart);
  return (
    <section className="section-content padding-y">
      <div className="container-fluid">
        <br />
        <br />
        <h2 className="fw-light titleNoMain">
          <img src={imagen1} alt="" style={{ width: "10%" }} />
          Checkout
        </h2>
        {console.log(cart)}
        <br />
        <div
          className="row container-fluid"
          style={{ fontFamily: "Bebas Neue" }}
        >
          <div className="col-sm-7">
            <form>
              <div className="container">
                <br />
                <h1>HEY! {user.firstName} YA CASI TENEMOS TODO LISTO</h1>
                <br />
                <div className="card container">
                  <br />
                  <div className="card-body container">
                    <form>
                      
                     
                      <br></br>
                      <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">
                          DIRECCION
                        </span>
                        <input
                          type="text"
                          class="form-control"
                          value={user.checkoutInfo?.address || direction.value}
                          onChange={direction.onChange}
                        />
                      </div>
                      <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">
                          NUMERO CELULAR
                        </span>
                        <input
                          type="text"
                          class="form-control"
                          value={user.checkoutInfo?.phone || phone.value}
                          onChange={phone.onChange}
                          maxLength="15"
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
                      <div class="form-check">
                        <br></br>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckChecked"
                        />
                        <label class="form-check-label" for="flexCheckChecked">
                          MERCADO PAGO
                        </label>
                      </div>
                    
                      
                      <button
                        className="w-200 btn btn-lg btn-danger"
                        type="submit"
                      >
                        CONFIRMAR
                      </button>
                    </form>
                    <br />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="col-sm-1 ">
            <span></span>
          </div>
          <div className="col-sm-4 ">
            <div
              className="card border border-dark shadow-0 text-right "
              style={{ minHeight: "400px", backgroundColor: "" }}
            >
              <div class="card-body">
                <h5 class="card-title">Checkout</h5>
                <p class="card-text">
                  Productos:
                  {cart.items.map((cartItem) => (
                    <div>
                      <p className="text-muted">
                        {cartItem.name} {priceFormat.format(cartItem.price)}
                      </p>
                    </div>
                  ))}
                </p>
                <p class="card-text">
                  Número de celular: <p className="text-muted">{phone.value}</p>
                </p>
                <p class="card-text">
                  Método de envío:{" "}
                  <p className="text-muted">Entrega a domicilio.</p>
                </p>
                <p class="card-text">
                  Dirección: <p className="text-muted">{direction.value}</p>
                </p>
                <p class="card-text">
                  Método de pago:{" "}
                  <p className="text-muted">Tarjeta de crédito.</p>
                </p>
                <hr />
                <p>
                  <strong>Total:</strong>
                </p>
                <h4>{priceFormat.format(cart.total)}</h4>
                <hr />

                <button type="button" class="btn  buyButton shadow-0">
                  {user ? (
                    <Link to="/checkout">
                      {" "}
                      <strong>Dummie compra</strong>
                    </Link>
                  ) : (
                    <Link to="/login">
                      <strong>Dummie compra</strong>
                    </Link>
                  )}
                </button>
              </div>
              <div class="card-footer">
                <Link to="/allproducts">Seguir comprando.</Link>
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
