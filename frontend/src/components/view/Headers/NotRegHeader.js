import React from 'react'
// import { useState } from 'react';
// import {NavLink,Link,useNavigate} from 'react-router-dom';
// import axios from "axios";
// import swal from "sweetalert";

import './header.css';
import logo from '../../image/cyn.png';



const NotRegHeader = () => {

//const id =localStorage.getItem("id");


return(


    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <img style={{ margin: "64px 0px 0px -60px",width: "150px", height: "150px", objectFit: "cover" }} class="logoimg" src={logo} alt="Logo"/>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/program">Programs</a>
                </li>
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/partner">Partners</a>
                </li>
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/gallery">Gallery</a>
                </li>
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#aboutus">About Us</a>
                </li>
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#contactus">Contact Us</a>
                </li>
                <li class="nav-item">
                <a class="nav-link active" style={{ fontWeight:"700", borderRadius: "15px", boxShadow: "2px 2px 5px 2px rgba(0,0,0,0.9)", padding:"8px 15px 8px 15px"}} aria-current="page" href="#">Sign In</a>
                </li>
                <li class="nav-item">
                <a class="nav-link active" style={{ fontWeight:"700", borderRadius: "15px", boxShadow: "2px 2px 5px 2px rgba(0,0,0,0.9)", padding:"8px 15px 8px 15px"}} aria-current="page" href="#">Sign Up</a>
                </li>

                
                
            </ul>
            
            </div>
        </div>
    </nav>
    
        


)

}

export default NotRegHeader