import React from "react";
import { assets } from "../assets/assets";
import { menu_list } from "../assets/assets"
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="px-28 py-7">
      <h2 className="font-bold text-[20px] tracking-wide pl-2 text-[#282828]">Handcrafted Curations</h2>
      <div className="flex gap-28 mt-7 overflow-x-scroll w-full">
        {menu_list.map((item, index)=>{
            return (
               <div className="flex flex-col items-center gap-2">
                <Link to={'/order'}><img className="h-24 w-24 rounded-full cursor-pointer hover:scale-100 duration-500 hover:border-[3px] hover:border-green-950 object-cover" src={item.menu_image} alt="" /></Link>
                <p className="font-semibold text-sm">{item.menu_name}</p>
               </div> 
            )
        })}
      </div>
    </div>
  );
};

export default Menu;
