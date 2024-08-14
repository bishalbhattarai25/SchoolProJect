import React from 'react';
import { TeacherData } from './HomePageData/TeacherData';

function Teachers() {
  return (
    <>
      <div className='mt-20 px-20'>
        <div className='text-center text-3xl font-bold'>Our Expert Teachers</div>
        <div className='grid grid-cols-3 items-center gap-10 justify-center mt-10'>
            {
                TeacherData.map((val,i)=>{
                    return(
                        <>
                        <div className='rounded-md relative'>
                           <img src={val.img} alt="bg" className=' rounded-md opacity-70' /> 
                        <div className='absolute top-[150px] pl-7 text-white '>
                            <div className='text-xl font-bold'>{val.title}</div>
                            <div>{val.description}</div>
                        </div>
                        </div>
                        </>
                    )
                })
            }
        </div>
        <div className='flex justify-center items-center'>
        <button className=' bg-[#555ae7] text-white font-medium shadow-lg px-5 py-2 mt-10 text-center'>Find more</button>
        </div>
      </div>
    </>
  );
}

export default Teachers;
