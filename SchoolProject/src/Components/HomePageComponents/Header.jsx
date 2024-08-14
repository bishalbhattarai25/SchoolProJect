import React from 'react';

function Header() {
  return (
    <div className='bg-[#f7f7f7] h-[600px] w-screen grid grid-cols-2 items-center justify-center gap-20 px-20 '>
      <div className='flex w-full flex-col items-start justify-center gap-5 '>
        <div className='text-5xl font-medium tracking-wide'>Expert Mentors:Unlock Quality Knowledge For College <span className='text-yellow-500'>Success</span></div>
        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
             Necessitatibus a error dolor quam velit autem fugit.</div>
        <div>
            <button className='px-5 py-2 bg-[#555ae7] rounded-md text-white font-medium shadow-md  drop-shadow-lg'>Get Started Now</button>
        </div>
        <div className='flex gap-5 mt-6'>
            <div className='flex flex-col items-center gap-0.5'>
                <div className='text-xl font-semibold '>120</div>
                <div className='text-sm font-medium text-slate-400'>Courses</div>
            </div>
            <div className='flex flex-col items-center gap-0.5'>
                <div className='text-xl font-semibold '>50</div>
                <div className='text-sm font-medium text-slate-400'>Teachers</div>
            </div>
            <div className='flex flex-col items-center gap-0.5'>
                <div className='text-xl font-semibold '>1000+</div>
                <div className='text-sm font-medium text-slate-400'>Students</div>
            </div>
            
        </div>
      </div>

      <div className=''>
        <div className='relative bg-[#555ae7] h-[500px] w-[500px] rounded-full'>
        </div>
        <img src="./images/bg1.png" alt="background"  className='absolute top-1 -right-8 h-[600px] w-[800px]'/>
        <div className='absolute bg-[#555ae7] h-[90px] w-[90px] rounded-full top-[450px] left-[650px]'></div>  
        <div className='absolute bg-yellow-400 h-[50px] w-[50px] rounded-full top-[150px] right-[100px]'></div>    

      </div>
    </div>
  );
}

export default Header;
