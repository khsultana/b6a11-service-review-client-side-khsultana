import React from "react";
import "./Banner.css";
import { FaArrowLeft, FaArrowRight, FaFolderOpen } from "react-icons/fa";
import img1 from "../../assets/images/banner/1.jpg";
import img2 from "../../assets/images/banner/2.jpg";
import img3 from "../../assets/images/banner/3.jpg";
import img4 from "../../assets/images/banner/4.jpg";
import img5 from "../../assets/images/banner/5.jpg";
const Banner = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full h-1/2">
        <div className="carousel-image">
          <img src={img1} className="w-full" alt="" />
        </div>
        <div className="absolute gap-10 flex justify-end transform -translate-y-1/2 left-20 top-1/4">
          <h1 className="text-6xl font-sans font-bold text-white">
            Home Made
            <br /> Food at your
            <br />{" "}
            <a className="text-green-900 flex" href="/">
              <FaFolderOpen /> Doorstep
            </a>
          </h1>
        </div>
        <div className="absolute gap-10 flex justify-end transform -translate-y-1/2 w-2/5 left-20 top-1/2">
          <p className="text-xl font-serif  text-white">
            There's a whole world of canned corned beef recipes out there that
            will wow lunch & diners and make. Here are all the savory ways to
            prepare it.
          </p>
        </div>
        <div className="absolute gap-10 flex justify-start transform -translate-y-1/2 w-2/5 left-20 top-3/4">
          <button className="btn btn-outline btn-active ">Discover More</button>
        </div>
        <div className="absolute gap-10 flex justify-end transform -translate-y-1/2 left-5 right-5   bottom-0">
          <a href="#slide4" className="btn btn-circle">
            <FaArrowLeft />
          </a>
          <a href="#slide2" className="btn btn-circle">
            <FaArrowRight />
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full h-1/2">
        <img src={img2} className="w-full" alt="" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full h-1/2">
        <img src={img3} className="w-full" alt="" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full h-1/2">
        <img src={img4} className="w-full" alt="" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide5" className="carousel-item relative w-full h-1/2">
        <img src={img5} className="w-full" alt="" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
