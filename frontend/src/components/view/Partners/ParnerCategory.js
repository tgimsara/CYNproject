import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
// import axios from 'axios';

import Header from '../Headers/Header';
import international from '../../image/international.png';
import local from '../../image/local.png';


const PartnerCategory = () => {


    return (
        <div>
             <Header/>


             <div class="container text-center">
                <div class="row">
                <h3 class="text-uppercase" style= {{ margin : "140px 0px 60px 0px", fontWeight:"bold", textAlign:"center" , fontWeight : "800"}}>Partners</h3>
                    <div class="col">
                        <div class="card" style={{ borderRadius: "35px", margin:"40px 90px", boxShadow: "2px 2px 10px rgba(0,0,0,0.3)"}}>
                            <img src={international} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <a href="/international" style = {{ margin : "10px 0px 10px 0px" }} class="btn btn-primary">International</a>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card" style={{ borderRadius: "35px",margin:"40px 90px", boxShadow: "2px 2px 10px rgba(0,0,0,0.3)" }}>
                            <img src={local} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <a href="/local" style = {{ margin : "10px 0px 10px 0px" }} class="btn btn-primary">Local</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

          </div>
      )
}

export default PartnerCategory