import React from 'react';
import { SubjectData } from './HomePageData/SubjectData';

function Subject() {
  return (
    <>
      <div className='mt-20 px-20'>
      <div className='text-center text-3xl font-bold'>Find Your Subjects</div>
      <div className='grid grid-cols-4 items-center justify-center gap-10 mt-10'>
        {
            SubjectData.map((val,i)=>{
                return(
                    <>
                    <div className='bg-white shadow-md border border-slate-200 p-5 flex flex-col gap-3 items-center rounded-lg'> 
                        <div className='text-6xl'>{val.img}</div>
                        <div className='text-xl font-semibold'>{val.title}</div>
                    </div>
                    </>
                )
            })
        }
      </div>
    </div>
    </>
  );
}

export default Subject;
