import React from "react";
import { FaArrowLeft, FaArrowRight, FaFolderOpen } from "react-icons/fa";
import { Link } from "react-router-dom";

const CarouselItem = ({ slide }) => {
  const { image, id, prev, next } = slide;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full h-1/2">
      <div className="carousel-image">
        <img src={image} className="w-full" alt="" />
      </div>
      <div className="absolute gap-10 flex justify-end transform -translate-y-1/2 left-20 top-1/4">
        <h1 className="lg:text-6xl lg:font-sans lg:font-bold lg: text-white text-2xl font-bold">
          Home Made
          <br /> Food at your
          <br />{" "}
          <Link className="text-green-900 flex" href="/">
            <FaFolderOpen /> Doorstep
          </Link>
        </h1>
      </div>
      <div className="absolute gap-10 flex justify-end transform -translate-y-1/2 w-2/5 left-20 top-1/2">
        <p className="lg:text-xl lg:font-serif lg:text-white text-sm text-white mt-12">
          There's a whole world of canned corned beef recipes out there that
          will wow lunch & diners and make. Here are all the savory ways to
          prepare it.
        </p>
      </div>
      <div className="absolute gap-10 flex justify-start  transform -translate-y-1/2 w-2/5 left-20 top-3/4">
        <button className="lg:btn btn-outline btn-active btn  mt-12 ">
          Discover More
        </button>
      </div>
      <div className="absolute gap-10 flex justify-end  transform -translate-y-1/2 left-5 right-5   bottom-0">
        <Link href={`#slide${prev}`} className="btn btn-circle">
          <FaArrowLeft />
        </Link>
        <Link href={`#slide${next}`} className="btn btn-circle">
          <FaArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default CarouselItem;
