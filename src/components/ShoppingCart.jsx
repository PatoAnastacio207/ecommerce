import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import imagen1 from "../assets/imagen1.png"
import CartProductCard from "./CartProductCard";
const ShoppingCart = () => {
  const priceOptions = { style: 'currency', currency: 'USD' };
  const priceFormat = new Intl.NumberFormat('en-US', priceOptions);

  const [cart, setCart] = useState({ items: [], total: 0 })

  useEffect(() => {
    // Devuelve un array de objectos con el id y la cantidad de cada item
    console.log("useEffect")
    axios.get('/api/cart')
      .then(({data}) => {
        const itemsIds = data.map(item => item._id)
        return axios.post('/api/products/array', itemsIds)
      })
      .then(({data}) => {
        var total = data.reduce((previo, current) => {
          console.log("REDUCER", previo, current)
          return previo ? current.price + previo : current.price
        }, 0)
        setCart({ items: data, total: total })
      })
      .catch(() => console.log("ERROR"))
  }, [])

  return (
    <section className="section-content padding-y">
      <div className="container-fluid">
        <br />
        <br />
        <h2 className="fw-light titleNoMain"><img src={imagen1}alt="" style={{width:"10%"}}/>Shopping Cart</h2>
        {console.log(cart)}
        <br />
        <div className="row container-fluid" style={{fontFamily:"Bebas Neue"}}>
          <div className="col-sm-7">
            {
              cart.items.length ? (
                cart.items.map(cartItem => <><CartProductCard product={cartItem} setCart={setCart} cart={cart}/> <br /></>)
              ) : <p>Tu carrito esta vacio! Compra gil</p>
            }
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
                <h4>{priceFormat.format(cart.total)}</h4>
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
