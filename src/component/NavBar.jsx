import React from 'react'
import img from './logo.png'
import imt from './imt 2.png'
import {BrowserRouter as Router,Route,Routes,Link,useLocation,Nav} from 'react-router-dom'

export default function NavBar() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-light fixed-top p-4 shadow-sm shadow-indigo-500/40 ">
  <div class="container-fluid ">
  <img src={img} class="px-16"/>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0 gap-x-8 text-lg">
        <li class="nav-item">
          <Link class="nav-link active text-pr font-bold" aria-current="page" to="/">HOME</Link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">ABOUT</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">STYLES</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">FAVOURITES</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">CART</a>
        </li>
        <li class="nav-item">
          <button class="flex gap-1 nav-link hover:bg-tl btn bg-pr text-light" href="#">CONTACT US <img src={imt} className=""/> </button>
        </li> 
      </ul>
   
    </div>
  </div>
</nav>
    </div>
  )
}
