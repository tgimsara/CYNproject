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

        {/* <div class="container text-center">
        <div class="row">
        <h3 class="text-uppercase" style= {{ margin : "140px 0px 60px 0px", fontWeight:"bold", textAlign:"center" , fontWeight : "800"}}>Key Initiatives & Programs</h3>
            <div class="col">
                <div class="card" style={{margin:"40px", boxShadow: "2px 2px 10px rgba(0,0,0,0.1)" }}>
                  <div class="card-body">
                    <h3 class="card-title" style = {{ fontWeight:"bold", margin: "20px 0px 0px 0px", textAlign:"left"}}>Career Development & Skills Enhancement</h3>
                    <a href="/viewproject1" style = {{ margin : "90px 0px 0px 0px" }} class="btn btn-primary">See More</a>
                  </div>
                </div>
              </div>

              <div class="col">
                <div class="card" style={{width:"330px", height:"480px",margin:"40px", boxShadow: "2px 2px 10px rgba(0,0,0,0.1)" }}>
                  <div class="card-body">
                    <h6 class="card-title" style = {{ fontWeight:"bold", margin: "20px 0px 0px 0px", textAlign:"left"}}>Bharat Sri Lanka higher education summit in Colombo organised by Association of Indian Universities AIU & SAPE Events & Media Pvt ltd in association with  High Commission of India to Sri Lanka and Ministry of Education Government of Sri Lanka. <br/><br/> 28th of January 2025</h6>
                    <a href="/galadari" style = {{ margin : "15px 0px 0px 0px" }} class="btn btn-primary">See More</a>
                  </div>
                </div>
              </div>

              <div class="col">
                <div class="card" style={{width:"330px", height:"480px",margin:"40px", boxShadow: "2px 2px 10px rgba(0,0,0,0.1)" }}>
                  <div class="card-body">
                    <h6 class="card-title" style = {{ fontWeight:"bold", margin: "20px 0px 0px 0px", textAlign:"left"}}>International Professional Study Tour for Professinal Psychological Counsellors - Malaysia <br/><br/> 17th to 23rd of July 2024</h6>
                    <a href="/viewgallery1" style = {{ margin : "90px 0px 0px 0px" }} class="btn btn-primary">See More</a>
                  </div>
                </div>
              </div>

        </div>
        </div> */}
           
                <div className="home-text">
                <h3 class="text-uppercase" style= {{ margin : "140px 0px 60px 0px", fontWeight:"bold", textAlign:"center" , fontWeight : "800"}}>Key Initiatives & Programs</h3>
                </div>


                <div id="category" className="section-container ">
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