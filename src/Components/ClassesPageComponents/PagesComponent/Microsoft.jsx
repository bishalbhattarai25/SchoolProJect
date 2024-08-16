import React from 'react'
import { MicrosoftData } from '../ClassesData/Data.jsx'

function Microsoft() {
  return (
    <div><div className='font-bold text-2xl'>Analyze and visualize data with Exce</div>

    <div className='w-3/5 '>
    <div className=' font-light pt-6 text-xl '>Take a Microsoft Excel course from Udemy, and learn how to use this industry-standard software. Real-world experts will show you the basics like how to organize data into sheets, rows and columns, and advanced techniques like creating complex dynamic formulas. Both small businesses and large companies use Excel to turn their raw data into actionable insights.

</div>
      </div>   

      <div className=' font-light text-xl border border-black w-fit mt-5 p-3 cursor-pointer hover:bg-slate-100'>Explore Microsoft </div> 

      <div className="card pt-7  ">
        <div className='grid grid-cols-5'>
        {
          MicrosoftData.map((val,i)=>{
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

export default Microsoft
