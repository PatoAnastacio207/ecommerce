import React from "react";
import { Link } from "react-router-dom";
import imagen1 from "../assets/imagen1.png"
const ShoppingCart = () => {
  return (
    <section className="section-content padding-y">
      <div className="container-fluid">
        <br />
        <br />
        <h2 className="fw-light titleNoMain"><img src={imagen1}alt="" style={{width:"10%"}}/>Shopping Cart</h2>
        
        <br />
        <div className="row container-fluid" style={{fontFamily:"Bebas Neue"}}>
          <div className="col-sm-7">
            <div className="row border border-dark rounded">
              <div className="col-sm-8">
                <div className="card shadow-0">
                  <div className="card-body">
                    <div className="d-flex justify-content-between p-md-1">
                      <div className="d-flex flex-row">
                        <div className="align-self-center">
                          <img
                            src="https://http2.mlstatic.com/D_NQ_NP_790324-MLA28103184162_092018-O.jpg"
                            alt=""
                            className="rounded"
                            style={{ height: "100px", width: "100px" }}
                          />
                        </div>
                        <div>
                          <h4>Skate Element</h4>
                          <p className="mb-0">Monthly blog posts</p>
                        </div>
                      </div>
                      <div className="align-self-center">
                        <h2 className="h1 mb-0">$18000</h2>
                        <p className="mb-0 text-muted">Per unit.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-2">
                <div className="card shadow-0">
                  <div className="card-body container-fluid">
                    <div className="d-flex justify-content-between p-md-1">
                      <div className="d-flex flex-row">
                        <div
                          className="align-self-center"
                          style={{ height: "100px" }}
                        >
                          <p>Cantidad:</p>
                          <select className="form-control-lg">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-2">
                <div className="card shadow-0 text-center">
                  <div className="card-body container-fluid">
                    <div className="d-flex justify-content-between p-md-1">
                      <div className="text-center">
                        <button className="btn btn-danger shadow-0">
                          <i className="fas fa-heart"></i>
                        </button>
                        <br />
                        <br />
                        <button className="btn btn-dark shadow-0">
                          <i className="fas fa-trash"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="row border border-dark rounded">
              <div className="col-sm-8">
                <div className="card shadow-0">
                  <div className="card-body">
                    <div className="d-flex justify-content-between p-md-1">
                      <div className="d-flex flex-row">
                        <div className="align-self-center">
                          <img
                            src="https://d3ugyf2ht6aenh.cloudfront.net/stores/001/162/180/products/s21-f474caed75f322c8b316274084294823-1024-1024.jpg"
                            alt=""
                            className="rounded"
                            style={{ height: "100px", width: "100px" }}
                          />
                        </div>
                        <div>
                          <h4>Skate Element</h4>
                          <p className="mb-0">Monthly blog posts</p>
                        </div>
                      </div>
                      <div className="align-self-center">
                        <h2 className="h1 mb-0">$14000</h2>
                        <p className="mb-0 text-muted">Per unit.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-2">
                <div className="card shadow-0">
                  <div className="card-body container-fluid">
                    <div className="d-flex justify-content-between p-md-1">
                      <div className="d-flex flex-row">
                        <div
                          className="align-self-center"
                          style={{ height: "100px" }}
                        >
                          <p>Cantidad:</p>
                          <select className="form-control-lg">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col-sm-2">
                <div className="card shadow-0 text-center">
                  <div className="card-body container-fluid">
                    <div className="d-flex justify-content-between p-md-1">
                      <div className="text-center">
                        <button className="btn btn-danger shadow-0">
                          <i className="fas fa-heart"></i>
                        </button>
                        <br />
                        <br />
                        <button className="btn btn-dark shadow-0">
                          <i className="fas fa-trash"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="row border border-dark rounded">
              <div className="col-sm-8">
                <div className="card shadow-0">
                  <div className="card-body">
                    <div className="d-flex justify-content-between p-md-1">
                      <div className="d-flex flex-row">
                        <div className="align-self-center">
                          <img
                            src="https://cdn.shopify.com/s/files/1/2996/5068/products/Element-Major-League-Tie-Dye-8.25_quot_-tabla-de-skate--_296146.jpg"
                            alt=""
                            className="rounded"
                            style={{ height: "100px", width: "100px" }}
                          />
                        </div>
                        <div>
                          <h4>Skate Element</h4>
                          <p className="mb-0">Monthly blog posts</p>
                        </div>
                      </div>
                      <div className="align-self-center">
                        <h2 className="h1 mb-0">$12000</h2>
                        <p className="mb-0 text-muted">Per unit.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-2">
                <div className="card shadow-0">
                  <div className="card-body container-fluid">
                    <div className="d-flex justify-content-between p-md-1">
                      <div className="d-flex flex-row">
                        <div
                          className="align-self-center"
                          style={{ height: "100px" }}
                        >
                          <p>Cantidad:</p>
                          <select className="form-control-lg">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-2">
                <div className="card shadow-0 text-center">
                  <div className="card-body container-fluid">
                    <div className="d-flex justify-content-between p-md-1">
                      <div className="text-center">
                        <button className="btn btn-danger shadow-0">
                          <i className="fas fa-heart"></i>
                        </button>
                        <br />
                        <br />
                        <button className="btn btn-dark shadow-0">
                          <i className="fas fa-trash"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-1 ">
            <span></span>
          </div>
          <div className="col-sm-4 " >
            <div
              className="card border border-dark shadow-0 text-right "
              style={{ minHeight: "400px", backgroundColor:""}}
            >
              <div class="card-body" >
                <h5 class="card-title">Checkout</h5>

                <p class="card-text">
                  Método de envío:{" "}
                  <p className="text-muted">Entrega a domicilio.</p>
                </p>
                <p class="card-text">
                  Dirección:{" "}
                  <p className="text-muted">
                    Avenida siempre viva etc etc Springfild.
                  </p>
                </p>
                <p class="card-text">
                  Método de pago:{" "}
                  <p className="text-muted">Tarjeta de crédito.</p>
                </p>
                <hr />
                <p>
                  <strong>Total:</strong>
                </p>
                <h4>$44000</h4>
                <hr />

                <button type="button" class="btn  buyButton shadow-0">
                  <strong>Dummie compra</strong>
                </button>
              </div>
              <div class="card-footer">
                <Link to="/">
                Seguir comprando.
                </Link>
                </div>
            </div>
          </div>
        </div>
      </div>
      <br/><br/>
      
    </section>
  );
};

export default ShoppingCart;
