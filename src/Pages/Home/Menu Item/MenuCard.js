import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
const MenuCard = ({ menus }) => {
  const { image, name } = menus;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
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
          {/* <Link to={`/checkout/${_id}`}>
            <button className="btn btn-outline rounded-none text-center">
              Order Now
            </button>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
