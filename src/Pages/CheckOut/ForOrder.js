import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const ForOrder = () => {
  const { _id, name, Price } = useLoaderData();
  const { user } = useContext(AuthContext);

  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const customerName = `${form.firstName.value} ${form.lastName.value}`;
    const email = user?.email || "Unregister";
    const message = form.message.value;
    const phone = form.phone.value;

    const orders = {
      items: _id,
      itemsN: name,
      Price,
      customer: customerName,
      email,
      phone,
      message,
    };

    fetch("http://localhost:5000/orderItem", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orders),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.acknowledged) {
          alert("Order Item Added Successfully");
          form.reset();
        }
      })
      .catch((err) => console.error(err));
  };
  return (
    <form onSubmit={handlePlaceOrder}>
      <div className="text-4xl font-sans font-bold">Item Name: {name}</div>
      <div className="text-4xl font-sans font-bold mb-12">Price: ${Price}</div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <input
          name="firstName"
          type="text"
          placeholder="First Name"
          className="input input-bordered input-secondary w-full  "
        />
        <input
          name="lastName"
          type="text"
          placeholder="Last Name"
          className="input input-bordered input-secondary w-full  "
        />
        <input
          name="phone"
          type="text"
          placeholder="Your Phone "
          className="input input-bordered input-secondary w-full "
          required
        />
        <input
          name="email"
          type="text"
          placeholder="Your Email"
          defaultValue={user?.email}
          className="input input-bordered input-secondary w-full  "
          readOnly
        />
      </div>
      <textarea
        name="message"
        className="textarea textarea-error w-full h-80 mt-12"
        placeholder="Tell Someting About Order"
      ></textarea>
      <input
        className="btn btn-secondary mb-12"
        type="submit"
        value="Place Your Order"
      />
    </form>
  );
};

export default ForOrder;
