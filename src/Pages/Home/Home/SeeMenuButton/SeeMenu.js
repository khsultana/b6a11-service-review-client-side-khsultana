import React from "react";
import { Link } from "react-router-dom";

const SeeMenu = () => {
  return (
    <div className="mx-auto text-center mt-12">
      <Link to="/see">
        <button className="btn btn-outline rounded-none mb-12">
          See All Items
        </button>
      </Link>
    </div>
  );
};

export default SeeMenu;
