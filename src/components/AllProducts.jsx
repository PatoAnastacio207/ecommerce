import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import AdminSidebar from "./AdminSidebar";
import { Pagination } from 'semantic-ui-react'

const AllProducts = function () {
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [search, setSearch] = useState("")
  const [products, setProducts] = useState([]);
  const [urlAdmin, setUrlAdmin] = useState(false);

  const handleChange = (e, setValue) => {
    setValue(e.target.value)
  }

  const handleSearch = (e) => {
    console.log(search)
    e.preventDefault();
    if (search) {
      axios
        .get(`/api/products/search/${search}`)
        .then(res => res.data)
        .then((product) => {
          console.log(product)
          setProducts(product);
        })
        .catch((error) => console.log(error));
    } else {
      axios
      .get("/api/products")
      .then((res) => res.data)
      .then((product) => {
        setProducts(product);
      })
      .catch((error) => console.log(error));
    }
  }

  useEffect(() => {
    window.location.pathname === "/admin/products"
      ? setUrlAdmin(true)
      : setUrlAdmin(false);
    axios
      .get("/api/products/paginate")
      .then((res) => res.data)
      .then((data) => {
        console.log(data)
        setTotalPages(data.totalPages)
        setProducts(data.docs);
      })
      .catch((error) => console.log(error));
  }, [window.location.pathname]);

  useEffect(() => {
    axios
      .get(`/api/products/paginate?page=${page}`)
      .then((res) => res.data)
      .then((data) => {
        console.log(data)
        setTotalPages(data.totalPages)
        setProducts(data.docs);
      })
      .catch((error) => console.log(error));
  }, [page])

  const changePage = (_, {activePage}) => {
    setPage(parseInt(activePage))
  }

  return (
    <>
    {
      console.log(totalPages)
    }
      <div className={urlAdmin ? "row" : "container-fluid"}>
        {urlAdmin ? (
          <>
            <div className="col-sm-2">
              <AdminSidebar />
            </div>
            <div className="col-sm-1">
              <span></span>
            </div>
          </>
        ) : null}
        <main className={urlAdmin ? "col-sm-9" : null}>
          {!urlAdmin ? (
            <section className="py-5 text-center container">
              <div className="row py-lg-5">
                <div className="col-lg-6 col-md-8 mx-auto">
                  <h1 className="fw-light titleNoMain">Our dummie products</h1>
                </div>
                <form onSubmit={handleSearch}>
                  <div className="input-group rounded container d-flex justify-content-center" style={{width: "40%"}}>
                    <input
                      type="text"
                      className="form-control rounded"
                      placeholder="Search"
                      aria-label="Search"
                      aria-describedby="search-addon"
                      size="75"
                      onChange={(e) => handleChange(e, setSearch)}
                    />
                    <span className="input-group-text border-0" id="search-addon">
                      <i className="fas fa-search"></i>
                    </span>
                  </div>
                </form>
              </div>
            </section>
          ) : 

          <form onSubmit={handleSearch}>
            <br /><br />
                  <div className="input-group rounded container d-flex justify-content-center" style={{width: "40%"}}>
                    <input
                      type="text"
                      className="form-control rounded"
                      placeholder="Search"
                      aria-label="Search"
                      aria-describedby="search-addon"
                      size="75"
                      onChange={(e) => handleChange(e, setSearch)}
                    />
                    <span className="input-group-text border-0" id="search-addon">
                      <i className="fas fa-search"></i>
                    </span>
                  </div>
                </form>
          }

          <div className="album py-5">
            <div className="container">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4" >
                {products ? (
                  products.map((data) => (
                    <>
                      <ProductCard
                        key={data._id}
                        product={data}
                        admin={urlAdmin}
                      />
                    </>
                  ))
                ) : (
                  <span></span>
                )}
              </div>
              <br />
              <nav aria-label="Page navigation example" className="d-flex justify-content-center">
                <Pagination 
                  activePage={page}
                  ellipsisItem={null}
                  defaultActivePage={1}
                  firstItem={null}
                  lastItem={null}
                  pointing
                  secondary
                  siblingRange={5}
                  totalPages={totalPages}
                  onPageChange={changePage}
                />
              </nav>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default AllProducts;
