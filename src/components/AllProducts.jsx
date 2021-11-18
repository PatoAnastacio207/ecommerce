import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import AdminSidebar from './AdminSidebar'


const AllProducts = function () {
  const [products, setProducts] = useState([]);
  const [urlAdmin, setUrlAdmin] = useState(false);

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
    <div className={urlAdmin ? ("row") : ('container-fluid')}>
      {urlAdmin ? (
      <>
      <div className="col-sm-2">
        < AdminSidebar />
    </div>
    <div className="col-sm-1">
        <span></span>
    </div>
    </>
      ) : (null)}
    <main className={urlAdmin ? ("col-sm-9") : (null)}>
    {!urlAdmin ? (
      <section class="py-5 text-center container">
        <div class="row py-lg-5">
          <div class="col-lg-6 col-md-8 mx-auto">
            <h1 class="fw-light titleNoMain">Our dummie products</h1>     
          </div>
        </div>
      </section>)
      : (null) }

      <div className="album py-5">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
            {products ? (
              products.map((data) => (
                <ProductCard key={data._id} product={data} admin={urlAdmin} />
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
