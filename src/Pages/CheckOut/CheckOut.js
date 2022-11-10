import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import Review from "./Review";

const CheckOut = () => {
  const { _id, name, image, about, phone, review, Price, weight, rice, order } = useLoaderData();

  return (
    <div>
      <div className="m-auto mt-10 mb-10 card w-96 bg-base-100 shadow-xl">
        <img className="h-64" src={image} alt="" />

        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p className="font-semibold text-xl text-green-600">Price : $ {Price}</p>
          <p>
            <b>About : -</b> {about}{" "}
          </p>
          <p className="font-semibold mb-2">Contact: {phone} </p>
          <p className="font-semibold mb-2">Feature: {weight} </p>
          <p className="font-semibold mb-2">Instrument:{rice} </p>
          <p className="font-semibold mb-2">Min Order: {order} </p>

          <div className="card-actions justify-end">
            <div className="badge badge-outline text-orange-500">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
            </div>
            <div className="badge badge-outline ">Tasty</div>
          </div>
          <Link to={`/order/${_id}`}>
            <button className="btn btn-outline rounded-none text-center">
              Order Now
            </button>
          </Link>
        </div>
      </div>
      <div>
        <h2 className="text-xl font-bold text-orange-600"> Total Review : {review.length}</h2>
        {review.map(rev => <Review
          key={rev.id}
          rev={rev}
        ></Review>)}
      </div>
    </div>
  );
};

export default CheckOut;
