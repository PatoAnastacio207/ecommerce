import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import AdminSidebar from "./AdminSidebar";

const AllProducts = function () {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [urlAdmin, setUrlAdmin] = useState(false);

  const handleChange = (e, setValue) => {
    setValue(e.target.value);
  };

  const handleSearch = (e) => {
    console.log(search);
    e.preventDefault();
    if (search) {
      axios
        .get(`/api/products/search/${search}`)
        .then((res) => res.data)
        .then((product) => {
          console.log(product);
          setProducts(product);
        })
        .catch((error) => console.log(error));
    } else {
      axios
        .get("/api/products")
        .then((res) => res.data)
        .then((product) => {
          setProducts(product);
        })
        .catch((error) => console.log(error));
    }
  };

  useEffect(() => {
    window.location.pathname === "/admin/products"
      ? setUrlAdmin(true)
      : setUrlAdmin(false);
    axios
      .get("/api/products")
      .then((res) => res.data)
      .then((product) => {
        setProducts(product);
      })
      .catch((error) => console.log(error));
  }, [window.location.pathname]);

  return (
    <>
      <div className={urlAdmin ? "row" : "container-fluid"}>
        {urlAdmin ? (
          <>
            <div className="col-sm-2">
              <AdminSidebar />
            </div>
            <div className="col-sm-1">
              <span></span>
            </div>
          </>
        ) : null}
        <main className={urlAdmin ? "col-sm-9" : null}>
          {!urlAdmin ? (
            <section className="py-5 text-center container">
              <div className="row py-lg-5">
                <div className="col-lg-6 col-md-8 mx-auto">
                  <h1 className="fw-light titleNoMain">Our dummie products</h1>
                </div>
                <form onSubmit={handleSearch}>
                  <div
                    className="input-group rounded container d-flex justify-content-center"
                    style={{ width: "40%" }}
                  >
                    <input
                      style={{ fontFamily: "Bebas Neue" }}
                      type="text"
                      className="form-control rounded"
                      placeholder="Dummie Search"
                      aria-label="Search"
                      aria-describedby="search-addon"
                      size="75"
                      onChange={(e) => handleChange(e, setSearch)}
                    />
                    <span
                      className="input-group-text border-0"
                      id="search-addon"
                    >
                      <i className="fas fa-search"></i>
                    </span>
                  </div>
                </form>
              </div>
            </section>
          ) : (
            <form onSubmit={handleSearch}>
              <br />
              <br />
              <div
                className="input-group rounded container d-flex justify-content-center"
                style={{ width: "40%" }}
              >
                <input
                  type="text"
                  className="form-control rounded"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="search-addon"
                  size="75"
                  onChange={(e) => handleChange(e, setSearch)}
                />
                <span className="input-group-text border-0" id="search-addon">
                  <i className="fas fa-search"></i>
                </span>
              </div>
            </form>
          )}

          <div className="album py-5">
            <div className="container">
        
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
                {products ? (
                  products.map((data) => (
                    <ProductCard
                      key={data._id}
                      product={data}
                      admin={urlAdmin}
                    />
                  ))
                ) : (
                  <span></span>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default AllProducts;
