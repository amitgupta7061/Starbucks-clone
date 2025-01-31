import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { StoreContext } from "../context/StoreContext";

const FoodMenu = ({ name, image, desc_1, desc_2, price, id }) => {

  const {cartItem, addToCart} = useContext(StoreContext)
  console.log(cartItem);

  return (
    <>
      <div className="flex flex-col gap-6 w-[100%] py-4 px-3 bg-[#f4f5f4] rounded-md hover:shadow-lg duration-400 cursor-pointer">
        <div className="flex gap-4">
          <div className="h-[90px] w-[100px] overflow-hidden rounded-full">
            <img className="h-full w-full object-cover cursor-pointer" src={image} alt=""/>
          </div>
        
          <div className="flex flex-col gap-1">
            <img className="h-5 w-5" src={assets.dot} alt="" />
            <p className="text-[13px] font-semibold">{name}</p>
            <p className="text-[0.6rem] font-extralight">{desc_1}</p>
            <p className="text-[0.6rem] font-extralight">{desc_2}</p>
          </div>
        </div>
        <div className="flex items-center gap-[54%] pl-5">
            <p className="text-[13px] font-semibold">₹ {price}</p>
            <button onClick={() => addToCart(id)} className='text-white border-[1px] text-[12px] font-semibold border-white bg-[#00754a] px-3 py-1 rounded-2xl hover:bg-[#0f3226] duration-700'>Add Item</button>
        </div>
      </div>
    </>
  );
};

export default FoodMenu;
