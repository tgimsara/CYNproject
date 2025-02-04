import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
// import axios from 'axios';
import './gallery.css';
import Header from '../Headers/Header';
import image4 from '../../image/image4.jpeg';



const Gallery = () => {


  return (
    <div>
         <Header/>
        

                <div className="gallery-text">
                    <h2>Gallery</h2>
                </div>
                  <div class="album py-5 bg-body-tertiary">
                    <div class="container">
                      <div class="row row-cols-1 row-cols row-cols-md-3 g-3">
                        
                        <div class="col">
                          <div class="card shadow-sm">
                            <h4 className="text-dark" ><a href="#" ></a>1. Malaysia Tour</h4>
                            <a href="#"><img class="bd-placeholder-img card-img-top" width="100%" height="225" src={image4} /></a>
                              <div class="card-body">
                                <p class="card-text" > International Study Tour for Proffessional Beauticians 2024 </p>
                                  <div class="d-flex justify-content-between align-items-center">
                                    <div class="btn-group">
                                      <Link to="/viewgallery">
                                      <button type="button" class="btn btn-sm btn-outline-secondary">See More..</button>
                                      </Link>
                                    </div> 
                                  </div>
                              </div>
                          </div>
                        </div>


                        <div class="col">
                          <div class="card shadow-sm">
                            <h4 className="text-dark" ><a href="#" ></a>1. Malaysia Tour</h4>
                            <a href="#"><img class="bd-placeholder-img card-img-top" width="100%" height="225" src={image4} /></a>
                              <div class="card-body">
                                <p class="card-text" > International Study Tour for Proffessional Beauticians 2024 </p>
                                  <div class="d-flex justify-content-between align-items-center">
                                    <div class="btn-group">
                                      <Link to="/viewgallery">
                                      <button type="button" class="btn btn-sm btn-outline-secondary">See More..</button>
                                      </Link>
                                    </div> 
                                  </div>
                              </div>
                          </div>
                        </div>


                        <div class="col">
                          <div class="card shadow-sm">
                            <h4 className="text-dark" ><a href="#" ></a>1. Malaysia Tour</h4>
                            <a href="#"><img class="bd-placeholder-img card-img-top" width="100%" height="225" src={image4} /></a>
                              <div class="card-body">
                                <p class="card-text" > International Study Tour for Proffessional Beauticians 2024 </p>
                                  <div class="d-flex justify-content-between align-items-center">
                                    <div class="btn-group">
                                      <Link to="/viewgallery">
                                      <button type="button" class="btn btn-sm btn-outline-secondary">See More..</button>
                                      </Link>
                                    </div> 
                                  </div>
                              </div>
                          </div>
                        </div>
                   
              
                  </div>
                  
                </div>
              </div>


      
      </div>
  )
}

export default Gallery
