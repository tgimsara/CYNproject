import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
// import axios from 'axios';
import Header from '../Headers/Header';
import Footer from '../Footer';

import eye1 from '../../image/eye1.jpeg';
import eye2 from '../../image/eye2.jpeg';
import eye3 from '../../image/eye3.jpeg';
import eye4 from '../../image/eye4.jpeg';
import eye5 from '../../image/eye5.jpeg';
import eye6 from '../../image/eye6.jpeg';
import eye7 from '../../image/eye7.jpeg';
import eye from '../../image/eye.jpeg';




const ViewEye = () => {


  return (
    <div>
         <Header/>

         <div class="container text-center">
                                <div class="row" style= {{ margin : "180px 0px 60px 0px"}}>
            
                                    <div class="col">
                                    <div class="card" >
                                        <img src={eye1} class="card-img " alt="..."/>
                                    </div>
                                    </div>
    
                                    <div class="col">
                                    <div class="card">
                                        <img src={eye2} class="card-img " alt="..."/>  
                                    </div>
                                    </div>
    
                                    <div class="col">
                                    <div class="card" >
                                        <img src={eye3} class="card-img " alt="..."/>
                                    </div>
                                    </div>
    
                                    <div class="col">
                                    <div class="card" >
                                        <img src={eye4} class="card-img " alt="..."/>
                                    </div>
                                    </div>
                                </div>
    
                                <div class="row">
                                 <div class="col">
                                    <div class="card">
                                        <img src={eye5} class="card-img " alt="..."/>
                                    </div>
                                    </div>
    
                                    <div class="col">
                                    <div class="card">
                                        <img src={eye6} class="card-img " alt="..."/>
                                    </div>
                                    </div>
    
                                    <div class="col">
                                    <div class="card">
                                        <img src={eye7} class="card-img " alt="..."/>
                                    </div>
                                    </div>
    
                                    <div class="col">
                                    <div class="card">
                                        <img src={eye} class="card-img " alt="..."/>
                                    </div>
                                    </div>
    
                                </div>

                            </div>
    
    <Footer/>
    </div>
  )
}

export default ViewEye