import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='px-28 py-5 bg-[#0E382C] mt-8'>
      <div className="w-full flex gap-[80px] text-[#e8e8e8]">
        <div>
            <img className='cursor-pointer' src={assets.logo} width={45} height={45} />
        </div>
        <div className='flex flex-col gap-5'>
            <p className='font-bold text-[17px] cursor-pointer'>About Us</p>
            <p className='text-[14px] text-[#cacccb] cursor-pointer hover:text-[#a4a6a5]'>Our Heritage</p>
            <p className='text-[14px] text-[#cacccb] cursor-pointer hover:text-[#a4a6a5]'>Coffeehouse</p>
            <p className='text-[14px] text-[#cacccb] cursor-pointer hover:text-[#a4a6a5]'>Our Company</p>
        </div>
        <div className='flex flex-col gap-5'>
            <p className='font-bold text-[17px] cursor-pointer'>Responsibility</p>                  
            <p className='text-[14px] text-[#cacccb] cursor-pointer hover:text-[#a4a6a5]'>Diversity</p>
            <p className='text-[14px] text-[#cacccb] cursor-pointer hover:text-[#a4a6a5]'>Community</p>
            <p className='text-[14px] text-[#cacccb] cursor-pointer hover:text-[#a4a6a5]'>Ethical Sourcing</p>
            <p className='text-[14px] text-[#cacccb] cursor-pointer hover:text-[#a4a6a5]'>Environmental Stewardship</p>
            <p className='text-[14px] text-[#cacccb] cursor-pointer hover:text-[#a4a6a5]'>Learn More</p>
        </div>
        <div className='flex flex-col gap-5'>
            <p className='font-bold text-[17px] cursor-pointer'>Quick Links</p>
            <p className='text-[14px] text-[#cacccb] cursor-pointer hover:text-[#a4a6a5]'>Privacy Policy</p>
            <p className='text-[14px] text-[#cacccb] cursor-pointer hover:text-[#a4a6a5]'>FAQs</p>
            <p className='text-[14px] text-[#cacccb] cursor-pointer hover:text-[#a4a6a5]'>Starbucks India Mobile App <br/>Terms of Use</p>
            <p className='text-[14px] text-[#cacccb] cursor-pointer hover:text-[#a4a6a5]'>Customer Service</p>
            <p className='text-[14px] text-[#cacccb] cursor-pointer hover:text-[#a4a6a5]'>Delivery</p>
            <p className='text-[14px] text-[#cacccb] cursor-pointer hover:text-[#a4a6a5]'>Season's Gifting</p>
            <p className='text-[14px] text-[#cacccb] cursor-pointer hover:text-[#a4a6a5]'>Loyalty Program Terms and <br/> Conditions</p>
            <p className='text-[14px] text-[#cacccb] cursor-pointer hover:text-[#a4a6a5]'>Classics Combo Offer</p>
            <p className='text-[14px] text-[#cacccb] cursor-pointer hover:text-[#a4a6a5]'>Holiday Cheers! - 2024</p>
            <p className='text-[14px] text-[#cacccb] cursor-pointer hover:text-[#a4a6a5]'>Beverage Subscription</p>
        </div>
        <div className='flex flex-col gap-5'>
            <p className='font-bold text-[17px]'>SOCIAL MEDIA</p>
            <div className='flex gap-4'>
                <img className='text-[#cacccb] cursor-pointer hover:scale-110 duration-500' src={assets.instagram} alt="" />
                <img className='text-[#cacccb] cursor-pointer hover:scale-110 duration-500' src={assets.facebook} alt="" />
                <img className='text-[#cacccb] cursor-pointer hover:scale-110 duration-500' src={assets.twitter} alt="" />
            </div>
        </div>
        <div className='flex flex-col gap-5'>
            <img  className='w-40 cursor-pointer hover:scale-105 duration-500' src={assets.app_store} alt="" />
            <img className='w-40 cursor-pointer hover:scale-105 duration-500' src={assets.play_store} alt="" />
        </div>
      </div>
      <hr className='mt-[50px] text-[#cacccb]' />
      <div className='flex text-[#cacccb] mt-2 gap-[35%] items-center'>
        <div className='flex items-center'>
          <p className='text-[13px] cursor-pointer hover:text-[#a4a6a5]'>Web Accessiblity</p>
          <hr class="w-px h-4 bg-[#cacccb] mx-4"></hr>
          <p className='text-[13px] cursor-pointer hover:text-[#a4a6a5]'>Privacy Statement</p>
          <hr class="w-px h-4 bg-[#cacccb] mx-4"></hr>
          <p className='text-[13px] cursor-pointer hover:text-[#a4a6a5]'>Terms of Use</p>
          <hr class="w-px h-4 bg-[#cacccb] mx-4"></hr>
          <p className='text-[13px] cursor-pointer hover:text-[#a4a6a5]'>Contact Us</p>
        </div>
        <div className='text-[13px]'>© 2025 Starbucks Coffee Company. All rights reserved.</div>
      </div>
    </div>
  )
}

export default Footer
