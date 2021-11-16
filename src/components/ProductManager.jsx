import React, { useState, useEffect } from "react";
import AdminProduct from "./AdminProduct";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductManager = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios
      .get(`/api/products/id/${id}`)
      .then((res) => res.data)
      .then((product) => {
        setProduct(product);
      })
      .catch((error) => console.log(error));
  }, [window.location.pathname]);

  return <AdminProduct product={product} />;
};

export default ProductManager;
