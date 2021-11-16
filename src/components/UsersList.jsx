import React, { useState, useEffect } from "react";
import axios from "axios";
import UsersCard from "./UsersCard";
import AdminSidebar from "./AdminSidebar";

const UsersList = function () {
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    axios
      .get("/api/users/admin")
      .then((res) => res.data)
      .then((users) => {
        setUsersList(users);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-sm-2">
          <AdminSidebar />
        </div>
        <div className="col-sm-1">
          <span></span>
        </div>

        <main className="col-sm-9">
          <div className="album py-5">
            <div className="container">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
                {usersList ? (
                  usersList.map((data) => (
                    <UsersCard
                      key={data._id}
                      user={data}
                    />
                  ))
                ) : (
                  <span></span>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default UsersList;
