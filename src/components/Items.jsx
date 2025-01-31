import React, { useContext, useRef, useState } from "react";
import { Barista, assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";

const Items = () => {

  const parentDivRef = useRef(null);
  const {mainItem, addToCart_2} = useContext(StoreContext);

  const scrollLeft = () => {
    if (parentDivRef.current) {
      parentDivRef.current.scrollBy({
        left: -300, // Adjust this value to scroll by the desired amount
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (parentDivRef.current) {
      parentDivRef.current.scrollBy({
        left: 300, // Adjust this value to scroll by the desired amount
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="bg-[#EDEBE9] h-[300px] mt-7 px-28 py-7 relative">
      <div className="flex gap-[76%] mb-8">
        <h2 className="font-bold text-[20px] tracking-wide text-[#000000]">
          Barista Recommends
        </h2>
        <Link to={'/order'} className="text-[#00754a] text-[14px]">
          View Menu
        </Link>
      </div>
      <div className="flex gap-2 overflow-x-scroll w-full" ref={parentDivRef}>
        {Barista.map((item, index) => (
          <div key={index} className="h-[150px] w-[33%] bg-white flex-shrink-0 flex flex-col items-center gap-1 shadow-md rounded-md px-7 py-5 cursor-pointer">
            <div className="flex gap-4 w-[100%]">
              <div className="h-[80px] w-[80px] rounded-lg overflow-hidden">
                <img className="h-full w-full object-cover cursor-pointer" src={item.image} alt="" />
              </div>
              <div className="mt-1 gap-1">
                <img src={assets.dot} alt="" />
                <p className="text-[13px] font-semibold">{item.name}</p>
                <p className="text-[0.6rem] font-extralight">{item.desc}</p>
              </div>
            </div>
            <div className="flex items-center w-full px-4">
              <p className="text-[13px] font-semibold">₹{item.price}</p>
              <button onClick={() => addToCart_2(item.idd)} className='text-white border-[1px] text-[12px] font-semibold border-white bg-[#00754a] px-3 py-1 rounded-2xl hover:bg-[#0f3226] duration-700 ml-[170px]'>Add Item</button>
            </div>
          </div>
        ))}
        <img
          src={assets.left_arrow}
          className="absolute left-20 top-[50%] cursor-pointer h-6 w-14 hover:scale-110 duration-500"
          onClick={scrollLeft}
          alt="Scroll Left"
        />
        <img
          src={assets.left_arrow}
          className="absolute right-20 top-[50%] cursor-pointer h-6 w-14 rotate-180 hover:scale-110 duration-500"
          onClick={scrollRight}
          alt="Scroll Right"
        />
      </div>
    </div>
  );
};

export default Items;
