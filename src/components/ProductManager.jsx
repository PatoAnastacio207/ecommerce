import React, { useState, useEffect } from "react";
import AdminProduct from "./AdminProduct";
import { useParams } from "react-router-dom";
import axios from "axios"

const ProductManager = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(async () => {
    axios.get(`/api/products/id/${id}`)
      .then(({data}) => setProduct(data))
      .catch(console.error)
  }, []);

  return <AdminProduct product={product} />;
};

export default ProductManager;
