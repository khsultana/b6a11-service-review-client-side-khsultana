import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import OrderRow from "./OrderRow";

const Orders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrder] = useState([]);
  useEffect(() => {
    fetch(
      `https://b6a11-service-review-server-side-khsultana.vercel.app/orders?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, [user?.email]);

  const handleDelete = (id) => {
    const process = window.confirm("Are You Sure ? ");
    if (process) {
      fetch(
        `https://b6a11-service-review-server-side-khsultana.vercel.app/orders/${id}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Deleted SuccessFully");
            const remain = orders.filter((odr) => odr._id !== id);
            setOrder(remain);
          }
        });
    }
  };

  const handleStatusUpdate = (id) => {
    fetch(
      `https://b6a11-service-review-server-side-khsultana.vercel.app/orders/${id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ status: "Approved Item" }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          const remain = orders.filter((odr) => odr._id !== id);
          const approving = orders.find((odr) => odr._id === id);
          approving.status = "Approved";
          const newOrders = [approving, ...remain];
          setOrder(newOrders);
        }
      });
  };

  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Email</th>
              <th> Price</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <OrderRow
                key={order._id}
                order={order}
                handleDelete={handleDelete}
                handleStatusUpdate={handleStatusUpdate}
              ></OrderRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
