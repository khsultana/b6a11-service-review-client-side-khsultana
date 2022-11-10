import React, { useEffect, useState } from "react";
import MenuCard from "./MenuCard";

const MenuItem = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("https://b6a11-service-review-server-side-khsultana.vercel.app/items")
      .then((res) => res.json())
      .then((data) => setMenu(data));
  });
  return (
    <div>
      <div className="text-center">
        <h2 className="text-green-600 text-4xl font-bold">Ready to Order?</h2>
        <p className="text-xl mb-4">Try some of our best sellers</p>
      </div>
      <div className="lg:grid lg:grid-cols-3 grid grid-cols-1 gap-6">
        {menu.map((menus) => (
          <MenuCard key={menus._id} menus={menus}></MenuCard>
        ))}
      </div>
    </div>
  );
};

export default MenuItem;
