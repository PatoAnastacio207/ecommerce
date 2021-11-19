import React, { useState, useEffect } from "react";
import AdminProduct from "./AdminProduct";
import { useParams } from "react-router-dom";
import axios from "axios"

const ProductManager = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(async () => {
    try {
      const { data } = await axios.get(`/api/products/id/${id}`);
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return <AdminProduct product={product} />;
};

export default ProductManager;
