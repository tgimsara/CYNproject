import React, { useEffect } from 'react';
// import axios from 'axios';
// import { useState } from 'react';
import {NavLink,Link} from 'react-router-dom';


import Header from '../Headers/Header';
import Footer from '../Footer';

import CST from '../../image/project/CST.png';
import CGS from '../../image/project/CGS.png';
import CIYWS from '../../image/project/CIYWS.png';

const ViewProjects5 = () => {


return(
    

    <div>
        <Header/>

        <div class="container text-center">
                        <div class="row">
                        <h3 class="text-uppercase" style= {{ margin : "140px 0px 60px 0px", fontWeight:"bold", textAlign:"center" , fontWeight : "800"}}>Global Exchange & Networking</h3>
                            <div class="col">
                                <div class="card" style={{height:"630px", borderRadius: "15px", margin:"20px", boxShadow: "2px 2px 10px rgba(0,0,0,0.3)"}}>
                                    <img src={CST} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h5 class="card-title" style = {{textAlign:"left", fontWeight : "700" }}>CYN Study Tours – International Study Visits & Global Exchange for Sustainable Development</h5><br/>
                                        <h6 class="card-subtitle mb-2 text-body-secondary" style = {{textAlign:"left" }}>A program facilitating international educational and cultural exchanges, including:</h6><br/>
                                        <p style = {{textAlign:"left"}}>•	Visits to global institutions and industries.<br/>
                                                                        •	Academic collaborations with universities worldwide.<br/>
                                                                        •	Workshops on international development and diplomacy.<br/>
                                                                        •	Opportunities for youth to participate in global conferences.<br/>

                                            </p>
                                        
                                    </div>
                                </div>
                            </div>
        
                            <div class="col">
                                <div class="card" style={{height:"630px", borderRadius: "15px",margin:"20px", boxShadow: "2px 2px 10px rgba(0,0,0,0.3)" }}>
                                    <img src={CGS} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                    <h5 class="card-title" style = {{textAlign:"left", fontWeight : "700" }}>Commonwealth Global Society – The World-Connected Commonwealth Group</h5><br/>
                                        <h6 class="card-subtitle mb-2 text-body-secondary" style = {{textAlign:"left" }}>A network fostering international cooperation among young professionals, offering:</h6><br/>
                                        <p style = {{textAlign:"left"}}>•	Collaborative projects on global challenges.<br/>
                                                                            •	Cross-country mentorship programs.<br/>
                                                                            •	Virtual knowledge-sharing sessions and events.<br/>


                                            </p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="row">
                        <div class="col">
                                <div class="card" style={{height:"580px", borderRadius: "15px", margin:"20px", boxShadow: "2px 2px 10px rgba(0,0,0,0.3)"}}>
                                    <img src={CIYWS} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h5 class="card-title" style = {{textAlign:"left", fontWeight : "700" }}>Colombo International Youth Workers’ Summit</h5><br/>
                                        <h6 class="card-subtitle mb-2 text-body-secondary" style = {{textAlign:"left" }}>A platform for youth development professionals to:</h6><br/>
                                        <p style = {{textAlign:"left"}}>•	Share best practices in youth empowerment.<br/>
                                                                        •	Discuss policy recommendations for youth engagement.<br/>
                                                                        •	Foster regional and international collaboration.<br/>

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

export default ViewProjects5