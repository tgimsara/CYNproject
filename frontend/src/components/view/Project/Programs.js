import React, { useEffect } from 'react';
// import axios from 'axios';
// import { useState } from 'react';
import {NavLink,Link} from 'react-router-dom';
import './ourprojects.css';


import Header from '../Headers/Header';
import Footer from '../Footer';


const OurProjects = () => {


return(
    

    <div>
        <Header/>
           
                <div className="home-text">
                <h3 class="text-uppercase" style= {{ margin : "140px 0px 60px 0px", fontWeight:"bold", textAlign:"center" , fontWeight : "800"}}>Key Initiatives & Programs</h3>
                </div>


                <div id="category" className="section-container">
                    <div className="sec-card">
                    <div className="card-box">
                        <div className="card-content">
                        <h3>Career Development & Skills Enhancement</h3>
                        {/* <p>
                        International leadership training and exchange programs.
                        </p> */}
                        <Link aria-current="page" to={"/viewproject1"}>View</Link>
                        </div>
                    </div>
                    </div>

                    <div className="sec-card">
                    <div className="card-box">
                        <div className="card-content">
                        <h3>Youth Recognition & Leadership Development</h3>
                        {/* <p>
                        Encouraging active youth participation in social impact projects.
                        </p> */}
                        <Link aria-current="page" to={"/viewproject2"}>View</Link>
                        </div>
                    </div>
                    </div>

                    <div className="sec-card">
                    <div className="card-box">
                        <div className="card-content">
                        <h3>Sports & Youth Empowerment</h3>
                        {/* <p>
                        Workshops and mentorship programs in leadership, entrepreneurship, and professional development.
                        </p> */}
                        <Link aria-current="page" to={"/viewproject3"}>View</Link>
                        </div>
                    </div>
                    </div>

                    <div className="sec-card">
                    <div className="card-box">
                        <div className="card-content">
                        <h3>Youth Advocacy & Social Impact</h3>
                        {/* <p>
                        Supporting youth-led research and policymaking to amplify young voices in governance and social change.
                        </p> */}
                        <Link aria-current="page" to={"/viewproject4"}>View</Link>
                        </div>
                    </div>
                    </div>

                    <div className="sec-card">
                    <div className="card-box">
                        <div className="card-content">
                        <h3>Global Exchange & Networking</h3>
                        {/* <p>
                        Strengthening global understanding through study tours, international summits, and learning partnerships.
                        </p> */}
                        <Link aria-current="page" to={"/viewproject5"}>View</Link>
                        </div>
                    </div>
                    </div>

                    <div className="sec-card">
                    <div className="card-box">
                        <div className="card-content">
                        <h3>Academic & Research Excellence</h3>
                        {/* <p>
                        Addressing climate action (SDG 13) through youth-led sustainability projects.
                        </p> */}
                        <Link aria-current="page" to={"/viewproject6"}>View</Link>
                        </div>
                    </div>
                    </div>

                    <div className="sec-card">
                    <div className="card-box" >
                        <div className="card-content">
                        <h3>Youth Governance & Institutional Development</h3>
                        {/* <p>
                        Addressing climate action (SDG 13) through youth-led sustainability projects.
                        </p> */}
                        <Link aria-current="page" to={"/viewproject7"}>View</Link>
                        </div>
                    </div>
                    </div>

                </div>
                
                <Footer/>
          </div>

)
}

export default OurProjects