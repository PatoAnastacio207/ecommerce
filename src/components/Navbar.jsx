import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "../features/userSlice";
import { GiSkateboard } from "react-icons/gi";
import axios from "axios";

const Navbar = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = () => {
    console.log("logout attempt...")
    axios
    .post("/api/auth/logout")
    .then((res) => dispatch(logout(res.data)))
    .then(() => {
      console.log("logged out")
    })
    .catch ((err) => console.log(err))
    }

  useEffect(() => {
    console.log(`fetching user...`);
    axios
      .get("/api/auth/logged")
      .then((res) => dispatch(login(res.data)))
      .then((user) => {
        console.log(`found user ${user.payload.email}`);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(user)

  return (
    <div>
      
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark " style={{fontFamily: "Bebas Neue",fontSize:"150%"}}>
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <a class="navbar-brand mt-2 mt-lg-0" href="/">
              <GiSkateboard />
            </a>

            <ul class="navbar-nav me-auto mb-2 mb-lg-0" >
              <li class="nav-item">
                <a class="nav-link" href="#">
                 sk8 4 dummies
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#our-story">
                  our story
                </a>
              </li>
        
            </ul>
          </div>
          <div class="d-flex align-items-center">
            <form class="d-flex input-group form-control-lg w-auto" >
              <input
                type="search"
                class="form-control rounded"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="search-addon"
               
              />
              <span
                class="input-group-text text-white border-0"
                id="search-addon"
              >
                <i class="fas fa-search"></i>
              </span>
            </form>
          </div>
          <div class="d-flex align-items-center">
            <Link class="text-reset me-3" to="/cart">
              <i class="fas fa-shopping-cart text-white"></i>
            </Link>

            {user?.email ? (
              <a class="text-reset me-3" href="#">
                <i class="fas fa-heart text-white"></i>
              </a>
            ) : (
              <span></span>
            )}

            <a
              class="dropdown-toggle d-flex align-items-center hidden-arrow"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="fas fa-user-alt text-white"></i>
            </a>
            {!user?.email ? (
              <ul
                class="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <Link class="dropdown-item" to="/register">
                    Register
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="/login">
                    Login
                  </Link>
                </li>
              </ul>
            ) : user.isAdmin ? (
              <ul
                class="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <Link class="dropdown-item" to='/' onClick={handleLogout}>
                    Logout
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to='/admin'>
                    <strong>
                    Admin

                    </strong>
                  </Link>
                </li>
              </ul>
            ) : ( <ul
              class="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <li>
                <Link class="dropdown-item" to='/' onClick={handleLogout}>
                  Logout
                </Link>
              </li></ul>)}
          </div>
        </div>
      </nav>
      <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{ fontFamily: "Bebas Neue", fontSize:"150%", margin:"5px"}}>
        <div class="container justify-content-around ">
          <div class="d-flex">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              
              <li class="nav-item">
                <Link class="nav-link text-black" to="/category/skates"  >
                  Skates
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link text-black" to="/category/longboards">
                  Longboards
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link text-black" to="/category/clothes">
                  Clothes
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link text-black" to="/allproducts">
                  All Products
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
