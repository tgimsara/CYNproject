import React, { useEffect } from 'react';
// import axios from 'axios';
// import { useState } from 'react';
import {NavLink,Link} from 'react-router-dom';


import Header from '../Headers/Header';
import Footer from '../Footer';

import CSD from '../../image/project/CSD.png';
import NCLB from '../../image/project/NCLB.png';
import CCC from '../../image/project/CCC.png';

const ViewProjects4 = () => {


return(
    

    <div>
        <Header/>

        <div class="container text-center">
                        <div class="row">
                        <h3 class="text-uppercase" style= {{ margin : "40px 0px 60px 0px", fontWeight:"bold", textAlign:"center" , fontWeight : "800"}}>Youth Advocacy & Social Impact</h3>
                            <div class="col col-12 col-md-6 col-lg-6">
                                <div class="card" style={{height:"630px", borderRadius: "15px", margin:"20px", boxShadow: "2px 2px 10px rgba(0,0,0,0.3)"}}>
                                    <img src={CSD} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h5 class="card-title" style = {{textAlign:"left", fontWeight : "700" }}>CYN Social Defenders (Equality, Diversity, Inclusion, Democracy & Youth Participation)</h5><br/>
                                        <h6 class="card-subtitle mb-2 text-body-secondary" style = {{textAlign:"left" }}>A platform advocating for:</h6><br/>
                                        <p style = {{textAlign:"left"}}>•	Youth rights and political engagement.<br/>
                                                                    •	Gender equality and social inclusion.<br/>
                                                                    •	Democratic participation and civic education.<br/>
                                                                    •	Youth-led policy advocacy and leadership training.<br/>

                                            </p>
                                        
                                    </div>
                                </div>
                            </div>
        
                            <div class="col col-12 col-md-6 col-lg-6">
                                <div class="card" style={{height:"630px", borderRadius: "15px",margin:"20px", boxShadow: "2px 2px 10px rgba(0,0,0,0.3)" }}>
                                    <img src={NCLB} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                    <h5 class="card-title" style = {{textAlign:"left", fontWeight : "700" }}>No Child Left Behind – Education for All Children</h5><br/>
                                        <h6 class="card-subtitle mb-2 text-body-secondary" style = {{textAlign:"left" }}>A program ensuring access to quality education for underprivileged children through:</h6><br/>
                                        <p style = {{textAlign:"left"}}>•	Scholarship programs for students in need.<br/>
                                                                    •	Learning centers in underserved communities.<br/>
                                                                    •	Teacher training workshops to improve educational standards.<br/>
                                                                    •	Community-driven education initiatives to promote literacy.<br/>

                                            </p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="row">
                        <div class="col col-12 col-md-6 col-lg-6">
                                <div class="card" style={{height:"630px", borderRadius: "15px", margin:"20px", boxShadow: "2px 2px 10px rgba(0,0,0,0.3)"}}>
                                    <img src={CCC} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h5 class="card-title" style = {{textAlign:"left", fontWeight : "700" }}>CYN Young Climate Champions</h5><br/>
                                        <h6 class="card-subtitle mb-2 text-body-secondary" style = {{textAlign:"left" }}>A youth-led climate action program focused on:</h6><br/>
                                        <p style = {{textAlign:"left"}}>•	Sustainability workshops and awareness campaigns.<br/>
                                                                        •	Community-driven environmental projects.<br/>
                                                                        •	Advocacy for policy changes on climate action.<br/>
                                                                        •	Green entrepreneurship training for young innovators.<br/>


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

export default ViewProjects4