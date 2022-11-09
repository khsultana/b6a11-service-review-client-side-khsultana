import React from "react";
import Banner from "../../Banner/Banner";
import About from "../About/About";
import Cook from "../Cook/Cook";
import MenuItem from "../Menu Item/MenuItem";
import SeeMenu from "./SeeMenuButton/SeeMenu";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Cook></Cook>
      <MenuItem></MenuItem>
      <SeeMenu></SeeMenu>
      <About></About>
    </div>
  );
};

export default Home;
