import React, { useState, useEffect } from "react";
import axios from "axios";
import { useInput } from "../hooks/custom-hooks";
import AdminSidebar from "./AdminSidebar";
import { useParams } from "react-router-dom"


const AdminProduct = ({ product }) => {
  
  const productTest = useState({})

  const { id } = useParams()

  const [updater, setUpdater] = useState(0)

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [inventory, setInventory] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [categoryType, setCategoryType] = useState("");

  const [title, setTitle] = useState("")
  
  const handleChange = (e, setValue) => {
    setValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (window.location.pathname === `/admin/product/${id}`) {
      axios
      .put(`/api/products/id/${id}`, {
        name,
        price,
        description,
        imgUrl,
        inventory,
        category: {
          name: categoryName,
          type: categoryType,
        },
      })
      .then((res) => {
        setUpdater(updater + 1)
        return res.data
      })
      .catch((err) => console.error(err));
    } else {
      axios
      .post("/api/products", {
        name: name,
        price: price,
        description: description,
        imgUrl: imgUrl,
        inventory: inventory,
        category: {
          name: categoryName,
          type: categoryType,
        },
      })
      .then((res) => res.data)
      .catch((err) => console.error(err));
    }
    setTitle(name)
    // window.location.reload(false)
  };
  
  useEffect(() => {
    axios.get(`/api/products/id/${id}`).then(({ data }) => {
      setName(data.name)
      setPrice(data.price)
      setDescription(data.description)
      setImgUrl(data.imgUrl)
      setInventory(data.inventory)
      setCategoryName(data.category.name)
      setCategoryType(data.category.type)
    }).catch(() => {})
  }, [updater])

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
        <h1 style={{ fontFamily: "Bebas Neue" }}>{title !== "" ? (`EDITAR PRODUCTO: ${title}`) : ("AGREGAR PRODUCTOS")}</h1>
        <br />
        <div className="card container border border-dark shadow-0">
          <br />
          <div className="card-body container">
            <form onSubmit={handleSubmit}>
              <div class="input-group mb-3">
                <span class="input-group-text col-sm-2" id="basic-addon1">
                  Nombre producto
                </span>
                <input type="text" class="form-control " value={name} onChange={(e) => handleChange(e, setName)} />
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text col-sm-2" id="basic-addon1">
                  Descripción
                </span>
                <input type="text" class="form-control" value={description} onChange={(e) => handleChange(e, setDescription)} />
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text col-sm-2" id="basic-addon1">
                  Precio
                </span>
                <input type="number" class="form-control" value={price} onChange={(e) => handleChange(e, setPrice)} />
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text col-sm-2" id="basic-addon1">
                  Stock
                </span>
                <input type="number" class="form-control" value={inventory} onChange={(e) => handleChange(e, setInventory)}/>
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text col-sm-2" id="basic-addon1">
                  Imagen
                </span>
                <input type="text" class="form-control" value={imgUrl} onChange={(e) => handleChange(e, setImgUrl)} />
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text col-sm-2" id="basic-addon1">
                  Nombre Categoría
                </span>
                <input type="text" class="form-control" value={categoryName} onChange={(e) => handleChange(e, setCategoryName)}/>
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text col-sm-2" id="basic-addon1">
                  Tipo Categoría
                </span>
                <input type="text" class="form-control" value={categoryType} onChange={(e) => handleChange(e, setCategoryType)} />
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
