import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const AllItemHere = ({ menus }) => {
  const { _id, image, name, about } = menus;
  return (
    <div>
      <div className=" w-96 bg-base-100 shadow-xl">
        <img className="h-64" src={image} alt="" />

        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p> </p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline text-orange-500">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
            </div>
            <div className="badge badge-outline ">Tasty</div>
          </div>
          <div>
            <p>{about.slice(0, 100) + '.......'}</p>
          </div>
          <div>
            <Link to={`/checkout/${_id}`}>
              <button className="btn btn-outline rounded-none text-center">
                Details More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllItemHere;
