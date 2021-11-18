import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import ProductCard from "./ProductCard";

const FavList = () => {
  const user = useSelector(selectUser);
  const [favs, setFavs] = useState([]);


  useEffect(() => {
    axios
      .post(`/api/products/array`, { items: user?.favorites })
      .then(({ data }) => setFavs(data))
      .catch((err) => console.log(err));
  }, [user]);

  console.log("HOLAAAAAAAAA", favs);

  return (
    <div className="container-fluid">
      <main>
        <section className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light titleNoMain">My favorites</h1>
              </div>
              <div className="album py-5">
                <div className="container">
                  <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
                    {favs ? (
                      favs.map((data) => (
                        <ProductCard
                          key={data._id}
                          product={data}
                          favs={true}
                        />
                      ))
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

export default FavList;
