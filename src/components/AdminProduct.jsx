import React from "react";
import axios from "axios";
import { useInput } from "../hooks/custom-hooks";
import AdminSidebar from "./AdminSidebar";


const AdminProduct = ({ product }) => {
  
  const name = useInput("name");
  const price = useInput("price");
  const description = useInput("description");
  const imgUrl = useInput("imgUrl");
  const inventory = useInput("inventory");
  const categoryName = useInput("categoryName");
  const categoryType = useInput("categoryType");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (window.location.pathname === `/admin/product/${product?.id}`) {
      axios
      .put(`/api/products/id/${product.id}`, {
        name: name.value || product.name,
        price: price.value || product.price,
        description: description.value || product.description,
        imgUrl: imgUrl.value || product.imgUrl,
        inventory: inventory.value || product.inventory,
        category: {
          name: categoryName.value || product.category.name,
          type: categoryType.value || product.category.type,
        },
      })
      .then((res) => res.data)
      .catch((err) => console.log(err));
    } else {
      axios
      .post("/api/products", {
        name: name.value,
        price: price.value,
        description: description.value,
        imgUrl: imgUrl.value,
        inventory: inventory.value,
        category: {
          name: categoryName.value,
          type: categoryType.value,
        },
      })
      .then((res) => res.data)
      .catch((err) => console.log(err));
    }
    window.location.reload(false)
  };

  

  return (
    <div className="row">
      <div className="col-sm-2">
        <AdminSidebar />
      </div>
      <div className="col-sm-1">
        <span></span>
      </div>
      <div className="container col-sm-7">
        <br />
        <h1 style={{ fontFamily: "Bebas Neue" }}>{product ? (`EDITAR PRODUCTO: ${product.name}`) : ("AGREGAR PRODUCTOS")}</h1>
        <br />
        <div className="card container border border-dark shadow-0">
          <br />
          <div className="card-body container">
            <form onSubmit={handleSubmit}>
              <div class="input-group mb-3">
                <span class="input-group-text col-sm-2" id="basic-addon1">
                  Nombre producto
                </span>
                <input type="text" class="form-control " {...name} />
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text col-sm-2" id="basic-addon1">
                  Descripción
                </span>
                <input type="text" class="form-control" value={description.value} onChange={description.onChange} />
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text col-sm-2" id="basic-addon1">
                  Precio
                </span>
                <input type="number" class="form-control" value={price.value} onChange={price.onChange} />
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text col-sm-2" id="basic-addon1">
                  Stock
                </span>
                <input type="number" class="form-control" value={inventory.value} onChange={inventory.onChange}/>
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text col-sm-2" id="basic-addon1">
                  Imagen
                </span>
                <input type="text" class="form-control" value={imgUrl.value} onChange={imgUrl.onChange} />
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text col-sm-2" id="basic-addon1">
                  Nombre Categoría
                </span>
                <input type="text" class="form-control" value={categoryName.value} onChange={categoryName.onChange}/>
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text col-sm-2" id="basic-addon1">
                  Tipo Categoría
                </span>
                <input type="text" class="form-control" value={categoryType.value} onChange={categoryType.onChange} />
              </div>
              <span>
                <br />
              </span>
              <button className="w-200 btn btn-lg btn-danger shadow-0" type="submit">
                <strong>Enviar</strong>
              </button>
            </form>
            <br />
          </div>
        </div>
      </div>
      <div className="container col-sm-2">
        <span></span>
      </div>
    </div>
  );
};

export default AdminProduct;
