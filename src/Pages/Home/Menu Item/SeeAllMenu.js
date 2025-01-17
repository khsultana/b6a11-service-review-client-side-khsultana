import React, { useEffect, useState } from "react";
import AllItemHere from "./AllItemHere";

const SeeAllMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("https://b6a11-service-review-server-side-khsultana.vercel.app/items")
      .then((res) => res.json())
      .then((data) => setMenu(data));
  });
  return (
    <div className="lg:grid lg:grid-cols-3 grid grid-cols-1 gap-6">
      {menu.map((menus) => (
        <AllItemHere key={menus._id} menus={menus}></AllItemHere>
      ))}
    </div>
  );
};

export default SeeAllMenu;
