import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { Link, useLocation } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";

const Navbar = () => {

    const [curr_page, setPage] = useState("home");
    const location = useLocation();

    const {getTotalCartAmount, getTotalCartAmount_2} = useContext(StoreContext);
  
    useEffect(() => {
      const path = location.pathname.split("/")[1] || "home";
      setPage(path);
    }, [location]);


  return (
    <div className="px-28 flex gap-72 justify-between items-center shadow-md py-3 ">
      <div className="flex items-center">
        <Link to={'/'} onClick={() => setPage('home')}>
          <img className="cursor-pointer" width={35} height={35} src={assets.logo} alt="" />
        </Link>
        <div className="flex">
          <Link to={'/'} onClick={() => setPage("home")} className={`font-light ml-12 text-[#212529] cursor-pointer ${curr_page === 'home' ? 'font-semibold underline underline-offset-8 decoration-[#00754a] decoration-2' : ''}`}>Home</Link>
          <Link to={'/gift'} onClick={() => setPage("gift")} className={`font-light ml-12 text-[#212529] cursor-pointer ${curr_page === 'gift' ? 'font-semibold underline underline-offset-8 decoration-[#00754a] decoration-2' : ''}`}>Gift</Link>
          <Link to={'/order'} onClick={() => setPage("order")} className={`font-light ml-12 text-[#212529] cursor-pointer ${curr_page === 'order' ? 'font-semibold underline underline-offset-8 decoration-[#00754a] decoration-2' : ''}`}>Order</Link>
          <div className="flex">
            <Link to={'/pay'} onClick={() => setPage("pay")} className={`font-light ml-12 text-[#212529] cursor-pointer ${curr_page === 'pay' ? 'font-semibold underline underline-offset-8 decoration-[#00754a] decoration-2' : ''}`}>Pay</Link>
            {(getTotalCartAmount() != 0 || getTotalCartAmount_2() != 0)?<div className="h-[5px] w-[5px] bg-red-600 rounded-full"></div>  : <></>}
          </div>
          <Link to={'/store'} onClick={() => setPage("store")} className={`font-light ml-12 text-[#212529] cursor-pointer ${curr_page === 'store' ? 'font-semibold underline underline-offset-8 decoration-[#00754a] decoration-2' : ''}`}>Store</Link>
        </div>
      </div>
      <div className="flex gap-16 items-center">
        <div className="lg:flex gap-3 pl-4 pr-4 py-2 rounded-full shadow-lg hidden">
            <img className="w-5 h-5 cursor-pointer" src={assets.search} alt="" />
            <input className="text-sm w-56 focus:outline-none" type="text" placeholder="Looking for something specific?" />
        </div>
        <Link to={'/signup'}><img className="cursor-pointer" src={assets.account} width={35} height={35} alt="" /></Link>
      </div>
    </div>
  );
};

export default Navbar;
