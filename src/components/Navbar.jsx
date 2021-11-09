import React from "react";

const Navbar = () => {
  return (
    <div>
      <section class="header-main border-bottom">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-3 col-sm-4 col-md-4 col-5">
              <a href="http://bootstrap-ecommerce.com" class="brand-wrap mb-0">
                <img
                  class="logo"
                  src="bootstrap-ecommerce-html/images/logo.png"
                />
              </a>
            </div>
            <div class="col-lg-4 col-xl-5 col-sm-8 col-md-4 d-none d-md-block">
              <form action="#" class="search">
                <div class="input-group w-100">
                  <input
                    type="text"
                    class="form-control"
                    style={{ width: "55%" }}
                    placeholder="Search"
                  />
                  <div class="input-group-append">
                    <button class="btn btn-primary" type="submit">
                      <i class="fa fa-search"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div class="col-lg-5 col-xl-4 col-sm-8 col-md-4 col-7">
              <div class="d-flex justify-content-end">
                <a href="#" class="widget-header mr-3">
                  <div class="icon">
                    <i class="icon-sm rounded-circle border fa fa-shopping-cart"></i>
                    <span class="notify">0</span>
                  </div>
                </a>
                <a href="#" class="widget-header mr-3">
                  <div class="icon">
                    <i class="icon-sm rounded-circle border fa fa-heart"></i>
                  </div>
                </a>

                <div class="widget-header dropdown">
                  <a
                    href="#"
                    data-toggle="dropdown"
                    class="dropdown-toggle"
                    data-offset="20,10"
                  >
                    <div class="icon icon-sm rounded-circle border ">
                      <i class="fa fa-user"></i>
                    </div>
                    <span class="sr-only">Profile actions</span>
                  </a>
                  <div class="dropdown-menu dropdown-menu-right">
                    <a class="dropdown-item" href="#">
                      Profile setting
                    </a>
                    <a class="dropdown-item" href="#">
                      My orders
                    </a>
                    <hr class="dropdown-divider" />
                    <a class="dropdown-item" href="#">
                      Log out
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <nav class="navbar navbar-expand-md navbar-main border-bottom">
        <div class="container">
          <form class="d-md-none my-2">
            <div class="input-group">
              <input
                type="search"
                name="search"
                class="form-control"
                placeholder="Search"
                required=""
              />
              <div class="input-group-append">
                <button type="submit" class="btn btn-secondary">
                  {" "}
                  <i class="fas fa-search"></i>{" "}
                </button>
              </div>
            </div>
          </form>

          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#dropdown6"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="dropdown6">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="http://example.com"
                  data-toggle="dropdown"
                >
                  {" "}
                  All categories
                </a>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="page-category.html">
                    Smartphones
                  </a>
                  <a class="dropdown-item" href="page-category.html">
                    Digital products
                  </a>
                </div>
              </li>
              <li class="nav-item">
                {" "}
                <a class="nav-link" href="page-deal.html">
                  Hot deals
                </a>{" "}
              </li>
              <li class="nav-item">
                {" "}
                <a class="nav-link" href="page-blog.html">
                  Markets
                </a>{" "}
              </li>
              <li class="nav-item">
                {" "}
                <a class="nav-link" href="page-blog.html">
                  Blog
                </a>{" "}
              </li>
            </ul>

            <ul class="navbar-nav">
              <li class="nav-item">
                <a href="#" class="nav-link">
                  My items
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="btn btn-primary ml-md-4">
                  <i class="fa fa-plus"></i> Post item{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
