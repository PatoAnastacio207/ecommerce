import React, { useEffect, useState } from "react";
import axios from "axios";
import BuildCard from './BuildCard'
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectCart, add } from "../features/cartSlice";

const BuildList = ({ parts, position, setPosition }) => {
  const history = useHistory()
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch()
  
  const handleBuild = async () => {
    try {
      const arr = parts.map(({name}) => JSON.parse(localStorage.getItem(name)))
      const promises = arr.map((product, index) => {
        if (index !== 7) {
          dispatch(add({quantity: 1, product}))
          return axios.post(`/api/cart/add`, {quantity: 1, _id: product._id})
        }
      })
      const result = await Promise.all(promises)
      localStorage.clear()
      history.push('/cart')
    } catch(error) { console.error(error) }
  }

  useEffect(() => {
    setProducts([])
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
        <section className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto"></div>
            <div className="album py-5">
              <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
                  {products ? (
                    products.map((data) => <BuildCard product={data} position={position} setPosition={setPosition} />)
                  ) : (
                    <span></span>
                  )}{position === 7 ? (
                    <button onClick={handleBuild}>
                      puto
                    </button>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default BuildList;
