import React, { useRef, useState } from "react";
import { assets, Banner_menu } from "../assets/assets";
import { Link } from "react-router-dom";

const Banner = () => {

  const parentDivRef = useRef(null);

  const scrollLeft = () => {
    if (parentDivRef.current) {
      parentDivRef.current.scrollBy({
        left: -1200, // Adjust this value to scroll by the desired amount
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (parentDivRef.current) {
      parentDivRef.current.scrollBy({
        left: 1200, // Adjust this value to scroll by the desired amount
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="w-full h-[210px] py-[10px] px-28 mt-8 relative">
      <div ref={parentDivRef} className="w-full h-full flex overflow-x-scroll overflow-y-hidden gap-1">
        {
          Banner_menu.map((item, index) => (
            <div key={index}
            className="h-full w-[100%] bg-white flex-shrink-0 flex flex-col gap-1 shadow-md rounded-md px-7 py-5 cursor-pointer object-cover"
            style={{ backgroundImage: `url(${item.image_2})` }}>
                <p className="px-[92px]">{item.desc_1}</p>
                <div className="flex gap-3 items-center">
                    <div className="h-[80px] w-[80px]">
                        <img className="h-full w-full object-contain" src={item.image_1} alt="" />
                    </div>
                    <div className="flex flex-col gap-3">
                        <p className="text-[15px] font-semibold">{item.desc_2}</p>
                        <p>{item.desc_3}</p>
                    </div>
                </div>
                <div className="flex justify-end pl-10">
                    <Link to={index === 0 ? '/order' : '/about'}><button className='text-black text-[15px] border-white bg-[#fff] px-10 py-2 rounded-3xl'>{item.btn}</button></Link>
                </div>
          </div>
          ))
        }
        <img onClick={scrollLeft} src={assets.left_arrow} className="absolute left-20 top-[45%] cursor-pointer h-6 w-14 hover:scale-110 duration-500"/>
        <img onClick={scrollRight} src={assets.left_arrow} className="absolute right-20 top-[45%] cursor-pointer h-6 w-14 rotate-180 hover:scale-110 duration-500"/>
      </div>
    </div>
  );
};

export default Banner;
