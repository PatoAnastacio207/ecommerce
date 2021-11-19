import React from "react";

import AdminSidebar from "./AdminSidebar";

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
