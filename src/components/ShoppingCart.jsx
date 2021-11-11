import React from "react";

const ShoppingCart = () => {
  return (
    <section class="section-content padding-y">
      <div className="container-fluid">
        <br />
        <br />
        <h2>Shopping Cart</h2>
        <br />
        <div class="row">
          <div class="col-sm-5">
            <div class="card">
              <div class="card-body">
                <div class="d-flex justify-content-between p-md-1">
                  <div class="d-flex flex-row">
                    <div class="align-self-center">
                      <img
                        src="https://http2.mlstatic.com/D_NQ_NP_790324-MLA28103184162_092018-O.jpg"
                        alt=""
                        class="rounded"
                        style={{ height: "100px" }}
                      />
                    </div>
                    <div>
                      <h4>Skate Element</h4>
                      <p class="mb-0">Monthly blog posts</p>
                    </div>
                  </div>
                  <div class="align-self-center">
                    <h2 class="h1 mb-0">$18,000</h2>
                    <p class="mb-0 text-muted">Per unit.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-2">
            <div class="card">
              <div class="card-body">
                <div class="d-flex justify-content-between p-md-1">
                  <div class="d-flex flex-row">
                    <div class="align-self-center">
                      <select className="form-control-lg" style={{ height: "100px" }}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                    </div>
                  </div>
        
                    <div class="align-self-center">
                      <button class="btn btn-danger">ey</button><br /><br />
                      <button class="btn btn-muted">ey</button>
                      
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShoppingCart;
