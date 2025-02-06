import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
// import axios from 'axios';
import Header from '../Headers/Header';
import tour1 from '../../image/tour1.JPG';
import tour2 from '../../image/tour2.JPG';
import tour3 from '../../image/tour3.JPG';



const Gallery = () => {


  return (
    <div>
         <Header/>
        
         <div class="container text-center">
            <div class="row">
            <h3 class="text-uppercase" style= {{ margin : "50px 0px 60px 0px", fontWeight:"bold", textAlign:"center" , fontWeight : "800"}}>Gallery</h3>
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

              <div class="col">
              <div class="card" style={{ margin:"40px", boxShadow: "2px 2px 10px rgba(0,0,0,0.1)" }}>
                  <img src={tour3}  class="card-img-top" alt="..."/>
                  <div class="card-body">
                  <h6 class="card-title" style = {{ fontWeight:"bold", margin: "20px 0px 0px 0px", textAlign:"left"}}>International Study Tour for Professional Beauticians - <br/> Malaysia <br/><br/>  19th to 25th of November 2024</h6>
                    <a href="/viewgallery3" style = {{ margin : "40px 0px 0px 0px" }} class="btn btn-primary">See More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>



      
      </div>
  )
}

export default Gallery
