import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "../features/userSlice";
import { GiSkateboard } from "react-icons/gi";
import axios from "axios";
import { selectCart, populate, empty } from "../features/cartSlice";

const Navbar = () => {
  const cart = useSelector(selectCart);

  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  const handleLogout = () => {
    axios.delete("/api/cart/clear");
    axios
      .post("/api/auth/logout")
      .then((res) => dispatch(logout(res.data)))
      .then(() => dispatch(empty(cart)))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    axios
      .get("/api/auth/logged")
      .then((res) => dispatch(login(res.data)))
      .catch(() => {});
    axios
      .get("/api/cart/")
      .then(({ data }) => dispatch(populate(data)))
      .catch(() => {});
  }, []);

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark "
        style={{ fontFamily: "Bebas Neue", fontSize: "150%" }}
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <a className="navbar-brand mt-2 mt-lg-0" href="/">
              <GiSkateboard />
            </a>

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item nav-link dropdown-item-dark">
                sk8 4 dummies
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#our-story">
                  our story
                </a>
              </li>
            </ul>
          </div>
          <div className="d-flex align-items-center"></div>
          <div className="d-flex align-items-center">
            <Link className="text-reset me-3" to="/cart">
              <i className="fas fa-shopping-cart text-white"></i>
              <span
                className="badge rounded-pill badge-notification bg-danger"
                style={{ fontSize: "60%" }}
              >
                {cart.items.length || null}
              </span>
            </Link>

            {user?.email ? (
              <Link className="text-reset me-3" to="/myfavs">
                <i className="fas fa-heart text-white"></i>
              </Link>
            ) : (
              <span></span>
            )}

            {!user?.email ? (
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li>
                  <Link
                    className="nav-item nav-link dropdown-item-dark"
                    to="/login"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-item nav-link dropdown-item-dark"
                    to="/register"
                  >
                    Register
                  </Link>
                </li>
              </ul>
            ) : user.isAdmin ? (
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li>
                  <Link
                    className="nav-item nav-link dropdown-item-dark"
                    to="/admin"
                  >
                    <strong>Admin</strong>
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-item nav-link dropdown-item-dark"
                    to="/"
                    onClick={handleLogout}
                  >
                    Logout
                  </Link>
                </li>
              </ul>
            ) : (
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li>
                  <Link
                    className="nav-item nav-link dropdown-item-dark"
                    to="/myProfile"
                  >
                    <strong>
                      {user.firstName} {user.lastName}
                    </strong>
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-item nav-link dropdown-item-dark"
                    to="/"
                    onClick={handleLogout}
                  >
                    Logout
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        style={{ fontFamily: "Bebas Neue", fontSize: "150%", margin: "5px" }}
      >
        <div className="container justify-content-around ">
          <div className="d-flex">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link text-black" to="/category/skates">
                  Skates
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-black" to="/category/longboards">
                  Longboards
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-black" to="/category/clothes">
                  Clothes
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-black" to="/allproducts">
                  All Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-warning" to="/buildyourown">
                  Build your own
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
