import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
// import axios from 'axios';
import Header from '../Headers/Header';
import image4 from '../../image/image4.jpeg';



const Gallery = () => {


  return (
    <div>
         <Header/>
        
         <div class="container text-center">
            <div class="row">
            <h3 class="text-uppercase" style= {{ margin : "50px 0px 60px 0px", fontWeight:"bold", textAlign:"center" , fontWeight : "800"}}>Gallery</h3>
              <div class="col">
                <div class="card" style={{margin:"40px", boxShadow: "2px 2px 10px rgba(0,0,0,0.1)" }}>
                  <img src={image4} class="card-img-top" alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title" style = {{ fontWeight : "700" , margin: "20px 0px 0px 0px"}}>Malaysia Tour</h5>
                    <p class="card-text" style = {{ margin : "30px 20px 0px 20px", textAlign:"left" }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" style = {{ margin : "40px 0px 0px 0px" }} class="btn btn-primary">See More</a>
                  </div>
                </div>
              </div>

              <div class="col">
              <div class="card" style={{ margin:"40px", boxShadow: "2px 2px 10px rgba(0,0,0,0.1)" }}>
                  <img src={image4}  class="card-img-top" alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title" style = {{ fontWeight : "700" , margin: "20px 0px 0px 0px"}}>Malaysia Tour</h5>
                    <p class="card-text" style = {{ margin : "30px 20px 0px 20px", textAlign:"left" }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" style = {{ margin : "40px 0px 0px 0px" }} class="btn btn-primary">See More</a>
                  </div>
                </div>
              </div>

              <div class="col">
              <div class="card" style={{ margin:"40px", boxShadow: "2px 2px 10px rgba(0,0,0,0.1)" }}>
                  <img src={image4}  class="card-img-top" alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title" style = {{ fontWeight : "700" , margin: "20px 0px 0px 0px"}}>Malaysia Tour</h5>
                    <p class="card-text" style = {{ margin : "30px 20px 0px 20px", textAlign:"left" }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" style = {{ margin : "40px 0px 0px 0px" }} class="btn btn-primary">See More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>



      
      </div>
  )
}

export default Gallery
