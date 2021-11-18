import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../features/cartSlice";
import { selectUser, updateData } from "../features/userSlice";

function ProductCard({ product, admin, favs }) {
  const user = useSelector(selectUser);
  const priceOptions = { style: "currency", currency: "USD" };
  const priceFormat = new Intl.NumberFormat("en-US", priceOptions);
  const urlRedirect = `/product/${product._id}`;
  const dispatch = useDispatch();

  const [deleted, setDeleted] = useState(false);

  const handleDelete = (e) => {
    e.preventDefault();
    axios
      .delete(`/api/products/id/${product._id}`)
      .then((res) => {
        setDeleted(true);
        return res.data;
      })
      .catch((err) => console.error(err));
  };

  const removeFavorite = async (e) => {
    e.preventDefault();
    await axios.delete(`/api/users/favorites/remove/${product._id}`);
    const res = await axios.get("/api/auth/logged");
    dispatch(updateData(res.data));
  };

  const handleCart = (e) => {
    e.preventDefault();
    axios
      .post("/api/cart/add", { _id: product._id, quantity: 1 })
      .then(() => dispatch(add({ product, quantity: 1 })))
      .catch((err) => console.error(err));
  };

  return (
    <>
      {deleted ? (
        <></>
      ) : (
        <div className="col">
          <div
            className="card hover-shadow border"
            style={{ fontFamily: "Bebas Neue" }}
          >
            <Link to={urlRedirect}>
              <div className="bg-image hover-overlay ripple ">
                <img src={product.imgUrl} className="img-fluid" />
                <a href="/">
                  <div className="mask"></div>
                </a>
              </div>
            </Link>
            <div className="card-body">
              <Link to={urlRedirect} className="link-dark text-decoration-none">
                <h5 class="card-title">{product.name}</h5>
              </Link>
              <p className="card-text text-muted">
                {product.category?.name} / {product.category?.type}
              </p>
              <div className="d-flex justify-content-between">
                <h4>{priceFormat.format(product.price)}</h4>

                {admin ? (
                  <div class="btn-toolbar" role="toolbar">
                    <div class="btn-group me-2 shadow-0" role="group">
                      <Link to={`/admin/product/${product._id}`}>
                        <button className="btn btn-info shadow-0">
                          <i className="fas fa-edit"></i>
                        </button>
                      </Link>
                    </div>
                    <div class="btn-group shadow-0" role="group">
                      <button
                        className="btn btn-danger shadow-0"
                        onClick={handleDelete}
                      >
                        <i className="fas fa-trash"></i>
                      </button>
                    </div>
                  </div>
                ) : favs ? (
                  <button
                    className="btn btn-danger shadow-0"
                    onClick={removeFavorite}
                  >
                    <i className="fas fa-ban"></i>
                  </button>
                ) : (
                  <button
                    className="btn btn-dark shadow-0"
                    onClick={handleCart}
                  >
                    <i className="fas fa-shopping-cart"></i>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductCard;
