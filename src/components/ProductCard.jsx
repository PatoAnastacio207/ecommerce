import { Link } from "react-router-dom"
import axios from "axios";

function ProductCard ({ product }) {
    const priceOptions = { style: 'currency', currency: 'USD' };
    const priceFormat = new Intl.NumberFormat('en-US', priceOptions);
    const urlRedirect = `/product/${product._id}`

    const handleCart = (e) => {
      e.preventDefault();
      axios
        .post('/api/cart/add', {_id: product._id, quantity: +1})
        .then(res => res.data)
        .catch(err => console.log(err))
      console.log(`added`)
    }
    return (
        <div className="col">
                  <div className="card"  style={{fontFamily:"Bebas Neue"}}>
                  <Link to={urlRedirect}>
                      {console.log(product.imgUrl)}
                    <div className="bg-image hover-overlay ripple">
                      <img src={product.imgUrl} className="img-fluid" />
                      <a href="/">
                        <div
                          className="mask"
                        ></div>
                      </a>
                    </div>
                    </Link>
                    <div className="card-body">
                    <Link to={urlRedirect}><h5 class="card-title">{product.name}</h5></Link>
                      <p className="card-text text-muted">{product.category?.name} / {product.category?.type}</p>
                        <div className="d-flex justify-content-evenly">
                            {priceFormat.format(product.price)}                       
                            <button className="btn btn-dark shadow-0" onClick={handleCart}>
                               <i className="fas fa-shopping-cart"></i> 
                            </button>
                        </div>
                      
                    </div>
                  </div>
                </div>
    )
}

export default ProductCard