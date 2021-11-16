import React from "react";
import axios from "axios";
import { useInput } from "../hooks/custom-hooks";
import { Route, Switch } from "react-router-dom";

import AdminProduct from "./AdminProduct";
import AdminSidebar from "./AdminSidebar";
import AllProducts from "./AllProducts";

const AdminView = () => {
  return (
    <div className="row">
      <div className="col-sm-2">
        < AdminSidebar />
    </div>
    <div className="col-sm-1">
        <span></span>
    </div>
    <div className="col-sm-9">
        <span></span>
    </div>
    </div>
  );
};

export default AdminView;
