import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import imagen1 from "../assets/imagen1.png";
import CartProductCard from "./CartProductCard";
import imagen from "../assets/caballoGrinder.png";

import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { selectCart, buy } from "../features/cartSlice";
import Login from "./Login";

const ShoppingCart = () => {
  const priceOptions = { style: "currency", currency: "USD" };
  const priceFormat = new Intl.NumberFormat("en-US", priceOptions);
  const user = useSelector(selectUser);

  const dispatch = useDispatch();
  const cart = useSelector(selectCart);

  useEffect(() => {
    // Devuelve un array de objectos con el id y la cantidad de cada item
    axios
      .get("/api/cart")
      .then(({ data }) => {
        const itemsIds = data.map((item) => item._id);
        return axios.post("/api/products/array", { items: itemsIds });
      })
      .then(({ data }) => {
        var total = data.reduce((previo, current) => {
          return previo ? current.price + previo : current.price;
        }, 0);
        dispatch(buy({ items: data, total: total }));
      })
      .catch(() => console.log("ERROR"));
  }, []);

  return (
    <section className="section-content padding-y">
      <div className="container-fluid">
        <br />
        <br />
        <h2 className="fw-light titleNoMain">
          <img src={imagen1} alt="" style={{ width: "10%" }} />
          Shopping Cart
        </h2>
        <br />
        <div
          className="row container-fluid"
          style={{ fontFamily: "Bebas Neue" }}
        >
          <div className="col-sm-7">
            {cart.items?.length ? (
              cart.items.map((cartItem) => (
                <>
                  <CartProductCard
                    product={cartItem}
                    // setCart={setCart}
                    cart={cart}
                  />{" "}
                  <br />
                </>
              ))
            ) : (
              <div className="container col-sm-7">
                <h1>Hey dummie! Tu carrito está vacío</h1>
                <br />
                <img
                  src={imagen}
                  style={{ maxWidth: "60%", marginLeft: "60px" }}
                />
              </div>
            )}
          </div>
          <div className="col-sm-1 ">
            <span></span>
          </div>
          <div className="col-sm-4 ">
            <div
              className="card border border-dark shadow-0 text-right "
              style={{ backgroundColor: "" }}
            >
              <div class="card-body">
                <h5 class="card-title">Total:</h5>
          
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

export default ShoppingCart;
