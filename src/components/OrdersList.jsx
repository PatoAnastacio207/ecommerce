import React, {useState, useEffect} from 'react'
import axios from 'axios';
import AdminSidebar from './AdminSidebar';
import OrdersCard from './OrdersCard';

const OrdersList = () => {
  const [ordersList, setOrdersList] = useState([]);

  useEffect(() => {
    axios
      .get("/api/checkout")
      .then((res) => res.data)
      .then((orders) => {
        setOrdersList(orders);
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
                {ordersList ? (
                  ordersList.map((data) => (
                    <>
                    {(window.location.pathname === '/admin/orders/old' && data.status !== 'pending') ? (<OrdersCard
                      key={data._id}
                      order={data}
                    />) : (null)}
                    {(window.location.pathname === '/admin/orders/pending' && data.status === 'pending') ? (<OrdersCard
                      key={data._id}
                      order={data}
                    />) : (null)}
                    </>
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
  )
}

export default OrdersList