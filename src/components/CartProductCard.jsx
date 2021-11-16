import axios from "axios";
import { useInput } from "../hooks/custom-hooks";
import { selectCart, buy, borrar } from "../features/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function CartProductCard({ product }) {
  const cart = useSelector(selectCart);
  const priceOptions = { style: "currency", currency: "USD" };
  const priceFormat = new Intl.NumberFormat("en-US", priceOptions);
  const cantidad = useInput("cantidad");
  const dispatch = useDispatch();

  const handleDelete = () => {
    // Modificar el cart
    const cartSinItem = cart.items.filter((item) => item._id !== product._id);
    axios
      .delete("/api/cart/remove", { data: { _id: product._id } })
      .then(() =>
        dispatch(
          borrar({ items: cartSinItem, total: cart.total - product.price })
        )
      );
  };

  return (
    <div className="row border border-dark rounded">
      <div className="col-sm-8">
        <div className="card shadow-0">
          <div className="card-body">
            <div className="d-flex justify-content-between p-md-1">
              <div className="d-flex flex-row">
                <div className="align-self-center">
                  <img
                    src={product.imgUrl}
                    alt=""
                    className="rounded"
                    style={{ height: "100px", width: "100px" }}
                  />
                </div>
                <div>
                  <h4>{product.name}</h4>
                  <p className="mb-0">Description</p>
                </div>
              </div>
              <div className="align-self-center">
                <h2 className="h1 mb-0">
                  {priceFormat.format(product.price * (cantidad.value || 1))}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-2">
        <div className="card shadow-0">
          <div className="card-body container-fluid">
            <div className="d-flex justify-content-between p-md-1">
              <div className="d-flex flex-row">
                <div className="align-self-center" style={{ height: "100px" }}>
                  <p>Cantidad:</p>
                  <select
                    className="form-control-lg"
                    onChange={cantidad.onChange}
                    defaultValue={product.quantity}
                  >
                    <option value={(cantidad.value = 1)}>1</option>
                    <option value={(cantidad.value = 2)}>2</option>
                    <option value={(cantidad.value = 3)}>3</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-2">
        <div className="card shadow-0 text-center">
          <div className="card-body container-fluid">
            <div className="d-flex justify-content-between p-md-1">
              <div className="text-center">
                <button className="btn btn-danger shadow-0">
                  <i className="fas fa-heart"></i>
                </button>
                <br />
                <br />
                <button
                  onClick={handleDelete}
                  className="btn btn-dark shadow-0"
                >
                  <i className="fas fa-trash"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartProductCard;
