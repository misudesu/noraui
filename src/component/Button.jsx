import React from 'react'
import img1 from './Combined Shape.png'
import img2 from './Bag.png'
import img3 from './Bag1.png'
import img4 from './Bag2.png'
import img5 from './Bag3.png'

export default function Button() {
    const button={
data:[
    {primary:"Default",Container:"PRIMARY BUTTON",Outlined:"PRIMARY BUTTON",Text:"PRIMARY BUTTON",img:img1,img1:img2,color:"#562C2C"},
    {primary:"Hover",Container:"PRIMARY BUTTON",Outlined:"PRIMARY BUTTON",Text:"PRIMARY BUTTON",img:img1,img1:img4,color:"#874545"}
    ,{primary:"Pressed",Container:"PRIMARY BUTTON",Outlined:"PRIMARY BUTTON",Text:"PRIMARY BUTTON",img:img1,img1:img5,color:"#361C1C"}
    ,{primary:"Disabled",Container:"PRIMARY BUTTON",Outlined:"PRIMARY BUTTON",Text:"PRIMARY BUTTON",img:img1,img1:img3,color:"#9F8F8F"}
    
],
}
  return (
    <div className="bg-bg">
    <div className="container   ">
      <div className=' grid grid-col-1 lg:flex lg:flex-col   py-32 gap-y-3   '>
<h1 className='text-3xl lg:text-5xl '>UI Button Assets</h1>  
       <div class="flex    lg:text-2xl font-bold mt-5">
  <div class="flex lg:flex-auto item-center mx-auto  ">
  <p>Primary Button </p>
  </div>
  <div class="flex-auto px-3 lg:px-5 ">
  <p>Container</p>
  </div>
  <div class="flex-auto  ">
  <p>Outlined</p>
  </div>
  <div class="flex-auto  ">
  <p>Text</p>
  </div>
</div>
{/* buttons list */}
 {button.data.map((data,index)=>(

<div key={index} class=" row text-sm  justify-content-center  lg:text-2xl lg:font-bold mt-5 ">

  <div class=" col-3 lg:pr-5  ">
  <p className="text-sm lg:text-2xl font-bold">{data.primary}</p>
  </div>
  <div class="col-3 items-end ">
  <button className="flex btn text-white   text-sm lg:text-lg  "  style={{backgroundColor: data.color}}>{data.Container} <img src={data.img} className="px-0.5 lg:px-2 w-8 h-3 lg:w-8 lg:h-5"/></button>
 
  </div>
  <div class="col-3 ">
  <button className="flex btn text-sm lg:text-lg  " style={{outlineColor: data.color,outlineStyle: 'outset',color:data.color}}>{data.Outlined} <img src={data.img1} className="px-1 lg:px-2 w-8 h-3 lg:w-8 lg:h-5"/></button>
 
  </div>
  <div class="col-3  ">
  <button className=' flex btn text-sm lg:text-lg  ' style={{color: data.color}}>{data.Text} <img src={data.img1} className=" lg:px-2 w-8 h-3 lg:w-8 lg:h-5 "/>
  </button>
  </div>
  
</div>

   ))}
   
    </div>  
     
  
    </div>
    </div>
  )
}
