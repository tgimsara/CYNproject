import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
// import axios from 'axios';

import Header from '../Headers/Header';
import image3 from '../../image/image3.png';


const PartnerCategory = () => {


    return (
        <div>
             <Header/>


             <div class="container text-center">
                <div class="row">
                <h3 class="text-uppercase" style= {{ margin : "50px 0px 60px 0px", fontWeight:"bold", textAlign:"center" , fontWeight : "800"}}>Partners</h3>
                    <div class="col">
                        <div class="card" style={{ borderRadius: "35px", margin:"40px", boxShadow: "2px 2px 10px rgba(0,0,0,0.1)"}}>
                            <div class="card-body">
                                <h5 class="card-title" style = {{ fontWeight : "700", margin: "20px 0px 0px 0px" }}>International Partners</h5>
                                <p class="card-text" style = {{ margin : "30px 20px 0px 20px" }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="/international" style = {{ margin : "60px 0px 0px 0px" }} class="btn btn-primary">International</a>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card" style={{ borderRadius: "35px",margin:"40px", boxShadow: "2px 2px 10px rgba(0,0,0,0.1)" }}>
                            <div class="card-body">
                                <h5 class="card-title" style = {{ fontWeight : "700" , margin: "20px 0px 0px 0px"}}>Local Partners</h5>
                                <p class="card-text" style = {{ margin : "30px 20px 0px 20px" }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="/local" style = {{ margin : "60px 0px 0px 0px" }} class="btn btn-primary">Local</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

          </div>
      )
}

export default PartnerCategory