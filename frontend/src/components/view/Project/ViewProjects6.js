import React, { useEffect } from 'react';
// import axios from 'axios';
// import { useState } from 'react';
import {NavLink,Link} from 'react-router-dom';


import Header from '../Headers/Header';
import Footer from '../Footer';

// import CIRS from '../../image/project/CIRS.png';
import CSCS from '../../image/project/CSCS.png';


const ViewProjects6 = () => {


return(
    

    <div>
        <Header/>

        <div class="container text-center">
                        <div class="row">
                        <h3 class="text-uppercase" style= {{ margin : "140px 0px 60px 0px", fontWeight:"bold", textAlign:"center" , fontWeight : "800"}}>Academic & Research Excellence</h3>
                            <div class="col">
                                <div class="card" style={{height:"600px", width:"600px", borderRadius: "15px", margin:"20px 350px", boxShadow: "2px 2px 10px rgba(0,0,0,0.3)"}}>
                                    <img src={CSCS} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h5 class="card-title" style = {{textAlign:"left", fontWeight : "700" }}>Colombo International Research Symposium</h5><br/>
                                        <h6 class="card-subtitle mb-2 text-body-secondary" style = {{textAlign:"left" }}>An academic conference for young researchers to:</h6><br/>
                                        <p style = {{textAlign:"left"}}>•	Present original research on social, economic, and environmental issues.<br/>
                                                                        •	Publish in academic journals and policy reports.<br/>
                                                                        •	Collaborate with leading researchers and institutions.<br/>

                                            </p>
                                        
                                    </div>
                                </div>

                                
                            </div>
        
                            
                        </div>


                        
        
                    </div>
           
    <Footer/>
            
    </div>

)
}

export default ViewProjects6