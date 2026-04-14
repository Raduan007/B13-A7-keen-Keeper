import React from 'react';
import { NavLink } from 'react-router';
import logo from '../../assets/logo.png'
import { IoHomeOutline } from 'react-icons/io5';
import { IoMdTime } from 'react-icons/io';
import { TfiStatsDown } from 'react-icons/tfi';

const Navbar = () => {
    return (     
        <nav className=' mx-auto '>
             <div className='flex justify-between items-center shadow py-2 px-4 md:px-20'>
            
            <div className='hidden md:block'>
               <img src={logo} alt="" />
            </div>

            <ul className='flex justify-center gap-2 items-center w-full md:w-auto'>
             <button className='flex justify-center items-center'>
                 
                 <NavLink to={"/"}
                 className={({ isActive }) =>
                `flex items-center gap-2 px-4 py-2 rounded-md
             ${isActive ? "bg-[#244D3f] text-white" : "bg-white"}` }>
           <IoHomeOutline  />
             <span>Home</span>
               </NavLink>
                </button>

                      <button className='flex justify-center items-center'>
                 
                 <NavLink to={"/timeline"}
                 className={({ isActive }) =>
                `flex items-center gap-2 px-4 py-2 rounded-md
           ${isActive ? "bg-[#244D3f] text-white" : "bg-white"}` }>
           <IoMdTime  />
             <span>Timeline</span>
               </NavLink>
                </button>

                     <button className='flex justify-center items-center'>
                 
                 <NavLink to={"/stats"}
                 className={({ isActive }) =>
                `flex items-center gap-2 px-4 py-2 rounded-md
               ${isActive ? "bg-[#244D3f] text-white" : "bg-white"}` }>
           <TfiStatsDown  />
             <span>Stats</span>
               </NavLink>
                </button>
            </ul>
         
   
        </div>
          </nav>
    );
};

export default Navbar;