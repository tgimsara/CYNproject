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
          
                {/* <div class="p-grid col-12">
                    <div class="row">
                        
                            <div class="col-6 p-pt-5">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link to="/international">
                                        <button type="button" class="btn btn-sm btn-outline-secondary">International Partners</button>
                                    </Link>
                                </div>
                                </div>
                            </div>
                        
                        
                        
                            <div class="col-6 p-pt-5">
                            <div class="card">
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
                </div> */}


                    <div class="grid">
                        <div class="col-6">.g-col-6</div>
                        <div class="col-6">.g-col-6</div>
                    </div>

          </div>
      )
}

export default PartnerCategory