import React, { useEffect, useState } from "react";

const OrderRow = ({ order, handleDelete, handleStatusUpdate }) => {
  const { _id, itemsN, Price, customer, email, items, status } = order;
  const [orderItem, setOrderItem] = useState([]);
  useEffect(() => {
    fetch(
      `https://b6a11-service-review-server-side-khsultana.vercel.app/items/${items}`
    )
      .then((res) => res.json())
      .then((data) => setOrderItem(data));
  }, [items]);

  return (
    <tr>
      <th>
        <label>
          <button onClick={() => handleDelete(_id)} className="btn btn-ghost">
            X
          </button>
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              {orderItem?.image && (
                <img
                  src={orderItem.image}
                  alt="Avatar Tailwind CSS Component"
                />
              )}
            </div>
          </div>
          <div>
            <div className="font-bold">{itemsN}</div>
            <div className="text-sm opacity-50">{customer}</div>
          </div>
        </div>
      </td>
      <td>
        <br />
        <span className="badge badge-ghost badge-sm">{email}</span>
      </td>
      <td>${Price}</td>
      <th>
        <button
          onClick={() => handleStatusUpdate(_id)}
          className="btn btn-ghost btn-xs"
        >
          {status ? status : "Pending"}
        </button>
      </th>
    </tr>
  );
};

export default OrderRow;
