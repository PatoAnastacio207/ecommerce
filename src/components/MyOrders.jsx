import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../features/userSlice";

const MyOrders = () => {
  const user = useSelector(selectUser);
  const [orders, setOrders] = useState([]);
// console.log("orders", orders)

  useEffect(() => {
    axios.get("/api/checkout/myorders").then((res) => setOrders(res.data));
  }, []);




  return (
    
    <div>
        {
             orders.map((item) => {
                for(let key of item.items){
                   return (<ul>
                       <li>{key.name}</li>
                            <li>{key.price}</li>
                            <li>{key.quantity}</li>
                            <li>{item.date}</li>
                       </ul>
                        )
                    
                    
                }
            })
        }

    </div>

    // <div className="accordion accordion-flush" id="accordionFlushExample">
    //   <div className="accordion-item">
       
    //    <h2 className="accordion-header" id="flush-headingOne">
    //       <button
    //         className="accordion-button collapsed"
    //         type="button"
    //         data-mdb-toggle="collapse"
    //         data-mdb-target="#flush-collapseOne"
    //         aria-expanded="false"
    //         aria-controls="flush-collapseOne"
    //       >
    //         Order #1
    //       </button>
    //     </h2>
    //     <div
    //       id="flush-collapseOne"
    //       className="accordion-collapse collapse"
    //       aria-labelledby="flush-headingOne"
    //       data-mdb-parent="#accordionFlushExample"
    //     >
    //       <div className="accordion-body">
    //         adsdasdasd
    //       </div>
    //     </div>
        
    //   </div>
    // </div>
  );
};

export default MyOrders;
