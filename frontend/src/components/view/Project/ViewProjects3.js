import React, { useEffect } from 'react';
// import axios from 'axios';
// import { useState } from 'react';
import {NavLink,Link} from 'react-router-dom';


import Header from '../Headers/Header';
import Footer from '../Footer';

import PfSL from '../../image/project/PfSL.png';
import PfSLCT from '../../image/project/PfSLCT.png';


const ViewProjects3 = () => {


return(
    

    <div>
        <Header/>

        <div class="container text-center">
                        <div class="row">
                        <h3 class="text-uppercase" style= {{ margin : "140px 0px 60px 0px", fontWeight:"bold", textAlign:"center" , fontWeight : "800"}}>Sports & Youth Empowerment</h3>
                            <div class="col">
                                <div class="card" style={{height:"620px", borderRadius: "15px", margin:"20px", boxShadow: "2px 2px 10px rgba(0,0,0,0.3)"}}>
                                    <img src={PfSL} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h5 class="card-title" style = {{textAlign:"left", fontWeight : "700" }}>Play for Sri Lanka – National Youth Sports Program</h5><br/>
                                        <h6 class="card-subtitle mb-2 text-body-secondary" style = {{textAlign:"left" }}>A program designed to discover and nurture young talent from rural areas, providing:</h6><br/>
                                        <p style = {{textAlign:"left"}}>•	Talent scouting camps in schools and communities.<br/>
                                                                        •	Access to professional training and coaching.<br/>
                                                                        •	Sponsorships for underprivileged young athletes.<br/>
                                                                        •	Pathways for national and international sports representation.<br/>

                                            </p>
                                        
                                    </div>
                                </div>
                            </div>
        
                            <div class="col">
                                <div class="card" style={{height:"620px", borderRadius: "15px",margin:"20px", boxShadow: "2px 2px 10px rgba(0,0,0,0.3)" }}>
                                    <img src={PfSLCT} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                    <h5 class="card-title" style = {{textAlign:"left", fontWeight : "700" }}>Play for Sri Lanka Cricket Tours</h5><br/>
                                        <h6 class="card-subtitle mb-2 text-body-secondary" style = {{textAlign:"left" }}>An initiative promoting Sri Lanka’s cricketing talent through:</h6><br/>
                                        <p style = {{textAlign:"left"}}>•	Youth cricket development programs at grassroots levels.<br/>
                                                                        •	International exposure through friendly matches and tournaments.<br/>
                                                                        •	Collaboration with cricket clubs and academies globally.<br/>
                                                                        •	Scholarship programs for young cricketers.<br/>

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

export default ViewProjects3