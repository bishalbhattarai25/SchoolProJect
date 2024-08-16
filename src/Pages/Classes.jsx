import React, { useState } from 'react';
import Python from '../Components/ClassesPageComponents/PagesComponent/Python';
import Microsoft from '../Components/ClassesPageComponents/PagesComponent/Microsoft';
import Web_Development from '../Components/ClassesPageComponents/PagesComponent/Web_Development';
import JavaScript from '../Components/ClassesPageComponents/PagesComponent/JavaScript';




function Classes() {


 const[click, setclick]=useState('Python')

  const NavData=[
  {title:'Python',path:'Python'},
  {title:'Microsoft',path:'Microsoft'},
  {title:'Web Development',path:'Web_Development'},
  {title:'Javascript', path:'Javascript'}
]



  return (



    <div className='w-screen px-10'>
     <div className='p-6'>
      <div className='font-bold text-4xl capitalize'>a broad selection of courses</div>
      <div className='font-serif text-2xl pt-4'>choose from over 20,000 online video courses with new additionals published every month</div>
    </div>

    <div className='p-3 '>
      <div className='flex gap-10 '>
        {
          NavData.map((val,i)=>{
            return<>
            <div className='font-bold text-gray-600 cursor-pointer hover:text-gray-800 text-xl' onClick={()=>{
              setclick(val.path);
            }} >{val.title}</div>
            
            </>
          })
        }
      </div>
      <div className='pt-8'>
      <div className=' p-5 border w-full h-auto '>
        {
          click === 'Python' ? <Python/> :
          click ===  'Microsoft' ? <Microsoft/>:
          click === 'Web_Development' ? <Web_Development/>:
          click === 'Javascript' ? <JavaScript/>: ""
        }
          
        
      </div>
      </div>


    </div>
  



    </div>
  );
}

export default Classes;
