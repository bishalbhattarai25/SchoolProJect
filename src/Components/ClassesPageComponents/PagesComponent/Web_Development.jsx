import React from 'react'
import { Web_DevelopmentData } from '../ClassesData/Data'

function Web_Development() {
  return (
    <div>
      <div className='font-bold text-2xl'>Build websites and applications with Web Development</div>

<div className='w-3/5 '>
<div className=' font-light pt-6 text-xl '>The world of web development is as wide as the internet itself. Much of our social and vocational lives play out on the internet, which prompts new industries aimed at creating, managing, and debugging the websites and applications that we increasingly rely on.



</div>
  </div>   

  <div className=' font-light text-xl border border-black w-fit mt-5 p-3 cursor-pointer hover:bg-slate-100'>Explore Web Development</div> 

  <div className="card pt-7  ">
    <div className='grid grid-cols-5 gap-5'>
    {
      Web_DevelopmentData.map((val,i)=>{
        return<>
        <div className='cursor-pointer'>
        
        <div className='img border w-fit hover:bg-slate-300 '><img src={val.img}/></div>
        <div className='descrivation font-bold pt-3 text-xl '>{val.des}</div>
        <div className='name font-light'>{val.nam}</div>
        <div className='price  mt-2 font-bold'>{val.pri}</div>
        </div>

        </>
      })

    }
    </div>
    
  </div>
    </div>
  )
}

export default Web_Development
