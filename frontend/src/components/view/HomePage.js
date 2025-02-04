import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
// import axios from 'axios';
// import { useState } from 'react';
// import {NavLink,Link} from 'react-router-dom';

import './home.css';

import image1 from '../image/image1.png'
import image2 from '../image/image2.png'
import image3 from '../image/image3.png'
import man1 from '../image/man1.jpg';
import NotRegHeader from './Headers/NotRegHeader';


const HomePage = () => {

    // const id =localStorage.getItem("id");

    return(

        <div>

            <NotRegHeader/>


                <div class="container text-center">
                    <div class="row">
                        <div class="col-lg-6">
                            <h1 class="text-uppercase">Make Every Moment count with <span>CYN</span></h1>

                            <p class="main">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
                            molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae
                            aliquam voluptatem veniam, est atque cumque eum delectus sint!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
                            molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae
                            aliquam voluptatem veniam, est atque cumque eum delectus sint!
                            </p>
                        </div>

                        <div class="col-lg-6">
                            <img class="image1" src={image1} alt="Home" />
                        </div>
                    </div>
                </div>


                <div class="vision-container">   
                        <div class="row">

                                    <div class="col-lg-5">
                                        <img class="image2" src={image2} alt="Home" />
                                    </div>

                                    <div class="col-lg-7">
                                        <div className="sec1">
                                            <div className="card-box1">
                                                <div className="card-content1">
                                                    <h3>Our Vision</h3>
                                                    <p>
                                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
                                                    molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae
                                                    aliquam voluptatem veniam, est atque cumque eum delectus sint!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
                                                    molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae
                                                    aliquam voluptatem veniam, est atque cumque eum delectus sint!.
                                                    </p>
                                        
                                                </div>
                                            </div>
                                        </div>
                                                            
                                        <div className="sec1">
                                            <div className="card-box1">
                                                <div className="card-content1">
                                                    <h3>Our Mission</h3>
                                                    <p>
                                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
                                                    molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae
                                                    aliquam voluptatem veniam, est atque cumque eum delectus sint!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
                                                    molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae
                                                    aliquam voluptatem veniam, est atque cumque eum delectus sint!
                                                    </p>
                                        
                                                </div>
                                            </div>
                                        </div>            
                                                            
                                         
                                </div>
        
                    </div>
                </div> 


                <div className="team-section">
                    <div className="team-container">
                        <div className="row">
                            <div className="title2">
                                <h2>Our Team</h2>
                            </div>
                        </div>

                        <div className="team-card">
                            <div className="card1">
                                <div className="image-section">
                                    <img class="man1" src={man1} alt="Home" />
                                </div>
                                <div className="team-content">
                                    <h3>Gayan Rajapaksha</h3>
                                    <h4>Manager</h4>
                                    <p> 
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
                                    molestias.
                                    </p>
                                </div>
                            </div>

                            <div className="card1">
                                <div className="image-section">
                                    <img class="man1" src={man1} alt="Home" />
                                </div>
                                <div className="team-content">
                                <h3>Gayan Rajapaksha</h3>
                                    <h4>Manager</h4>
                                    <p> 
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
                                    molestias.
                                    </p>
                                </div>
                            </div>

                            <div className="card1">
                                <div className="image-section">
                                    <img class="man1" src={man1} alt="Home" />
                                </div>
                                <div className="team-content">
                                <h3>Gayan Rajapaksha</h3>
                                    <h4>Manager</h4>
                                    <p> 
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
                                    molestias.
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>


        </div>

    )
}

export default HomePage