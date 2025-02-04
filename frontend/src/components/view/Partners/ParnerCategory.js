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
                    <div class="row pt-5 mt-5">
                        
                            <div class="col-6">
                            <div class="card" style={{ borderRadius: "35px", margin: "0px 0px 0px 90px", boxShadow: "2px 2px 10px rgba(0,0,0,0.1)" }}>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link to="/international">
                                        <button type="button" class="btn btn-sm btn-outline-secondary">International Partners</button>
                                    </Link>
                                </div>
                                </div>
                            </div>
                        
                        
                        
                            <div class="col-6">
                            <div class="card" style={{ margin : "0px 90px 0px 0px" }}>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link to="/local">
                                        <button type="button" class="btn btn-sm btn-outline-secondary">Local Partners</button>
                                    </Link>
                                </div>
                                </div>
                            </div>
                        
                    </div>
                </div>



          </div>
      )
}

export default PartnerCategory