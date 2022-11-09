import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const { _id, name, image, about, phone, friends } = useLoaderData();

  return (
    <div>
      <div className="m-auto mt-10 mb-10 card w-96 bg-base-100 shadow-xl">
        <img className="h-64" src={image} alt="" />

        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>
            <b>About : -</b> {about}{" "}
          </p>
          <p className="font-semibold">Contact: {phone} </p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline text-orange-500">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
            </div>
            <div className="badge badge-outline ">Tasty</div>
          </div>
          <Link to={`/checkout/${_id}`}>
            <button className="btn btn-outline rounded-none text-center">
              Order Now
            </button>
          </Link>
        </div>
      </div>
      <div>
        {friends.map((f) => (
          <p className="text-orange-600">
            {f.name} <FaStar />
            <FaStar />
            <FaStar />
          </p>
        ))}
      </div>
    </div>
  );
};

export default CheckOut;
