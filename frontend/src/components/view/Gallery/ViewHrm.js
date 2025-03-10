import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
// import axios from 'axios';
import Header from '../Headers/Header';

import INTI1 from '../../image/hrm/INTI1.png';
import INTI2 from '../../image/hrm/INTI2.png';
import INTI3 from '../../image/hrm/INTI3.png';
import INTI4 from '../../image/hrm/INTI4.png';

import KGoC1 from '../../image/hrm/KGoC1.png';
import KGoC2 from '../../image/hrm/KGoC2.png';
import KGoC3 from '../../image/hrm/KGoC3.png';
import KGoC4 from '../../image/hrm/KGoC4.png';

import KL1 from '../../image/hrm/KL1.png';
import KL2 from '../../image/hrm/KL2.png';
import KL3 from '../../image/hrm/KL3.png';
import KL4 from '../../image/hrm/KL4.png';

import MHRM1 from '../../image/hrm/MHRM1.png';
import MHRM2 from '../../image/hrm/MHRM2.png';
import MHRM3 from '../../image/hrm/MHRM3.png';
import MHRM4 from '../../image/hrm/MHRM4.png';

import MTE1 from '../../image/hrm/MTE1.png';
import MTE2 from '../../image/hrm/MTE2.png';
import MTE3 from '../../image/hrm/MTE3.png';
import MTE4 from '../../image/hrm/MTE4.png';

import UMW1 from '../../image/hrm/UMW1.png';
import UMW2 from '../../image/hrm/UMW2.png';
import UMW3 from '../../image/hrm/UMW3.png';
import UMW4 from '../../image/hrm/UMW4.png';





const ViewGallery1 = () => {


  return (
    <div>
         <Header/>

         <div class="container text-center">
                                <div class="row">
            
                                    <p style = {{ margin : "140px 0px 60px 0px", textAlign:"left", fontWeight : "700"  }}>INTI International University and Colleges</p>
    
                                    <div class="col">
                                    <div class="card" >
                                        <img  src={INTI1} class="card-img" alt="..."/>
                                    </div>
                                    </div>
    
                                    <div class="col">
                                    <div class="card">
                                        <img  src={INTI2} class="card-img" alt="..."/>  
                                    </div>
                                    </div>
    
                                    <div class="col">
                                    <div class="card" >
                                        <img src={INTI3} class="card-img " alt="..."/>
                                    </div>
                                    </div>
    
                                    <div class="col">
                                    <div class="card" >
                                        <img src={INTI4} class="card-img " alt="..."/>
                                    </div>
                                    </div>
                                </div>
    
                                <div class="row">
                                <p style = {{ margin : "80px 0px 60px 0px", textAlign:"left", fontWeight : "700"  }}>University Malaya Wales</p>
   
    
                                    <div class="col">
                                    <div class="card">
                                        <img src={UMW1} class="card-img " alt="..."/>
                                    </div>
                                    </div>
    
                                    <div class="col">
                                    <div class="card">
                                        <img src={UMW2} class="card-img " alt="..."/>
                                    </div>
                                    </div>
    
                                    <div class="col">
                                    <div class="card">
                                        <img src={UMW3} class="card-img " alt="..."/>
                                    </div>
                                    </div>
    
                                    <div class="col">
                                    <div class="card">
                                        <img src={UMW4} class="card-img " alt="..."/>
                                    </div>
                                    </div>
    
                                </div>


                                <div class="row">
                                <p style = {{ margin : "80px 0px 60px 0px", textAlign:"left", fontWeight : "700"  }}>Malaysian Technology Expo </p>
   
    
                                    <div class="col">
                                    <div class="card">
                                        <img src={MTE1} class="card-img " alt="..."/>
                                    </div>
                                    </div>
    
                                    <div class="col">
                                    <div class="card">
                                        <img src={MTE2} class="card-img " alt="..."/>
                                    </div>
                                    </div>
    
                                    <div class="col">
                                    <div class="card">
                                        <img src={MTE3} class="card-img " alt="..."/>
                                    </div>
                                    </div>
    
                                    <div class="col">
                                    <div class="card">
                                        <img src={MTE4} class="card-img " alt="..."/>
                                    </div>
                                    </div>
    
                                </div>


                                <div class="row">
                                <p style = {{ margin : "80px 0px 60px 0px", textAlign:"left", fontWeight : "700"  }}>Knowledge Group of Companies</p>
   
    
                                    <div class="col">
                                    <div class="card">
                                        <img src={KGoC1} class="card-img " alt="..."/>
                                    </div>
                                    </div>
    
                                    <div class="col">
                                    <div class="card">
                                        <img src={KGoC2} class="card-img " alt="..."/>
                                    </div>
                                    </div>
    
                                    <div class="col">
                                    <div class="card">
                                        <img src={KGoC3} class="card-img " alt="..."/>
                                    </div>
                                    </div>
    
                                    <div class="col">
                                    <div class="card">
                                        <img src={KGoC4} class="card-img " alt="..."/>
                                    </div>
                                    </div>
    
                                </div>


                                <div class="row">
                                <p style = {{ margin : "80px 0px 60px 0px", textAlign:"left", fontWeight : "700"  }}>Kuala Lumpur & Putrajaya Indian Chamber of Commerce</p>
   
    
                                    <div class="col">
                                    <div class="card">
                                        <img src={KL1} class="card-img " alt="..."/>
                                    </div>
                                    </div>
    
                                    <div class="col">
                                    <div class="card">
                                        <img src={KL2} class="card-img " alt="..."/>
                                    </div>
                                    </div>
    
                                    <div class="col">
                                    <div class="card">
                                        <img src={KL3} class="card-img " alt="..."/>
                                    </div>
                                    </div>
    
                                    <div class="col">
                                    <div class="card">
                                        <img src={KL4} class="card-img " alt="..."/>
                                    </div>
                                    </div>
    
                                </div>


    
                                <div class="row">
                                <p style = {{ margin : "80px 0px 60px 0px", textAlign:"left", fontWeight : "700"  }}>Malaysian Institute of Human Resource Management</p>
   
    
                                    <div class="col">
                                    <div class="card">
                                        <img src={MHRM1} class="card-img " alt="..."/>
                                    </div>
                                    </div>
    
                                    <div class="col">
                                    <div class="card">
                                        <img src={MHRM2} class="card-img " alt="..."/>
                                    </div>
                                    </div>
    
                                    <div class="col">
                                    <div class="card">
                                        <img src={MHRM3} class="card-img " alt="..."/>
                                    </div>
                                    </div>
    
                                    <div class="col">
                                    <div class="card">
                                        <img src={MHRM4} class="card-img " alt="..."/>
                                    </div>
                                    </div>
    
                                </div>
    
    
                            </div>
    

    </div>
  )
}

export default ViewGallery1