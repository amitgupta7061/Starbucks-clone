import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <div className="bg-[#EDEBE9] h-[450px] mt-7 px-28 py-5">
      <div className="flex gap-[60%] mb-8">
        <h2 className="font-bold text-[20px] tracking-wide  text-[#000000]">
          Learn more about the world of coffee!
        </h2>
        <Link to={'/about'} className="text-[#00754a] text-[14px]">
          Discover More
        </Link>
      </div>
      <div
        className="w-full h-[85%] bg-center bg-cover bg-no-repeat rounded-md relative overflow-hidden cursor-pointer group" style={{ backgroundImage: `url(${assets.bg})` }}>
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition duration-500 flex flex-col px-8 py-5 gap-36 text-white">
            <div className="bg-white text-green-800 w-24 font-semibold flex justify-center text-[11px] rounded-lg">Cofee Culture</div>
            <div className="flex flex-col gap-1">
                <p className="text-[30px]">Art & Science Of Coffee Brewing </p>
                <p className="tracking-wide">Master the perfect brew with Starbucks! Learn the art and science of coffee brewing.</p>
                <Link to={'/about'}><button className="text-black text-[15px] border-white bg-[#fff] px-10 py-2 rounded-3xl w-[200px] mt-8">Learn More</button></Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
