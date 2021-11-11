import React, { useState, useEffect } from "react";
import axios from 'axios'
import { useParams } from "react-router-dom"


const SingleProduct = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams()

  useEffect(() => {
    axios.get(`/api/products/id/${id}`)
      .then(({ data }) => setProduct(data))
  }, [])
  
  const priceOptions = { style: 'currency', currency: 'USD' };
  const priceFormat = new Intl.NumberFormat('en-US', priceOptions);

  return (
    <div>
    {product ?
      (
        <div className="d-flex justify-content-evenly" style={{margin: "5rem", marginBottom: "0", padding: "2rem"}}>
          <div style={{border: " 1px solid #000"}} style={{ maxWidth: "50%", height: "auto"}}>
            <img src={product.imgUrl} alt={product.name}/>
          </div>
          <div style={{ width: "50%", padding: "10px"}}>
            <h2>{product.name}</h2>
            <hr style={{margin: "5px"}}/>
            <p><b>Descrition:</b></p>
            <p>{product.description}</p>
            <hr style={{margin: "5px"}}/>
            <p>{priceFormat.format(product.price)}</p>
            <a className="btn btn-light" style={{marginRight: "15px"}}>
                Buy now
            </a>
            <a className="btn btn-dark" style={{marginRight: "15px"}}>
                Add to cart
            </a>
            <a className="btn btn-success">
                Favorites
            </a>
          </div>
        </div>
      ) : (<span></span>) }
    </div>
  );
};

export default SingleProduct;
