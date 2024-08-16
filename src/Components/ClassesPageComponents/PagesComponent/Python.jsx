import React from 'react'
import { PythonData } from '../ClassesData/Data.jsx'

function Python() {
  return (
    <div>
      <div className='font-bold text-2xl'>Expand your career opportunities with Python</div>

      <div className='w-3/5 '>
      <div className=' font-light pt-6 text-xl '>Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to..</div>
        </div>   

        <div className=' font-light text-xl border border-black w-fit mt-5 p-3 cursor-pointer hover:bg-slate-100'>Explore Python</div> 

        <div className="card pt-7  ">
          <div className='grid grid-cols-5'>
          {
            PythonData.map((val,i)=>{
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

export default Python
