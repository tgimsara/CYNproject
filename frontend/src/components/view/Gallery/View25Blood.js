import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
// import axios from 'axios';
import Header from '../Headers/Header';
import blood from '../../image/25blood/blood.jpeg';
import blood1 from '../../image/25blood/blood1.jpeg';
import blood2 from '../../image/25blood/blood2.jpeg';
import blood3 from '../../image/25blood/blood3.jpeg';
import blood4 from '../../image/25blood/blood4.jpeg';
import blood5 from '../../image/25blood/blood5.jpeg';
import blood6 from '../../image/25blood/blood6.jpeg';
import blood7 from '../../image/25blood/blood7.jpeg';





const View25Bllod = () => {


  return (
    <div>
         <Header/>

         <div class="container text-center">
                                <div class="row" style= {{ margin : "180px 0px 60px 0px"}}>
            
                                    <div class="col">
                                    <div class="card" >
                                        <img src={blood1} class="card-img " alt="..."/>
                                    </div>
                                    </div>
    
                                    <div class="col">
                                    <div class="card">
                                        <img src={blood2} class="card-img " alt="..."/>  
                                    </div>
                                    </div>
    
                                    <div class="col">
                                    <div class="card" >
                                        <img src={blood3} class="card-img " alt="..."/>
                                    </div>
                                    </div>
    
                                    <div class="col">
                                    <div class="card" >
                                        <img src={blood4} class="card-img " alt="..."/>
                                    </div>
                                    </div>
                                </div>
    
                                <div class="row">
                                 <div class="col">
                                    <div class="card">
                                        <img src={blood5} class="card-img " alt="..."/>
                                    </div>
                                    </div>
    
                                    <div class="col">
                                    <div class="card">
                                        <img src={blood6} class="card-img " alt="..."/>
                                    </div>
                                    </div>
    
                                    <div class="col">
                                    <div class="card">
                                        <img src={blood7} class="card-img " alt="..."/>
                                    </div>
                                    </div>
    
                                    <div class="col">
                                    
                                    </div>
    
                                </div>



                            </div>
    

    </div>
  )
}

export default View25Bllod 