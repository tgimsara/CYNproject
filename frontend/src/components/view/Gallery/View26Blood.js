import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
// import axios from 'axios';
import Header from '../Headers/Header';
import Footer from '../Footer';

import bloodd1 from '../../image/26blood/bloodd1.jpg';
import bloodd2 from '../../image/26blood/bloodd2.jpg';
import bloodd3 from '../../image/26blood/bloodd3.jpg';
import bloodd4 from '../../image/26blood/bloodd4.jpg';






const View26Bllod = () => {


  return (
    <div>
         <Header/>

         <div class="container text-center">
                                <div class="row" style= {{ margin : "40px 0px 60px 0px"}}>
            
                                    <div class="col">
                                    <div class="card" >
                                        <img src={bloodd1} class="card-img " alt="..."/>
                                    </div>
                                    </div>
    
                                    <div class="col">
                                    <div class="card">
                                        <img src={bloodd2} class="card-img " alt="..."/>  
                                    </div>
                                    </div>
    
                                    <div class="col">
                                    <div class="card" >
                                        <img src={bloodd3} class="card-img " alt="..."/>
                                    </div>
                                    </div>
    
                                    <div class="col">
                                    <div class="card" >
                                        <img src={bloodd4} class="card-img " alt="..."/>
                                    </div>
                                    </div>
                                </div>
    



                            </div>
    
    <Footer/>
    </div>
  )
}

export default View26Bllod 