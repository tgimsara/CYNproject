import React, { useEffect } from 'react';
// import axios from 'axios';
// import { useState } from 'react';
import {NavLink,Link} from 'react-router-dom';


import Header from '../Headers/Header';
import Footer from '../Footer';

import CCP from '../../image/project/CCP.png';
import EYL from '../../image/project/EYL.png';
import SB from '../../image/project/SB.png';

const ViewProjects1 = () => {


return(
    

    <div>
        <Header/>

        <div class="container text-center">
                        <div class="row">
                        <h3 class="text-uppercase" style= {{ margin : "40px 0px 60px 0px", fontWeight:"bold", textAlign:"center" , fontWeight : "800"}}>Career Development & Skills Enhancement</h3>
                            <div class="col col-12 col-md-6 col-lg-6">
                                <div class="card" style={{height:"700px", borderRadius: "15px", margin:"20px", boxShadow: "2px 2px 10px rgba(0,0,0,0.3)"}}>
                                    <img src={CCP} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h5 class="card-title" style = {{textAlign:"left", fontWeight : "700" }}>CYN Career Prospect – Career Success Program</h5><br/>
                                        <h6 class="card-subtitle mb-2 text-body-secondary" style = {{textAlign:"left" }}>A structured career guidance program designed to help youth transition from education to employment. The program includes:</h6><br/>
                                        <p style = {{textAlign:"left"}}>•	Career counseling sessions with industry experts and mentors. <br/>
                                            •	Resume-building workshops and professional LinkedIn profile development.<br/>
                                            •	Internship and job placement assistance through industry partnerships.<br/>
                                            •	Soft skills and leadership training to enhance employability.<br/>
                                            •	Networking events with professionals from various fields.
                                            </p>
                                        
                                    </div>
                                </div>
                            </div>
        
                            <div class="col col-12 col-md-6 col-lg-6">
                                <div class="card" style={{height:"700px", borderRadius: "15px",margin:"20px", boxShadow: "2px 2px 10px rgba(0,0,0,0.3)" }}>
                                    <img src={EYL} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                    <h5 class="card-title" style = {{textAlign:"left", fontWeight : "700" }}>Expand Your Limits – The Future Skills Program</h5><br/>
                                        <h6 class="card-subtitle mb-2 text-body-secondary" style = {{textAlign:"left" }}>A future-focused skill development initiative that prepares youth for the evolving job market. It offers:</h6><br/>
                                        <p style = {{textAlign:"left"}}>•	Training in digital literacy, coding, AI, and data analytics.<br/>
                                                        •	Critical thinking, problem-solving, and entrepreneurship workshops.<br/>
                                                        •	Cross-cultural communication and remote work readiness training.<br/>
                                                        •	Certification programs in collaboration with leading educational institutions.

                                            </p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="row">
                        <div class="col col-12 col-md-6 col-lg-6">
                                <div class="card" style={{height:"670px", borderRadius: "15px", margin:"20px", boxShadow: "2px 2px 10px rgba(0,0,0,0.3)"}}>
                                    <img src={SB} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h5 class="card-title" style = {{textAlign:"left", fontWeight : "700" }}>Skill Bank – The Global Skills Hub</h5><br/>
                                        <h6 class="card-subtitle mb-2 text-body-secondary" style = {{textAlign:"left" }}>A digital and physical platform that connects young people with:</h6><br/>
                                        <p style = {{textAlign:"left"}}>•	Skill development programs aligned with industry needs.<br/>
                                                •	Mentorship opportunities with professionals from various sectors.<br/>
                                                •	Short courses and workshops in business, tech, and creative industries.<br/>
                                                •	Job shadowing opportunities with industry leaders.<br/>
                                                •	A global network of young professionals sharing knowledge and experiences.

                                            </p>
                                        
                                    </div>
                                </div>
                            </div>
        
                            <div class="col">
                                {/* <div class="card" style={{ borderRadius: "35px",margin:"20px", boxShadow: "2px 2px 10px rgba(0,0,0,0.3)" }}>
                                    <img src={local} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                    <h5 class="card-title" style = {{textAlign:"left", fontWeight : "700" }}>Expand Your Limits – The Future Skills Program</h5>
                                        <h6 class="card-subtitle mb-2 text-body-secondary" style = {{textAlign:"left" }}>A future-focused skill development initiative that prepares youth for the evolving job market. It offers:</h6><br/>
                                        <p style = {{textAlign:"left"}}>•	Training in digital literacy, coding, AI, and data analytics.<br/>
                                                        •	Critical thinking, problem-solving, and entrepreneurship workshops.<br/>
                                                        •	Cross-cultural communication and remote work readiness training.<br/>
                                                        •	Certification programs in collaboration with leading educational institutions.

                                            </p>
                                    </div>
                                </div> */}
                            </div>
                        </div>
        
                    </div>
           

       <Footer/>     
    </div>

)
}

export default ViewProjects1