import React from 'react'
import { Link } from 'react-router-dom'

const GreenBar = () => {
  return (
    <div className='h-[80px] w-full bg-[#1e3932] flex items-center justify-end pr-[120px]'>
        <Link to={'/about'}><button className='text-white border-[1px] text-[15px] border-white bg-[#1e3932] px-2 py-1 rounded-2xl'>Know more</button></Link>
    </div>
  )
}

export default GreenBar
