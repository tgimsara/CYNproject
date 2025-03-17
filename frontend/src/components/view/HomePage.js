import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
// import axios from 'axios';
// import { useState } from 'react';
// import {NavLink,Link} from 'react-router-dom';


import image1 from '../image/image1.png';
import image2 from '../image/image2.png';
import image3 from '../image/image3.png';

import SDG1 from '../image/SDG1.png';
import SDG4 from '../image/SDG4.png';
import SDG5 from '../image/SDG5.png';
import SDG8 from '../image/SDG8.png';
import SDG9 from '../image/SDG9.png';
import SDG10 from '../image/SDG10.png';
import SDG11 from '../image/SDG11.png';
import SDG13 from '../image/SDG13.png';
import SDG16 from '../image/SDG16.png';
import SDG17 from '../image/SDG17.png';

import NotRegHeader from './Headers/NotRegHeader';
import Footer from './Footer';


const HomePage = () => {

    // const id =localStorage.getItem("id");

    return(

        <div>

            <NotRegHeader/>

            
                <div class="container text-center">
                    <div class="row">
                        <div class="col">
                            <h1 class="text-uppercase" style= {{ margin : "200px 0px 60px 0px", fontWeight:"bold", fontWeight:"800", textAlign:"left" }}>Commonwealth Youth Network of Sri Lanka <span style={{ color:"#00008B" }}> (CYN Sri Lanka)</span></h1>

                            <p class="main" style = {{ margin : "10px 0px 0px 0px", textAlign:"left"}} >
                            The Commonwealth Youth Network of Sri Lanka (CYN Sri Lanka) is a dynamic organization dedicated to youth development, with a strong focus on fostering international exposure and global growth opportunities for youth across the Commonwealth. Through strategic partnerships and collaborative initiatives, we empower young leaders to drive meaningful change in their communities and beyond.
                            </p>
                        </div>

                        <div class="col">
                            <img style = {{ margin : "170px 0px 0px 0px", width:"500px", height:"350px", objectFit: "cover" }} src={image1} class="card-img-top" alt="..."/>
                        </div>
                    </div>
                </div>


                <div class="container text-center">
                    <div class="row">
                        <div class="col">
                        <img src={image2} style={{ margin: "110px 0px 0px 0px",width: "500px", height: "400px", objectFit: "cover" }} class="card-img-top" alt="..."/>
                        </div>

                        <div class="col">
                        <div class="card" style={{ borderRadius: "35px", margin: "160px 0px 50px 30px", boxShadow: "2px 2px 10px rgba(0,0,0,0.1)"}}>
                            <div class="card-body">
                                <h4 class="card-title" style = {{ fontWeight : "800" }}>Vision</h4>
                                <p class="card-text" style = {{ margin : "30px 20px 20px 20px" }}>"To unite youth across the Commonwealth in creating a better world."</p>
                            </div>
                        </div>

                        <div class="card" style={{ borderRadius: "35px", margin: "0px 0px 50px 30px", boxShadow: "2px 2px 10px rgba(0,0,0,0.1)"}}>
                            <div class="card-body">
                                <h4 class="card-title" style = {{ fontWeight : "800" }}>Mission</h4>
                                <p class="card-text" style = {{ margin : "30px 20px 20px 20px" }}>"To lead Sri Lankan youth towards impactful leadership and global engagement."</p>
                            </div>
                        </div>

                        </div>
                    </div>
                </div>


    


                <div class="container text-center">
                    <div class="row">
                    <h3 class="text-uppercase" style= {{ margin : "100px 0px 0px 0px", fontWeight:"bold", textAlign:"center" , fontWeight : "800"}}>Core Objectives</h3>
                        <div class="col">
                            <div class="card" style={{ borderRadius: "15px", margin: "100px 40px 40px 40px", boxShadow: "2px 2px 10px rgba(0,0,0,0.1)"}}>
                                <div class="card-body">
                                    <h5 class="card-title" style = {{ fontWeight : "700", textAlign:"left", margin:"20px 0px 0px 20px" }}>1. Fostering International Collaboration</h5>
                                    <p class="card-text" style = {{ margin : "30px 20px 20px 20px", textAlign:"left" }}>Strengthening cooperation between Sri Lankan youth and the Commonwealth to advance SDG 17 (Partnerships for the Goals) and promote global solidarity.
                                    Contributing to SDG 4 (Quality Education) and SDG 8 (Decent Work and Economic Growth) through shared resources, mentorship, and expertise.</p>
                                </div>
                            </div>

                            <div class="card" style={{ borderRadius: "15px", margin: "0px 40px 40px 40px", boxShadow: "2px 2px 10px rgba(0,0,0,0.1)"}}>
                                <div class="card-body">
                                    <h5 class="card-title" style = {{ fontWeight : "700", textAlign:"left", margin:"20px 0px 0px 20px" }} >2. Establishing a Robust Sri Lankan Youth Network</h5>
                                    <p class="card-text" style = {{ margin : "30px 20px 20px 20px", textAlign:"left" }}>Creating a strong and connected network of Sri Lankan youth organizations to encourage cross-cultural exchange and collaborative action.
                                    Aligning efforts with SDG 11 (Sustainable Cities and Communities) and SDG 16 (Peace, Justice, and Strong Institutions) while ensuring equal participation (SDG 10 - Reduced Inequalities).</p>
                                </div>
                            </div>

                            <div class="card" style={{ borderRadius: "15px", margin: "0px 40px 40px 40px", boxShadow: "2px 2px 10px rgba(0,0,0,0.1)"}}>
                                <div class="card-body">
                                    <h5 class="card-title" style = {{ fontWeight : "700",textAlign:"left", margin:"20px 0px 0px 20px" }}>3. Promoting Diversity and Inclusion</h5>
                                    <p class="card-text" style = {{ margin : "30px 20px 20px 20px", textAlign:"left" }}>Enhancing social cohesion by promoting cooperation among youth from diverse backgrounds across Sri Lanka.
                                    Advocating for inclusive urban planning and policies, contributing to SDG 10 (Reduced Inequalities) and SDG 16 (Peace, Justice, and Strong Institutions).</p>
                                </div>
                            </div>

                            <div class="card" style={{ borderRadius: "15px", margin: "0px 40px 40px 40px", boxShadow: "2px 2px 10px rgba(0,0,0,0.1)"}}>
                                <div class="card-body">
                                    <h5 class="card-title" style = {{ fontWeight : "700", textAlign:"left", margin:"20px 0px 0px 20px" }}>4. Empowering Youth through Volunteerism</h5>
                                    <p class="card-text" style = {{ margin : "30px 20px 20px 20px", textAlign:"left" }}>Encouraging youth engagement in volunteer initiatives that address key community challenges and support sustainable development goals.
                                    Aligning with SDG 1 (No Poverty) and SDG 13 (Climate Action) by engaging youth in environmental conservation and economic upliftment programs.</p>
                                </div>
                            </div>

                            <div class="card" style={{ borderRadius: "15px", margin: "0px 40px 40px 40px", boxShadow: "2px 2px 10px rgba(0,0,0,0.1)"}}>
                                <div class="card-body">
                                    <h5 class="card-title" style = {{ fontWeight : "700", textAlign:"left", margin:"20px 0px 0px 20px" }}>5. Championing Commonwealth Values</h5>
                                    <p class="card-text" style = {{ margin : "30px 20px 0px 20px", textAlign:"left" }}>Upholding Commonwealth principles of gender equality, access to health and education, democracy, tolerance, respect, and understanding. <br />
                                    Supporting initiatives aligned with:<br />
                                    <p style = {{ margin : "20px 0px 20px 20px" }}>SDG 5 (Gender Equality)<br />
                                    SDG 3 (Good Health and Well-being)<br />
                                    SDG 4 (Quality Education)<br />
                                    SDG 16 (Peace, Justice, and Strong Institutions)</p></p>
                                </div>
                            </div>

                            <div class="card" style={{ borderRadius: "15px", margin: "0px 40px 40px 40px", boxShadow: "2px 2px 10px rgba(0,0,0,0.1)"}}>
                                <div class="card-body">
                                    <h5 class="card-title" style = {{ fontWeight : "700",textAlign:"left", margin:"20px 0px 0px 20px" }}>6. Promoting Innovation & Economic Growth</h5>
                                    <p class="card-text" style = {{ margin : "30px 20px 20px 20px", textAlign:"left" }}>Supporting youth entrepreneurship, technology-driven solutions, and sustainable business models in alignment with SDG 9 (Industry, Innovation, and Infrastructure).
                                    Encouraging skill development and employment generation to reduce inequalities (SDG 10) and promote economic opportunities (SDG 8).</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                
                       

                        <div class="container text-center">
                            <div class="row">
                                <h3 class="text-uppercase" style= {{ margin : "100px 0px 0px 0px", fontWeight:"bold", textAlign:"center" , fontWeight : "800"}}>CYN’s Commitment to the Sustainable Development Goals (SDGs)</h3>
                                <p style = {{ margin : "80px 0px 60px 50px", textAlign:"left", fontWeight : "700"  }}>CYN Sri Lanka actively contributes to the following Sustainable Development Goals (SDGs): </p>

                                <div class="col-sm-3">
                                <div class="card" style={{ borderRadius: "15px", margin: "0px 40px 60px 40px",width:"200px", height:"200px", objectFit: "cover"}}>
                                    <img style={{ borderRadius: "15px"}} src={SDG1} class="card-img-top" alt="..."/>
                                </div>
                                </div>

                                <div class="col-sm-3">
                                <div class="card" style={{ borderRadius: "15px", margin: "0px 40px 60px 40px" ,width:"200px", height:"200px", objectFit: "cover"}}>
                                    <img style={{ borderRadius: "15px"}} src={SDG4} class="card-img-top" alt="..."/>  
                                </div>
                                </div>

                                <div class="col-sm-3">
                                <div class="card" style={{ borderRadius: "15px", margin: "0px 40px 60px 40px" ,width:"200px", height:"200px", objectFit: "cover"}}>
                                    <img style={{ borderRadius: "15px"}} src={SDG5} class="card-img-top" alt="..."/>
                                </div>
                                </div>

                                <div class="col-sm-3">
                                <div class="card" style={{ borderRadius: "15px", margin: "0px 40px 60px 40px" ,width:"200px", height:"200px", objectFit: "cover"}}>
                                    <img style={{ borderRadius: "15px"}} src={SDG8} class="card-img-top" alt="..."/>
                                </div>
                                </div>
                            </div>

                            <div class="row">
                               

                                <div class="col-sm-3">
                                <div class="card" style={{ borderRadius: "15px", margin: "0px 40px 60px 40px" ,width:"200px", height:"200px", objectFit: "cover"}}>
                                    <img style={{ borderRadius: "15px"}} src={SDG9} class="card-img-top" alt="..."/>
                                </div>
                                </div>

                                <div class="col-sm-3">
                                <div class="card" style={{ borderRadius: "15px", margin: "0px 40px 60px 40px" ,width:"200px", height:"200px", objectFit: "cover"}}>
                                    <img style={{ borderRadius: "15px"}} src={SDG10} class="card-img-top" alt="..."/>
                                </div>
                                </div>

                                <div class="col-sm-3">
                                <div class="card" style={{ borderRadius: "15px", margin: "0px 40px 60px 40px" ,width:"200px", height:"200px", objectFit: "cover"}}>
                                    <img style={{ borderRadius: "15px"}} src={SDG11} class="card-img-top" alt="..."/>
                                </div>
                                </div>

                                <div class="col-sm-3">
                                <div class="card" style={{ borderRadius: "15px", margin: "0px 40px 60px 40px" ,width:"200px", height:"200px", objectFit: "cover"}}>
                                    <img style={{ borderRadius: "15px"}} src={SDG13} class="card-img-top" alt="..."/>
                                </div>
                                </div>

                            </div>

                            <div class="row">
                               
                                <div class="col-sm-3">
                                
                                </div>
                                
                                <div class="col-sm-3">
                                <div class="card" style={{ borderRadius: "15px", margin: "0px 40px 60px 40px" ,width:"200px", height:"200px", objectFit: "cover"}}>
                                    <img style={{ borderRadius: "15px"}} src={SDG16} class="card-img-top" alt="..."/>
                                </div>
                                </div>

                                <div class="col-sm-3">
                                <div class="card" style={{ borderRadius: "15px", margin: "0px 40px 60px 40px" ,width:"200px", height:"200px", objectFit: "cover"}}>
                                    <img style={{ borderRadius: "15px"}} src={SDG17} class="card-img-top" alt="..."/>
                                </div>
                                </div>

                                <div class="col-sm-3">
                                
                                </div>

                            </div>

                        </div>



            {/* <div>
            <section id="aboutus">
                <div class="container text-center">
                    <div class="row">
                    <h3 class="text-uppercase" style= {{ margin : "100px 0px 0px 0px", fontWeight:"bold", textAlign:"center" , fontWeight : "800"}}>Our Team</h3>

                        <div class="col-sm-4">
                            <div class="card"  style={{ borderRadius: "35px", margin: "100px 20px 0px 20px", boxShadow: "2px 2px 10px rgba(0,0,0,0.1)"}} >
                                <img src={image2} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title" style = {{ fontWeight : "700" }}>Gayan Rajapaksha</h5>
                                    <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                                    <a href="#" class="btn btn-primary">See More</a>
                                    
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-4">
                        <div class="card"  style={{ borderRadius: "35px", margin: "100px 20px 0px 20px", boxShadow: "2px 2px 10px rgba(0,0,0,0.1)"}} >
                                <img src={image2} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title" style = {{ fontWeight : "700" }}>Goyum Rupasena</h5>
                                    <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                                    <a href="#" class="btn btn-primary">See More</a>
                                    
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-4">
                        <div class="card"  style={{ borderRadius: "35px", margin: "100px 20px 0px 20px", boxShadow: "2px 2px 10px rgba(0,0,0,0.1)"}}>
                                <img src={image2} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title" style = {{ fontWeight : "700" }}>Card title</h5>
                                    <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                                    <a href="#" class="btn btn-primary">See More</a>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </div> */}


            <div>
            <section id="contactus">
                <div class="container text-center">
                    <div class="row">

                    <h3 class="text-uppercase" style= {{ margin : "100px 0px 0px 0px", fontWeight:"bold", textAlign:"center" , fontWeight : "800"}}>Contact Us</h3>

                        <div class="col-sm-6">
                        
                        <div class="card" style={{ marginTop:"60px",marginBottom:"1rem",borderRadius: "15px", height:"30rem", boxShadow: "2px 2px 10px rgba(0,0,0,0.2)"}}>
                            <form action="https://formsubmit.co/lanka.edutourism@gmail.com" method="POST" style={{ borderRadius: "15px", margin: "20px 10px 40px 50px", height:"30rem", padding:"80px 50px 70px 50px"}}>
                                <div class="mb-3">
                                    <div class="row" >
                                        <div class="col"  style={{  margin: "0px 0px 40px 0px"}} >
                                            <input name="First Name" type="text" class="form-control" placeholder="First name" aria-label="First name" required></input>
                                        </div>
                                        <div class="col">
                                            <input name="Last Name" type="text" class="form-control" placeholder="Last name" aria-label="Last name" required></input>
                                        </div>
                                    </div>
                                
                                    <div class="mb-3">
                                        <div class="row">
                                            <div class="col"  style={{  margin: "0px 0px 30px 0px"}}>
                                                <input name="Phone No:" type="number" class="form-control" placeholder="Mobile No" aria-label="Mobile No" required></input>
                                            </div>
                                            <div class="col">
                                                <input name="Email" type="email" class="form-control" placeholder="Email" aria-label="Email" required></input>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="form-floating">
                                    <textarea name="Message" class="form-control" placeholder="Leave a comment here" id="floatingTextarea" required></textarea>
                                    <label for="floatingTextarea">Message</label>
                                </div>
                                <button  style={{  margin: "50px 0px 0px 0px"}} type="submit" class="btn btn-primary">Submit</button>
                            </form>
                        </div>
                        
                        </div>

                        <div class="col-sm-6">
                        

                        <div class="card" style={{ marginBottom:"1rem", marginTop:"60px",borderRadius: "15px", height:"30rem", boxShadow: "2px 2px 10px rgba(0,0,0,0.2)"}}>
                            <div class="card-body">
                            <iframe style={{ height:"100%", width:"100%" }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126763.21819657992!2d79.9080448!3d6.8485119999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85457d378ccc487d%3A0xe9b4ec3e78cb3316!2sCommonwealth%20Youth%20Network%20of%20Sri%20Lanka%20-%20CYN%20Sri%20Lanka!5e0!3m2!1sen!2slk!4v1738748494245!5m2!1sen!2slk" ></iframe>
                            </div>
                        </div>

                        </div>

                       

                    <div className="col-12 col-md-6 col-lg-12">
                        <div
                            className="card shadow-sm"
                            style={{
                            marginTop: "20px",
                            marginBottom: "1rem",
                            borderRadius: "15px",
                            height: "auto",
                            }}
                        >
                            <div className="card-body d-flex flex-column flex-md-row align-items-center text-md-start text-center p-4">
                            <div>
                                <h5 className="card-title">
                                <i className="fa-solid fa-phone me-2"></i> 0777 13 81 34 or 071 80 81 831
                                </h5>
                                <h5 className="card-title">
                                <i className="fa-solid fa-envelope me-2"></i> cynsrilanka@gmail.com
                                </h5>
                                <h5 className="card-title">
                                <i className="fa-solid fa-location-dot me-2"></i> 2nd floor, Udeshi City, Kiribathgoda
                                </h5>
                            </div>
                            <div className="mt-3 mt-md-0 ms-md-auto text-center">
                                <h3>
                                <a href="mailto:cynsrilanka@gmail.com" className="card-link">
                                    <i className="fa-solid fa-envelope text-danger mx-2"></i>
                                </a>
                                <a href="https://www.facebook.com/commonwealthyouthnetworksrilanka" className="card-link">
                                    <i className="fa-brands fa-facebook mx-2"></i>
                                </a>
                                <a href="https://www.instagram.com/cynsrilanka/?hl=en" className="card-link">
                                    <i className="fa-brands fa-instagram text-purple mx-2"></i>
                                </a>
                                <a href="https://wa.me/+94777138134" className="card-link">
                                    <i className="fa-brands fa-whatsapp text-success mx-2"></i>
                                </a>
                                </h3>
                            </div>
                            </div>
                        </div>
                        </div>


                    </div>

                </div>
            </section>
            </div>   

            <Footer/>
        </div>

    )
}

export default HomePage