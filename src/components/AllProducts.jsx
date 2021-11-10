import React, { useState, useEffect } from "react";
import axios from 'axios'

const AllProducts = function () {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('/api/products')
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
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don’t simply skip over it entirely.
            </p>
            <p>
              <a href="#" class="btn btn-primary my-2">
                Main call to action
              </a>
              <a href="#" class="btn btn-secondary my-2">
                Secondary action
              </a>
            </p>
          </div>
        </div>
      </section>

      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
            {products ? (
              products.map((data) => (<div class="col">
                  <figure class="card card-product-grid card-lg">
                    <a href="#" class="img-wrap">
                      <img src={data.imgUrl} />
                    </a>
                    <figcaption class="info-wrap">
                      <p>
                        <a href="#" class="title">
                          {data.name}
                        </a>
                      </p>
                      <span class="tag">32 GB</span>{" "}
                      <span class="tag">Brand new</span>
                      <span class="tag">256 px</span>
                      <span class="tag">Water proof</span>
                    </figcaption>
                    <div class="bottom-wrap d-flex align-items-center">
                      <div class="mr-3">
                        {" "}
                        <span class="price h5">{data.price}</span>{" "}
                      </div>
                      <div class="ml-auto form-inline">
                        <select class="form-control mr-2">
                          <option>Size</option>
                          <option>XL</option>
                          <option>XS</option>
                        </select>
                        <select class="form-control mr-2">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                        </select>
                        <a href="#" class="btn btn-primary">
                          <i class="fa fa-shopping-cart"></i>
                        </a>
                      </div>
                    </div>
                  </figure>
                </div>))
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
