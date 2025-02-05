import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
// import axios from 'axios';

import Header from '../Headers/Header';
import './partner.css';
import image3 from '../../image/image3.png';


const PartnerCategory = () => {


    return (
        <div>
             <Header/>
          
                <div>

                <div className="home-text">
                    <h2>Partners</h2>
                </div>
                    <div class="row pt-5 mt-5">
                        
                            <div class="col-6">
                            <div class="card" style={{ borderRadius: "35px", margin: "0px 0px 0px 190px", boxShadow: "2px 2px 10px rgba(0,0,0,0.1)"}}>
                                <div class="card-body">
                                    <h5 class="card-title" style = {{ fontWeight : "700" }}>International Partners</h5>
                                    <p class="card-text" style = {{ margin : "30px 20px 0px 20px" }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="/international" style = {{ margin : "90px 0px 0px 0px" }} class="btn btn-primary">International</a>
                                </div>
                            </div>
                            </div>
                        
                        
                        
                            <div class="col-6">
                            <div class="card" style={{ borderRadius: "35px", margin: "0px 190px 0px 0px", boxShadow: "2px 2px 10px rgba(0,0,0,0.1)"  }}>
                                <div class="card-body">
                                    <h5 class="card-title" style = {{ fontWeight : "700" }}>Local Partners</h5>
                                    <p class="card-text" style = {{ margin : "30px 20px 0px 20px" }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="/local" style = {{ margin : "90px 0px 0px 0px" }} class="btn btn-primary">Local</a>
                                </div>
                                </div>
                            </div>
                        
                    </div>
                </div>



          </div>
      )
}

export default PartnerCategory