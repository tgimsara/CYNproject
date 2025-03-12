import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
// import axios from 'axios';
import Header from '../Headers/Header';
import Footer from '../Footer';

import cele1 from '../../image/cele1.png';
import cele2 from '../../image/cele2.png';
import  cele3 from '../../image/cele3.png';
import  cele4 from '../../image/cele4.png';





const CDayCelebrate = () => {


  return (
    <div>
         <Header/>

         <div class="container text-center">
                                <div class="row" style= {{ margin : "180px 0px 60px 0px"}}>
            
                                    <div class="col">
                                    <div class="card" >
                                        <img src={cele1} class="card-img " alt="..."/>
                                    </div>
                                    </div>
    
                                    <div class="col">
                                    <div class="card">
                                        <img src={cele2} class="card-img " alt="..."/>  
                                    </div>
                                    </div>
    
                                    <div class="col">
                                    <div class="card" >
                                        <img src={cele3} class="card-img " alt="..."/>
                                    </div>
                                    </div>
    
                                    <div class="col">
                                    <div class="card" >
                                        <img src={cele4} class="card-img " alt="..."/>
                                    </div>
                                    </div>
                                </div>
    
                                

                            </div>
    
    <Footer/>
    </div>
  )
}

export default CDayCelebrate