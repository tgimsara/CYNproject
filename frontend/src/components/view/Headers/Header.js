import React from 'react'
// import { useState } from 'react';
// import {NavLink,Link,useNavigate} from 'react-router-dom';

// import axios from "axios";
// import swal from "sweetalert";
import './header.css';
import logo from '../../image/cyn.png';



const Header = () => {

//const id =localStorage.getItem("id");


return(

    <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                 <img style={{ margin: "0px",width: "100px", height: "100px", objectFit: "cover" }} class="logoimg" src={logo} alt="Logo"/>
                           
                 <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav nav-underline  me-auto mb-2 mb-lg-0">
                  
                    <li class="nav-item">
                    <a class="nav-link  " aria-current="page" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link  " aria-current="page" href="/program">Programs</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link  " aria-current="page" href="/partner">Partners</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link  " aria-current="page" href="/gallery">Gallery</a>
                    </li>
                    {/* <li class="nav-item">
                    <a class="nav-link  " aria-current="page" href="#aboutus">About Us</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link  " aria-current="page" href="#contactus">Contact Us</a>
                    </li> */}
                    
                    {/* <li class="nav-item">
                    <a class="nav-link disabled "  aria-disabled="true" href="#"><button  type="submit" class="btn btn-success">Profile</button></a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link disabled "  aria-disabled="true" href="#"><button  type="submit" class="btn btn-danger">Sign Out</button></a>
                    </li> */}
                  </ul>
                    
                    
               

{/* <ul class="nav nav-underline">
  <li class="nav-item">
    <a class="nav-link" aria-current="page" href="#"> </a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
  </li>
</ul> */}
                
                </div>
            </div>
        </nav>


)

}

export default Header