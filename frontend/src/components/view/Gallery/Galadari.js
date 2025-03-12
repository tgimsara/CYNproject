import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
// import axios from 'axios';
import Header from '../Headers/Header';
import Footer from '../Footer';

import galadari1 from '../../image/galadari1.png';
import galadari2 from '../../image/galadari2.png';
import galadari3 from '../../image/galadari3.png';
import galadari4 from '../../image/galadari4.png';
import galadari5 from '../../image/galadari5.png';
import galadari6 from '../../image/galadari6.png';




const ViewEye = () => {


  return (
    <div>
         <Header/>

         <div class="container text-center">
                                <div class="row" style= {{ margin : "180px 0px 60px 0px"}}>
            
                                    <div class="col">
                                    <div class="card" >
                                        <img src={galadari1} class="card-img " alt="..."/>
                                    </div>
                                    </div>
    
                                    <div class="col">
                                    <div class="card">
                                        <img src={galadari2} class="card-img " alt="..."/>  
                                    </div>
                                    </div>
    
                                    <div class="col">
                                    <div class="card" >
                                        <img src={galadari3} class="card-img " alt="..."/>
                                    </div>
                                    </div>
    
                                    <div class="col">
                                    <div class="card" >
                                        <img src={galadari4} class="card-img " alt="..."/>
                                    </div>
                                    </div>
                                </div>


                                <div class="row">
            
                                    <div class="col">
                                    <div class="card" >
                                        <img src={galadari5} class="card-img " alt="..."/>
                                    </div>
                                    </div>
    
                                    <div class="col">
                                    <div class="card">
                                        <img src={galadari6} class="card-img " alt="..."/>  
                                    </div>
                                    </div>
    
                                    <div class="col">
                                    {/* <div class="card" >
                                        <img src={galadari3} class="card-img " alt="..."/>
                                    </div> */}
                                    </div>
    
                                    <div class="col">
                                    {/* <div class="card" >
                                        <img src={galadari4} class="card-img " alt="..."/>
                                    </div> */}
                                    </div>
                                </div>
    
                                


                               

                            </div>
    
    <Footer/>
    </div>
  )
}

export default ViewEye