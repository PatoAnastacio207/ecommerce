import React, { useEffect, useState } from "react";
import axios from "axios";
import BuildCard from "./BuildCard";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectCart, add } from "../features/cartSlice";
import imagen1 from "../assets/Buildyourown.png";

const BuildList = ({ parts, position, setPosition }) => {
  const history = useHistory();
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  const handleBuild = async () => {
    try {
      const arr = parts.map(({ name }) =>
        JSON.parse(localStorage.getItem(name))
      );
      const promises = arr.map((product, index) => {
        if (index !== 7) {
          dispatch(add({ quantity: 1, product }));
          return axios.post(`/api/cart/add`, { quantity: 1, _id: product._id });
        }
      });
      const result = await Promise.all(promises);
      localStorage.clear();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setProducts([]);
    axios
      .get(`/api/products/category/skates/${parts[position].name}`)
      .then(({ data }) => {
        setProducts(data);
      })
      .catch((error) => console.log(error));
  }, [position]);

  return (
    <div className="container-fluid">
      <main>
        <div className="row">
          {products ? (
            products.map((data) => (
              <BuildCard
                product={data}
                position={position}
                setPosition={setPosition}
              />
            ))
          ) : (
            <span></span>
          )}
          {position === 7 ? (
            <div className="container">
              <div className="row">
                <div className="col-lg-4 "></div>
                <div className="col-lg-4 d-flex justify-content-center">
                  <Link
                    onClick={handleBuild}
                    className="mainButtonBuild text-decoration-none link-dark "
                    to="/cart"
                  >
                    Go to pay
                  </Link>
                </div>
              </div>
              <br />
              <br />
              <div className="row">
                <div className="col-lg-4 "></div>
                <div className="col-lg-4 d-flex justify-content-center ">
                  <Link
                    onClick={handleBuild}
                    className="mainButton  text-decoration-none link-dark"
                    to="/allproducts"
                  >
                    Keep shopping
                  </Link>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </main>
      <br />
      <br />
      <br />
    </div>
  );
};

export default BuildList;
