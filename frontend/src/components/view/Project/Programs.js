import React, { useEffect } from 'react';
// import axios from 'axios';
// import { useState } from 'react';
import {NavLink,Link} from 'react-router-dom';
import './ourprojects.css';


import Header from '../Headers/Header';


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
                        <h3>Global Youth Leadership Programs</h3>
                        <p>
                        International leadership training and exchange programs.
                        </p>
                        <Link aria-current="page" to={"/"}>View</Link>
                        </div>
                    </div>
                    </div>

                    <div className="sec-card">
                    <div className="card-box">
                        <div className="card-content">
                        <h3>Community Engagement & Volunteerism</h3>
                        <p>
                        Encouraging active youth participation in social impact projects.
                        </p>
                        <Link aria-current="page" to={""}>View</Link>
                        </div>
                    </div>
                    </div>

                    <div className="sec-card">
                    <div className="card-box">
                        <div className="card-content">
                        <h3>Capacity Building & Skill Development</h3>
                        <p>
                        Workshops and mentorship programs in leadership, entrepreneurship, and professional development.
                        </p>
                        <Link aria-current="page" to={""}>View</Link>
                        </div>
                    </div>
                    </div>

                    <div className="sec-card">
                    <div className="card-box">
                        <div className="card-content">
                        <h3>Policy Advocacy & Research</h3>
                        <p>
                        Supporting youth-led research and policymaking to amplify young voices in governance and social change.
                        </p>
                        <Link aria-current="page" to={""}>View</Link>
                        </div>
                    </div>
                    </div>

                    <div className="sec-card">
                    <div className="card-box">
                        <div className="card-content">
                        <h3>Cultural & Educational Exchange Programs</h3>
                        <p>
                        Strengthening global understanding through study tours, international summits, and learning partnerships.
                        </p>
                        <Link aria-current="page" to={""}>View</Link>
                        </div>
                    </div>
                    </div>

                    <div className="sec-card">
                    <div className="card-box">
                        <div className="card-content">
                        <h3>Climate & Sustainability Initiatives</h3>
                        <p>
                        Addressing climate action (SDG 13) through youth-led sustainability projects.
                        </p>
                        <Link aria-current="page" to={""}>View</Link>
                        </div>
                    </div>
                    </div>

                </div>
          </div>

)
}

export default OurProjects