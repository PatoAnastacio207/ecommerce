import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

const AllProducts = function () {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("/api/products")
      .then((res) => res.data)
      .then((product) => {
        setProducts(product);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <main>
      <section class="py-5 text-center container">
        <div class="row py-lg-5">
          <div class="col-lg-6 col-md-8 mx-auto">
            <h1 class="fw-light">Album example</h1>
            <p class="lead text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              soluta aut distinctio sequi sunt iure alias at. Id, recusandae
              quia. Rerum est nulla doloremque voluptatem sint quia incidunt
              quidem labore?
            </p>
          </div>
        </div>
      </section>

      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
            {products ? (
              products.map((data) => <ProductCard key={data._id} product={data} />)
            ) : (
              <span></span>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default AllProducts;
