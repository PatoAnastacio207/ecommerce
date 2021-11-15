import React from "react";
import axios from "axios";
import { useInput } from "../hooks/custom-hooks";
import AdminSidebar from './AdminSidebar'

const AdminProduct = () => {
  const name = useInput("name");
  const price = useInput("price");
  const description = useInput("description");
  const imgUrl = useInput("imgUrl");
  const inventory = useInput("inventory");
  const categoryName = useInput('categoryName')
  const categoryType = useInput('categoryType')

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/products", {
        name: name.value,
        price: price.value,
        description: description.value,
        imgUrl: imgUrl.value,
        inventory: inventory.value,
        category: {
          name: categoryName.value,
          type: categoryType.value
        }
      })
      .then((res) => res.data)
      .catch((err) => console.log(err));
  };
  return (
    <div className="row">
      <div className="col-sm-2">
        < AdminSidebar />
    </div>
    <div className="col-sm-1">
        <span></span>
    </div>
    <div className="container col-sm-9">
      <br />
      <h1>AGREGAR PRODUCTOS</h1>
      <br />
      <div className="card container">
        <br />
        <div className="card-body container">
          <form onSubmit={handleSubmit}>
            <div class="input-group mb-3">
              <span class="input-group-text col-sm-2" id="basic-addon1">
                Nombre producto
              </span>
              <input type="text" class="form-control" {...name} />
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text col-sm-2" id="basic-addon1">
                Descripción
              </span>
              <input type="text" class="form-control" {...description} />
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text col-sm-2" id="basic-addon1">
                Precio
              </span>
              <input type="number" class="form-control" {...price} />
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text col-sm-2" id="basic-addon1">
                Stock
              </span>
              <input type="number" class="form-control" {...inventory} />
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text col-sm-2" id="basic-addon1">
                Imagen
              </span>
              <input type="text" class="form-control" {...imgUrl} />
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text col-sm-2" id="basic-addon1">
                Nombre Categoría
              </span>
              <input type="text" class="form-control" {...categoryName} />
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text col-sm-2" id="basic-addon1">
                Tipo Categoría
              </span>
              <input type="text" class="form-control" {...categoryType} />
            </div>
            <span>
              <br />
            </span>
            <button className="w-200 btn btn-lg btn-warning" type="submit">
              enviar
            </button>
          </form>
          <br />
        </div>
      </div>
      </div>
    </div>
  );
};

export default AdminProduct;