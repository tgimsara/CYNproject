import React from "react";

import Header from "../Headers/Header";
import '../Partners/partner.css';

import lpec from '../../image/lpec.jpg';

const Local = () => {


    return (
        <div>
             <Header/>
           

        <div class="container text-center">
            <div class="row">
            <h3 class="text-uppercase" style= {{ margin : "50px 0px 60px 0px", fontWeight:"bold", textAlign:"center" , fontWeight : "800"}}>Local Partners</h3>

                <div class="col">
                    <div class="card" style={{margin:"0px", boxShadow: "2px 2px 10px rgba(0,0,0,0.1)" }}>
                        <img src={lpec} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <p class="card-text" style = {{ fontWeight:"bold", margin: "20px 0px 0px 0px", textAlign:"left"}}>LPEC Campus Pvt Ltd</p>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card">
                        <img src="..." class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <p class="card-text">Sri Lanka Professioanal Psychological Counsellor’s Association</p>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card">
                        <img src="..." class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <p class="card-text">Sri Lanka Foundation Institute</p>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card">
                        <img src="..." class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <p class="card-text">Ceylon Beauty and Aeatheticians Association</p>
                        </div>
                    </div>
                </div>

            </div>

            <div class="row">
                <div class="col">
                    <div class="card">
                        <img src="..." class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <p class="card-text">National Youth Serrvices Council</p>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card">
                        <img src="..." class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <p class="card-text">National Youth Corps </p>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card">
                        <img src="..." class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <p class="card-text">Ministry of Youth and Sports</p>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card">
                        <img src="..." class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <p class="card-text">Education Ministry</p>
                        </div>
                    </div>
                </div>
                
            </div>

            <div class="row">
                <div class="col">
                    <div class="card">
                        <img src="..." class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <p class="card-text">British Council Sri Lanka</p>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card">
                        <img src="..." class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <p class="card-text">Sri Lanka Cricket Association for Physically Chalenged</p>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card">
                        <img src="..." class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <p class="card-text">Global Citizens</p>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card">
                        <img src="..." class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <p class="card-text">Ceylon Edutourism Pvt Ltd</p>
                        </div>
                    </div>
                </div>
                
            </div>

            <div class="row">
                <div class="col">
                    <div class="card">
                        
                    </div>
                </div>

                <div class="col">
                    <div class="card">
                        <img src="..." class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <p class="card-text">Global Study Tours Pvt Ltd</p>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card">
                        <img src="..." class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <p class="card-text">International Learning Pathways Pvt Ltd</p>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card">
                        
                    </div>
                </div>
                
            </div>

        </div>

    </div>
)
} 

export default Local