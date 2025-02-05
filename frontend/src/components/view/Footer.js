import React from 'react'
// import { useState } from 'react';
// import {NavLink,Link,useNavigate} from 'react-router-dom';
// import axios from "axios";
// import swal from "sweetalert";
import './footer.css';

import logo from '../image/cyn.png';




const Footer = () => {




return(
    <div style={{ backgroundColor:"#00072D", padding:"100px 0px 0px 0px"}}>

            <div class="container text-center">
              
                <div class="row">
                    <div class="col-4" style={{ textAlign:"left"  }}>
                        <img style={{ margin: "-90px 0px 0px 0px",width: "160px", height: "160px", objectFit: "cover" }} class="logoimg" src={logo} alt="Logo"/>
                    </div>
                    <div class="col-8" style={{ textAlign:"right"  }} >
                        
                            <a style={{ color:"#fff", textDecoration:"none", margin:"0px 30px 0px 0px" }} href="/" class="card-link">Home</a>
                            <a style={{ color:"#fff", textDecoration:"none", margin:"0px 30px 0px 0px" }} href="/ourproject" class="card-link">Our Projects</a>
                            <a style={{ color:"#fff", textDecoration:"none", margin:"0px 30px 0px 0px" }} href="/partner" class="card-link">Partners</a>
                            <a style={{ color:"#fff", textDecoration:"none", margin:"0px 30px 0px 0px" }} href="/gallery" class="card-link">Gallery</a>
                            <a style={{ color:"#fff", textDecoration:"none", margin:"0px 30px 0px 0px" }} href="/aboutus" class="card-link">About Us</a>
                            <a style={{ color:"#fff", textDecoration:"none", margin:"0px 30px 0px 0px"  }} href="/contactus" class="card-link">Contact Us</a>
                        
                    </div>
                    
                </div>

                
            
            </div>
    
    </div>

 

)

}

export default Footer