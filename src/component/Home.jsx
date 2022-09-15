import React from 'react'
import img1 from './Combined Shape.png'
import img2 from './Arrow - Right.png'
import img3 from './Rectangle 6.png'
import img4 from './Rectangle 7.png'
import img5 from './Rectangle 8.png'
import img6 from './Rectangle 9.png'
import img7 from './Rectangle 10.png'
import img8 from './Rectangle 11.png'
import img9 from './Subtract.png'
import img10 from './Rectangle 13.png'
import {BrowserRouter as Router,Route,Routes,Link,useLocation,Nav} from 'react-router-dom'

export default function Home() {
  return (
    <div className="bg-bg">
    <div className='container   '>
<div class="grid lg:grid-cols-2  gap-8 w-5/5 flex py-32 ">
    <div className=''>
        <h1 className=' lg:mt-32 text-tl font-bold text-6xl'>Awesome Buttons Just for You.</h1>
   <p className='text-left mt-3 text-xl'>Buttons are fashion accessories used as garment fasteners made out of plastic, shells, pearls, antlers, used on a piece of clothing. It is usually tacked on shirts, tops, skirts or dresses. Buttons can be used as fasteners or for the purpose of adornment of decorations.</p>
 <div className='flex gap-4'>
 <button className="      inline-flex justify-center rounded-md  bg-pr pb-2 pt-3  py-3.5 mt-5 px-4 text-sm font-medium text-white   ">BUY NOW  <img src={img1} className="px-2 w-8 h-5"/></button>
 <Link to="/ui" className=" outline outline-offset-2 outline-pr h-14  inline-flex justify-center rounded-md border border-transparent  py-3 mt-5 px-4 text-sm font-medium text-pr shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 animate-bounce">SEE MORE <img src={img2} className="px-2 w-8 h-5 "/></Link>
  
 </div>
  </div>
    <div className=' '>
<div className='flex gap-4 pl-8 pr-8'>
    <div>
<img src={img3} className=""/>
    </div>
    <div>
<img src={img4} className=""/>
<img src={img5} className=""/>

    </div>
    <div>
    <img src={img7} className=""/>
    <img src={img6} className=""/>

    </div>
</div>
<div className="flex  gap-4 pl-8 mt-4 pr-8">
<div>
<img src={img8} className=""/>
</div>
<div className="flex">
<img src={img9} className=""/>
<img src={img10} className="absolute  pr-6 w-20 my-[120px] mx-0.5  lg:w-36 lg:my-60"/>

</div>
</div>
    </div>
</div>
    </div>
    </div>
  )
}
