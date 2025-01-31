import React, { useEffect } from 'react';
// import axios from 'axios';
// import { useState } from 'react';
// import {NavLink,Link} from 'react-router-dom';

import './home.css';

import image1 from '../image/image1.png'
import image2 from '../image/image2.png'
import image3 from '../image/image3.png'
import NotRegHeader from './Headers/NotRegHeader';


const HomePage = () => {

    // const id =localStorage.getItem("id");

    return(

        <div>

            <NotRegHeader/>

            <div class="container p-5">
       
                <div class="row">
              
                    <div id="welcomeNote" class="col-lg-6 col-md-12 mb-4 mb-md-0">
                        <h1 class="text-uppercase">Make Every Moment count with <span>CYN</span></h1>

                            <p class="main">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
                            molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae
                            aliquam voluptatem veniam, est atque cumque eum delectus sint!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
                            molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae
                            aliquam voluptatem veniam, est atque cumque eum delectus sint!
                            </p>
                    </div>
  
                    <div id="image1" class="col-lg-6 col-md-12 mb-4 mb-md-0">
                        <img class="image1" src={image1} alt="Home" />
                    </div>
        
                </div>
      

                <div class="container">   
                    <div class="box">
                        <div class="row">
                    
                            <h2>Our Vision</h2>
                                
                                    <div id="image2" class="col-lg-6 col-md-12 mb-4 mb-md-0">
                                        <img class="image2" src={image2} alt="Home" />
                                    </div>

                                <div id="vision" class="col-lg-6 col-md-12 mb-4 mb-md-0">

                                    <p class="first">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
                                    molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae
                                    aliquam voluptatem veniam, est atque cumque eum delectus sint!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
                                    molestias. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
                                    molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae
                                    aliquam voluptatem veniam, est atque cumque eum delectus sint!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
                                    molestias. 
                                    </p>

                                </div>
        
                        </div>
                    </div>
                </div> 




                <div class="container">   
                    <div class="box">
                        <div class="row">
                    
                            <h2>Our Mission</h2>


                                <div id="mission" class="col-lg-6 col-md-12 mb-4 mb-md-0">

                                    <p class="second">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
                                    molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae
                                    aliquam voluptatem veniam, est atque cumque eum delectus sint!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
                                    molestias. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
                                    molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae
                                    aliquam voluptatem veniam, est atque cumque eum delectus sint!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
                                    molestias. 
                                    </p>

                                </div>
                                
                                <div id="image3" class="col-lg-6 col-md-12 mb-4 mb-md-0">
                                    <img class="image3" src={image3} alt="Home" />
                                </div>

                               
        
                        </div>
                    </div>
                </div> 


                
                    <div>  
                    <h3 className='about'>About Us</h3>
                        <div class="box">
                    
                        {/* <h3 className='about'>About Us</h3> */}
                        
                            {/* <div class="row"> */}
                                                
                                <div class="card-container">
                                    <div class="card">
                                        <img src={image1} class="card-img-top-home" alt="GR1"></img>
                                        <div class="card-body">
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                    </div>
                                </div>


                                <div class="card-container">
                                    <div class="card" >
                                        <img src={image3} class="card-img-top-home" alt="GR2"></img>
                                        <div class="card-body">
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                    </div>
                                </div>


                                <div class="card-container">
                                    <div class="card" >
                                        <img src={image3} class="card-img-top-home" alt="GR3"></img>
                                        <div class="card-body">
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                    </div>
                                </div>
                                                
            
                                                

                            {/* </div> */}
                                        
                                                        
                        </div>
                    </div> 
                



                <section id="contactus" className="contactus">
                    <div class="container">   
                        <div class="box">
                            <div class="row">
                        
                                <h2>Contact Us</h2>


                                    <div id="about" href="#">

                                        <p class="contact">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
                                        molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae
                                        aliquam voluptatem veniam, est atque cumque eum delectus sint!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
                                        molestias. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
                                        molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae
                                        aliquam voluptatem veniam, est atque cumque eum delectus sint!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
                                        molestias. 
                                        </p>

                                    </div>
                                

                                
            
                            </div>
                        </div>
                    </div> 
                </section>


            </div>


        </div>

    )
}

export default HomePage