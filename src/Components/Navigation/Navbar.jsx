import React from 'react';
import { NavData } from './NavData';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <div className='bg-white shadow-lg px-10 h-[60px] flex justify-between items-center'>
        <div className='text-3xl drop-shadow-lg font-bold'>Hamro<span className='text-[#555ae7]'>School</span></div>
        <div className='flex gap-10'>
          {
            NavData.map((val,i)=>{
              return <div>
                <Link to={val.path}>{val.title}</Link>
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
