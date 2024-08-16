import React from 'react';
import { ChooseData } from './HomePageData/ChooseData';

function Choose() {
  return (
    <div className='mt-20 px-20'>
      <div className='text-center text-3xl font-bold'>Why Choose US?</div>
      <div className='flex items-center justify-center gap-10 mt-10'>
        {
            ChooseData.map((val,i)=>{
                return(
                    <>
                    <div className='bg-white shadow-md border border-slate-200 p-5 flex flex-col gap-3 items-center rounded-lg'> 
                        <div className='text-6xl'>{val.img}</div>
                        <div className='text-xl font-semibold'>{val.title}</div>
                        <div className='text-center text-gray-500'>{val.description}</div>
                    </div>
                    </>
                )
            })
        }
      </div>
    </div>
  );
}

export default Choose;
