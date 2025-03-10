import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
// import axios from 'axios';
import Header from '../Headers/Header';
import club from '../../image/moratuwa/club.jpg';
import m1 from '../../image/moratuwa/m1.jpg';
import m2 from '../../image/moratuwa/m2.jpg'
import m3 from '../../image/moratuwa/m3.jpg'
import m4 from '../../image/moratuwa/m4.jpg'
import m5 from '../../image/moratuwa/m5.jpg'
import m6 from '../../image/moratuwa/m6.jpg'
import m7 from '../../image/moratuwa/m7.jpg'
import m8 from '../../image/moratuwa/m8.jpg'
import m9 from '../../image/moratuwa/m9.jpg'
import m10 from '../../image/moratuwa/m10.jpg'
import m11 from '../../image/moratuwa/m11.jpg'




const ViewEye = () => {


  return (
    <div>
         <Header/>

         <div class="container text-center">
                                <div class="row" style= {{ margin : "180px 0px 60px 0px"}}>
            
                                    <div class="col">
                                    <div class="card" >
                                        <img src={club} class="card-img " alt="..."/>
                                    </div>
                                    </div>
    
                                    <div class="col">
                                    <div class="card">
                                        <img src={m2} class="card-img " alt="..."/>  
                                    </div>
                                    </div>
    
                                    <div class="col">
                                    <div class="card" >
                                        <img src={m1} class="card-img " alt="..."/>
                                    </div>
                                    </div>
    
                                    <div class="col">
                                    <div class="card" >
                                        <img src={m8} class="card-img " alt="..."/>
                                    </div>
                                    </div>
                                </div>
    
                                {/* <div class="row">
                                 <div class="col">
                                    <div class="card">
                                        <img src={m5} class="card-img " alt="..."/>
                                    </div>
                                    </div>
    
                                    <div class="col">
                                    <div class="card">
                                        <img src={m1} class="card-img " alt="..."/>
                                    </div>
                                    </div>
    
                                    <div class="col">
                                    <div class="card">
                                        <img src={m4} class="card-img " alt="..."/>
                                    </div>
                                    </div>
    
                                    <div class="col">
                                    <div class="card">
                                        <img src={m8} class="card-img " alt="..."/>
                                    </div>
                                    </div>
    
                                </div> */}


                                {/* <div class="row">
                                 <div class="col">
                                    <div class="card">
                                        <img src={m6} class="card-img " alt="..."/>
                                    </div>
                                    </div>
    
                                    <div class="col">
                                    <div class="card">
                                        <img src={m10} class="card-img " alt="..."/>
                                    </div>
                                    </div>
    
                                    <div class="col">
                                    <div class="card">
                                        <img src={m11} class="card-img " alt="..."/>
                                    </div>
                                    </div>
    
                                    <div class="col">
                                    <div class="card">
                                        <img src={m7} class="card-img " alt="..."/>
                                    </div>
                                    </div>
    
                                </div> */}

                            </div>
    

    </div>
  )
}

export default ViewEye