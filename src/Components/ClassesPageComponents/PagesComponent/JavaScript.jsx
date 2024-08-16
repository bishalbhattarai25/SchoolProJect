import React from 'react'
import { JavascriptData } from '../ClassesData/Data'

function JavaScript() {
  return (
    <div>
      <div className='font-bold text-2xl'>Grow your software development skills with JavaScript</div>

<div className='w-3/5 '>
<div className=' font-light pt-6 text-xl '>JavaScript is a text-based computer programming language used to make dynamic web pages. A must-learn for aspiring web developers or programmers, JavaScript can be used for features like image carousels, displaying countdowns and timers, and playing media on a webpage. With JavaScript online classes, you can learn to build interactive web applications, choose the best framework, and work with other programming languages like HTML and CSS.

</div>
  </div>   

  <div className=' font-light text-xl border border-black w-fit mt-5 p-3 cursor-pointer hover:bg-slate-100'>Explore JavaScript</div> 

  <div className="card pt-7  ">
    <div className='grid grid-cols-5'>
    {
      JavascriptData.map((val,i)=>{
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

export default JavaScript
