import React from "react"
import { Link } from "react-router-dom"

const AdminSidebar = ()=>{
    return(
        <div className="row">
        <main class="col-sm-2">
        <div class="p-3 bg-white" style={{width:" 280px"}}>
        <Link to="/admin" class="d-flex pb-3 mb-3 link-dark text-decoration-none border-bottom">
          <span class="fs-5 fw-semibold">Dashboard</span>
        </Link>
        <ul class="list-unstyled ps-0">
          <li class="mb-1">
            <button class="btn btn-toggle align-items-center rounded collapsed shadow-0 border border-dark" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
              Overview
            </button>
            <div class="collapse show" id="home-collapse">
              <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li><a href="#" class="link-dark rounded">Overview</a></li>
                <li><a href="#" class="link-dark rounded">Updates</a></li>
                <li><a href="#" class="link-dark rounded">Reports</a></li>
              </ul>
            </div>
          </li>
          <li class="mb-1">
            <button class="btn btn-toggle align-items-center rounded collapsed shadow-0 border border-dark" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
              Productos
            </button>
            <div class="collapse" id="dashboard-collapse">
              <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li><a href="#" class="link-dark rounded">Agregar</a></li>
                <li><a href="#" class="link-dark rounded">Editar/Eliminar</a></li>
              </ul>
            </div>
          </li>
          <li class="mb-1">
            <button class="btn btn-toggle align-items-center rounded collapsed shadow-0 border border-dark" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
              Admins
            </button>
            <div class="collapse" id="orders-collapse">
              <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li><a href="#" class="link-dark rounded">Agregar admin</a></li>
                <li><a href="#" class="link-dark rounded">Editar/Eliminar admin</a></li>
            
              </ul>
            </div>
          </li>
          <li class="border-top my-3"></li>
          <li class="mb-1">
            <button class="btn btn-toggle align-items-center rounded collapsed shadow-0 border border-dark" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
              Cuenta
            </button>
            <div class="collapse" id="account-collapse">
              <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li><a href="#" class="link-dark rounded">Perfil</a></li>
                <li><a href="#" class="link-dark rounded">Sign out</a></li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      </main>
      <div className ="col-sm-10"><span></span></div>
      </div>
    )
}

export default AdminSidebar