import React from 'react';
import { NavData } from './NavData';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  return (
    <>
      <div className='bg-white shadow-lg px-10 h-[60px] flex justify-between items-center'>
        <Link className='text-3xl drop-shadow-lg font-bold' to={'/'}>Hamro<span className='text-[#555ae7]'>School</span></Link>
        <div className='flex gap-10'>
          {
            NavData.map((val,i)=>{
              return <div>
              <Link to={val.path} className={`${val.path==location.pathname?"border-b-2 border-[#555ae7]  transition-all ease-in-out delay-100 pb-1":"bg-transparent"}`}>{val.title}</Link>
              </div>
            })
          }
        </div>
        <div>
            <button className='bg-[#555ae7] text-white font-semibold px-5 py-2 text-center rounded-md'>Sign Up </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
