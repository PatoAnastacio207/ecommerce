import axios from "axios"
import React, {useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import ProductCard from "./ProductCard";

const Category = () =>{
    const {name} = useParams()
    const [products,setProducts]=useState()
    useEffect(()=>{
        axios.get(`/api/products/category/${name}`)
        .then(all=>setProducts(all.data))
    },[name])
  
    return(
        <main>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light titleNoMain">Our dummie {name}</h1>
            <p className="lead text-muted">
              
            </p>
          </div>
        </div>
      </section>

      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
            {products ? (
              products.map((data) => <ProductCard key={data._id} product={data} />)
            ) : (
              <span></span>
            )}
          </div>
        </div>
      </div>
    </main>
    )
}
export default Category