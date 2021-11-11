import { Link } from "react-router-dom"

function ProductCard ({ product }) {
    const priceOptions = { style: 'currency', currency: 'USD' };
    const priceFormat = new Intl.NumberFormat('en-US', priceOptions);
    const urlRedirect = `/product/${product._id}`
    return (
        <div className="col">
                  <div className="card">
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
                      <p className="card-text text-muted">{product.category.name} / {product.category.type}</p>
                        <div className="d-flex justify-content-evenly">
                            {priceFormat.format(product.price)}                       
                            <a className="btn btn-dark">
                                Add to cart
                            </a>
                        </div>
                      
                    </div>
                  </div>
                </div>
    )
}

export default ProductCard