import React from "react";
import { FaAdjust } from "react-icons/fa";

const Cook = () => {
  return (
    <div className="mb-12">
      <h2 className="lg:text-center lg:text-4xl lg:font-bold lg:mb-6 text-center text-2xl font-semibold mb-6">
        {" "}
        What's Cook Up
      </h2>
      <div className="lg:flex lg:gap-16 lg:items-center lg:justify-center">
        <div className="flex flex-col items-center justify-center ">
          <img
            className="rounded-full h-52  bg-orange-200"
            src="https://media3.giphy.com/media/ZbHkUWQZsaK1TUEUJa/giphy.gif?cid=790b7611ba736c76b51d161c01d25dadc7098fd4e3469932&rid=giphy.gif&ct=s"
            alt=""
          />
          <p className="font-semibold flex items-center justify-center gap-2">
            <FaAdjust /> 150+ Cook
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            className="rounded-full h-52  bg-orange-400"
            src="https://media1.giphy.com/media/YoKaNSoTHog8Y3550r/giphy.gif?cid=790b7611ed283e855218eccec7e8d239b9460ebb4c7c94a5&rid=giphy.gif&ct=s"
            alt=""
          />
          <p className="font-semibold text-orange-600">Homemade Food</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            className="rounded-full h-52  bg-green-600"
            src="https://media1.giphy.com/media/oCXy0HG5tBIslG7diF/giphy.gif?cid=ecf05e47pm6927feb17rooes544tdyaihxb3stvu7yuimg3w&rid=giphy.gif&ct=s"
            alt=""
          />
          <p className="font-semibold text-green-600">Ensured Hygiene</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            className="rounded-full h-52  bg-violet-600"
            src="https://media2.giphy.com/media/PbF6v9LBzGg9jR9tiV/200.webp?cid=ecf05e47o2qtxmqas9x3odkrmuohil6ghtld1hjbiya989jw&rid=200.webp&ct=s"
            alt=""
          />
          <p className="font-semibold text-violet-600">Guaranteed Taste</p>
        </div>
      </div>
    </div>
  );
};

export default Cook;
