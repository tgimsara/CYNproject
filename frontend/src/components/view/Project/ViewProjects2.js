import React, { useEffect } from 'react';
// import axios from 'axios';
// import { useState } from 'react';
import {NavLink,Link} from 'react-router-dom';


import Header from '../Headers/Header';
import Footer from '../Footer';

import CYA from '../../image/project/CYA.png';
import CIYC from '../../image/project/CIYC.png';
import CYVS from '../../image/project/CYVS.png';
import SLMC from '../../image/project/SLMC.png';

const ViewProjects2 = () => {


return(
    

    <div>
        <Header/>

        <div class="container text-center">
                        <div class="row">
                        <h3 class="text-uppercase" style= {{ margin : "140px 0px 60px 0px", fontWeight:"bold", textAlign:"center" , fontWeight : "800"}}>Youth Recognition & Leadership Development</h3>
                            <div class="col col-12 col-md-6 col-lg-6">
                                <div class="card" style={{height:"800px", borderRadius: "15px", margin:"20px", boxShadow: "2px 2px 10px rgba(0,0,0,0.3)"}}>
                                    <img src={CYA} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h5 class="card-title" style = {{textAlign:"left", fontWeight : "700" }}>CYN Youth Awards</h5><br/>
                                        <h6 class="card-subtitle mb-2 text-body-secondary" style = {{textAlign:"left" }}>An annual awards program celebrating outstanding young leaders and changemakers. Categories include:</h6><br/>
                                        <p style = {{textAlign:"left"}}>•	Leadership & Governance<br/>
                                                                        •	Entrepreneurship & Innovation<br/>
                                                                        •	Community Service & Volunteering<br/>
                                                                        •	Climate Action & Sustainability<br/>
                                                                        •	Sports & Cultural Excellence<br/><br/>
                                        </p>
                                        <h6 class="card-subtitle mb-2 text-body-secondary" style = {{textAlign:"left" }}>Award winners receive:</h6><br/>
                                        <p style = {{textAlign:"left"}}>•	Recognition from government and international bodies.<br/>
                                                                        •	Funding opportunities for their initiatives.<br/>
                                                                        •	Exclusive networking and leadership training programs.
                                        </p>
                                        
                                    </div>
                                </div>
                            </div>
        
                            <div class="col col-12 col-md-6 col-lg-6">
                                <div class="card" style={{height:"800px", borderRadius: "15px",margin:"20px", boxShadow: "2px 2px 10px rgba(0,0,0,0.3)" }}>
                                    <img src={CIYC} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                    <h5 class="card-title" style = {{textAlign:"left", fontWeight : "700" }}>Colombo International Youth Conference</h5><br/>
                                        <h6 class="card-subtitle mb-2 text-body-secondary" style = {{textAlign:"left" }}>A global summit bringing together young leaders, policymakers, and industry experts to:</h6><br/>
                                        <p style = {{textAlign:"left"}}>•	Discuss global challenges and youth-led solutions.<br/>
                                                                        •	Engage in policy dialogues and roundtable discussions.<br/>
                                                                        •	Provide leadership training and capacity-building workshops.<br/>
                                                                        •	Foster cross-country youth collaboration and partnerships.<br/>

                                            </p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="row">
                        <div class="col col-12 col-md-6 col-lg-6">
                                <div class="card" style={{height:"600px", borderRadius: "15px", margin:"20px", boxShadow: "2px 2px 10px rgba(0,0,0,0.3)"}}>
                                    <img src={CYVS} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h5 class="card-title" style = {{textAlign:"left", fontWeight : "700" }}>Commonwealth Youth Volunteer Scheme</h5><br/>
                                        <h6 class="card-subtitle mb-2 text-body-secondary" style = {{textAlign:"left" }}>A structured volunteering initiative that:</h6><br/>
                                        <p style = {{textAlign:"left"}}>•	Engages youth in community service projects.<br/>
                                                                        •	Provides training in project management and leadership.<br/>
                                                                        •	Recognizes outstanding volunteers with certifications and awards.<br/>
                                                                        •	Connects volunteers with international volunteering opportunities.<br/>

                                            </p>
                                        
                                    </div>
                                </div>
                            </div>
        
                            <div class="col col-12 col-md-6 col-lg-6 ">
                                <div class="card" style={{height:"600px", borderRadius: "15px", margin:"20px", boxShadow: "2px 2px 10px rgba(0,0,0,0.3)"}}>
                                    <img src={SLMC} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h5 class="card-title" style = {{textAlign:"left", fontWeight : "700" }}>Sri Lanka Model Commonwealth</h5><br/>
                                        <h6 class="card-subtitle mb-2 text-body-secondary" style = {{textAlign:"left" }}>A simulation program where youth:</h6><br/>
                                        <p style = {{textAlign:"left"}}>•	Engage in policy debates and discussions.<br/>
                                                                        •	Learn about international relations and diplomacy.<br/>
                                                                        •	Develop leadership and negotiation skills.<br/>

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

export default ViewProjects2