import React, { useEffect, useState } from "react";
import axios from "axios";
import BuildCard from './BuildCard'

const BuildList = ({ parts, position }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
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
                    products.map((data) => <BuildCard product={data} />)
                  ) : (
                    <span></span>
                  )}
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
