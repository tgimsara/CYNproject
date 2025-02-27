import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
// import axios from 'axios';
import Header from '../Headers/Header';
import hrm from '../../image/hrm.png';
import tour1 from '../../image/tour1.JPG';
import tour2 from '../../image/tour2.JPG';
import tour3 from '../../image/tour3.JPG';
import eye from '../../image/eye.jpeg';
import sound from '../../image/sound.jpg';
import club from '../../image/club.jpg';
import blood from '../../image/blood.jpeg';
import bloodd from '../../image/bloodd.jpg';



const Gallery = () => {


  return (
    <div>
         <Header/>
        
         <div class="container text-center">
            <div class="row">
            <h3 class="text-uppercase" style= {{ margin : "140px 0px 60px 0px", fontWeight:"bold", textAlign:"center" , fontWeight : "800"}}>Gallery</h3>
              <div class="col">
                <div class="card" style={{margin:"40px", boxShadow: "2px 2px 10px rgba(0,0,0,0.1)" }}>
                  <img src={hrm} class="card-img-top" alt="..."/>
                  <div class="card-body">
                    <h6 class="card-title" style = {{ fontWeight:"bold", margin: "20px 0px 0px 0px", textAlign:"left"}}>International Professional Study Tour for Human Resource Management Students - Malaysia <br/><br/> 19th to 25rd of July 2024</h6>
                    <a href="/viewgallery1" style = {{ margin : "40px 0px 0px 0px" }} class="btn btn-primary">See More</a>
                  </div>
                </div>
              </div>

              <div class="col">
                <div class="card" style={{margin:"40px", boxShadow: "2px 2px 10px rgba(0,0,0,0.1)" }}>
                  <img src={tour1} class="card-img-top" alt="..."/>
                  <div class="card-body">
                    <h6 class="card-title" style = {{ fontWeight:"bold", margin: "20px 0px 0px 0px", textAlign:"left"}}>International Professional Study Tour for Professinal Psychological Counsellors - Malaysia <br/><br/> 17th to 23rd of July 2024</h6>
                    <a href="/viewgallery1" style = {{ margin : "40px 0px 0px 0px" }} class="btn btn-primary">See More</a>
                  </div>
                </div>
              </div>

              <div class="col">
              <div class="card" style={{ margin:"40px", boxShadow: "2px 2px 10px rgba(0,0,0,0.1)" }}>
                  <img src={tour2}  class="card-img-top" alt="..."/>
                  <div class="card-body">
                  <h6 class="card-title" style = {{ fontWeight:"bold", margin: "20px 0px 0px 0px", textAlign:"left"}}>International Study Tour for Psychology and Counselling Students - Malaysia <br/><br/> 05th to 10th of November 2024</h6>
                    <a href="/viewgallery2" style = {{ margin : "40px 0px 0px 0px" }} class="btn btn-primary">See More</a>
                  </div>
                </div>
              </div>  
            </div>



            <div class="row">
            <div class="col">
              <div class="card" style={{ margin:"40px", boxShadow: "2px 2px 10px rgba(0,0,0,0.1)" }}>
                  <img src={tour3}  class="card-img-top" alt="..."/>
                  <div class="card-body">
                  <h6 class="card-title" style = {{ fontWeight:"bold", margin: "20px 0px 0px 0px", textAlign:"left"}}>International Study Tour for Professional Beauticians - <br/> Malaysia <br/><br/>  19th to 25th of November 2024</h6>
                    <a href="/viewgallery3" style = {{ margin : "40px 0px 0px 0px" }} class="btn btn-primary">See More</a>
                  </div>
                </div>
              </div> 

              <div class="col">
              <div class="card" style={{ margin:"40px", boxShadow: "2px 2px 10px rgba(0,0,0,0.1)" }}>
                  <img src={bloodd}  class="card-img-top" alt="..."/>
                  <div class="card-body">
                  <h6 class="card-title" style = {{ fontWeight:"bold", margin: "20px 0px 0px 0px", textAlign:"left"}}>26th Blood Donation Campaign - <br/>  Lumbini Viharaya, Dalugama<br/><br/> 23rd May 2021 </h6>
                    <a href="/viewsound" style = {{ margin : "40px 0px 0px 0px" }} class="btn btn-primary">See More</a>
                  </div>
                </div>
              </div>

              <div class="col">
              <div class="card" style={{ margin:"40px", boxShadow: "2px 2px 10px rgba(0,0,0,0.1)" }}>
                  <img src={blood}  class="card-img-top" alt="..."/>
                  <div class="card-body">
                  <h6 class="card-title" style = {{ fontWeight:"bold", margin: "20px 0px 0px 0px", textAlign:"left"}}>25th Blood Donation Campaign - <br/> Lumbini Viharaya, Dalugama<br/><br/>  20th September 2020</h6>
                    <a href="/vieweye" style = {{ margin : "40px 0px 0px 0px" }} class="btn btn-primary">See More</a>
                  </div>
                </div>
              </div>

              
            </div>
         





            <div class="row">
            <div class="col">
                <div class="card" style={{margin:"40px", boxShadow: "2px 2px 10px rgba(0,0,0,0.1)" }}>
                  <img src={club} class="card-img-top" alt="..."/>
                  <div class="card-body">
                    <h6 class="card-title" style = {{ fontWeight:"bold", margin: "20px 0px 0px 0px", textAlign:"left"}}>Established the Commonwealth Schools Club - <br/> Prince of Wales College, Moratuwa. <br/><br/> March 2020</h6>
                    <a href="/viewgallery1" style = {{ margin : "40px 0px 0px 0px" }} class="btn btn-primary">See More</a>
                  </div>
                </div>
              </div>

              <div class="col">
              <div class="card" style={{ margin:"40px", boxShadow: "2px 2px 10px rgba(0,0,0,0.1)" }}>
                  <img src={sound}  class="card-img-top" alt="..."/>
                  <div class="card-body">
                  <h6 class="card-title" style = {{ fontWeight:"bold", margin: "20px 0px 0px 0px", textAlign:"left"}}>On International Volunteer Day CYN Sri Lanka has donated a sound system - <br/>  Blue Rose Special School in Kandy. <br/><br/> December 2015</h6>
                    <a href="/viewsound" style = {{ margin : "40px 0px 0px 0px" }} class="btn btn-primary">See More</a>
                  </div>
                </div>
              </div>

              <div class="col">
              <div class="card" style={{ margin:"40px", boxShadow: "2px 2px 10px rgba(0,0,0,0.1)" }}>
                  <img src={eye}  class="card-img-top" alt="..."/>
                  <div class="card-body">
                  <h6 class="card-title" style = {{ fontWeight:"bold", margin: "20px 0px 0px 0px", textAlign:"left"}}>Eye Donation Registration Campaign - <br/> Alawala Raja Maha Viharaya & <br/> Sri Ariyasingharamaya at Attanagalle <br/><br/>  18th October 2013</h6>
                    <a href="/vieweye" style = {{ margin : "40px 0px 0px 0px" }} class="btn btn-primary">See More</a>
                  </div>
                </div>
              </div>

              
            </div>
          </div>



      
      </div>
  )
}

export default Gallery
