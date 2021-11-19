
import React from "react";
import { Link } from "react-router-dom";
import imagen1 from "../assets/imagen1.png";
import CartProductCard from "./CartProductCard";
import imagen from "../assets/caballoGrinder.png";
import Notification from "../utils/Notification"
import {  useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { selectCart } from "../features/cartSlice";


const ShoppingCart = () => {
  const priceOptions = { style: "currency", currency: "USD" };
  const priceFormat = new Intl.NumberFormat("en-US", priceOptions);
  const user = useSelector(selectUser);

  const cart = useSelector(selectCart);

  const emptyCartHandler = () => {
    Notification.errorMessage("Tu carrito esta vacio")
  }

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
                  alt="Una imagen"
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
              <div className="card-body">
                <h5 className="card-title">Total:</h5>

                <h4>{priceFormat.format(cart.total)}</h4>
                <hr />

                {user ? (
                    cart.items.length ? (<Link
                    type="button"
                    className="btn  buyButton shadow-0"
                    to="/checkout"
                    >
                      {" "}
                      <strong>Dummie compra</strong>
                    </Link>) : (
                      <button
                      type="button"
                      className="btn  buyButton shadow-0"
                      onClick={emptyCartHandler}
                      >
                      {" "}
                      <strong>Dummie compra</strong>
                      </button>
                    )
                ) : (
                  <Link
                    type="button"
                    className="btn  buyButton shadow-0"
                    to="/login?buy=true"
                  >
                    <strong>Dummie compra</strong>
                  </Link>
                )}
              </div>
              <div className="card-footer">
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
