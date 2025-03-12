import React, { useEffect } from 'react';
// import axios from 'axios';
// import { useState } from 'react';
import {NavLink,Link} from 'react-router-dom';


import Header from '../Headers/Header';
import Footer from '../Footer';

import YLTF from '../../image/project/YLTF.png';
import CSCS from '../../image/project/CSCS.png';
// import CPA from '../../image/project/CPA.png';

const ViewProjects7 = () => {


return(
    

    <div>
        <Header/>

        <div class="container text-center">
                        <div class="row">
                        <h3 class="text-uppercase" style= {{ margin : "140px 0px 60px 0px", fontWeight:"bold", textAlign:"center" , fontWeight : "800"}}>Youth Governance & Institutional Development</h3>
                            <div class="col">
                                <div class="card" style={{height:"600px", borderRadius: "15px", margin:"20px", boxShadow: "2px 2px 10px rgba(0,0,0,0.3)"}}>
                                    <img src={YLTF} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h5 class="card-title" style = {{textAlign:"left", fontWeight : "700" }}>Youth-Led Task Force – The Volunteer Youth Wing of CYN</h5><br/>
                                        <h6 class="card-subtitle mb-2 text-body-secondary" style = {{textAlign:"left" }}>A structured network providing:</h6><br/>
                                        <p style = {{textAlign:"left"}}>•	Opportunities for youth-led community initiatives.<br/>
                                                                        •	Leadership training and project management experience.<br/>
                                                                        •	Pathways to higher roles within CYN and international youth organizations.<br/>

                                            </p>
                                        
                                    </div>
                                </div>
                            </div>
        
                            <div class="col">
                                <div class="card" style={{height:"600px", borderRadius: "15px",margin:"20px", boxShadow: "2px 2px 10px rgba(0,0,0,0.3)" }}>
                                    <img src={CSCS} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                    <h5 class="card-title" style = {{textAlign:"left", fontWeight : "700" }}>Commonwealth Student Clubs in Schools, Universities, and Other Institutes</h5><br/>
                                        <h6 class="card-subtitle mb-2 text-body-secondary" style = {{textAlign:"left" }}>An initiative to establish youth clubs that:</h6><br/>
                                        <p style = {{textAlign:"left"}}>•	Promote Commonwealth values and leadership.<br/>
                                                                        •	Engage students in social and cultural activities.<br/>
                                                                        •	Offer training in diplomacy and governance.<br/>


                                            </p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="row">
                        <div class="col">
                                <div class="card" style={{height:"600px", borderRadius: "15px", margin:"20px", boxShadow: "2px 2px 10px rgba(0,0,0,0.3)"}}>
                                    <img src={CSCS} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h5 class="card-title" style = {{textAlign:"left", fontWeight : "700" }}>Commonwealth Professional Associations in Sri Lanka</h5><br/>
                                        <h6 class="card-subtitle mb-2 text-body-secondary" style = {{textAlign:"left" }}>A professional network fostering:</h6><br/>
                                        <p style = {{textAlign:"left"}}>•	Cross-industry collaborations among young professionals.<br/>
                                                                        •	Mentorship programs connecting industry leaders with young talent.<br/>
                                                                        •	Workshops and networking events to enhance career prospects.<br/>

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

export default ViewProjects7