import React from 'react';
import { NavData } from './NavData';
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='mt-20 flex justify-around px-20 bg-white shadow-lg border py-5 border-slate-300'>
      <div className='flex flex-col gap-1'>
      <div className='text-3xl drop-shadow-lg font-bold'>Hamro<span className='text-[#555ae7]'>School</span></div>
        <div className='text-justify'>Lorem ipsum dolor sit amet, <br/>consectetur adipisicing elit. Magni <br/>earum mole numquam ipsum ipsam similique. Veritatis.</div>
      </div>
      <div className='flex flex-col gap-1'> 
        <div className='text-xl font-semibold'>Quick Links</div>
        <div className='flex flex-col gap-1'>
        {
            NavData.map((val,i)=>{
              return <div>
                <Link to={val.path}>{val.title}</Link>
              </div>
            })
          }
        </div>
      </div>
      <div>
            <div className='text-xl font-semibold'>Follow US</div>
            <div className='flex gap-2 text-xl'>
            <FaFacebook/>
            <FaInstagram/>
            <FaYoutube/>
            </div>
      </div>
    </div>
  );
}

export default Footer;
