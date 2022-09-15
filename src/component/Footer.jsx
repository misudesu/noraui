import React from 'react'
import nora from './1648412181687.jpeg'
import misu from './photo1663155442.jpeg'
export default function() {
  return (
    <div className="bg-pr w-full h-full py-3">
<div className="flex items-center mx-auto text-center ">
        <div className="flex text-light gap-x-4 items-center mx-auto">
        <a href='https://www.linkedin.com/in/nora-eboesomi-536258199/'>
     <img src={nora} className='rounded-full w-8 h-8 '/> </a>
            <p>Ui by Nora Eboesomi</p> 
        <span className="text-info"> And Front End by </span>
        
       <p> Misael dessalegn</p>
       <a href='https://www.linkedin.com/in/misael-dessalegn-716932215/'>
     <img src={misu} className='rounded-full w-8 h-8 '/> </a>
    
       </div>
         </div>
    </div>
  )
}
