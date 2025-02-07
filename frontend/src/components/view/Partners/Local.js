import React from "react";

import Header from "../Headers/Header";
import '../Partners/partner.css';

import british from '../../image/british.png';
import beauty from '../../image/beauty.png';
import citizen from '../../image/citizen.png';
import cricket from '../../image/cricket.png';
import education from '../../image/education.png';
import edutourism from '../../image/edutourism.png';
import foundation from '../../image/foundation.png';
import lpec from '../../image/lpec.png';
import slppca from '../../image/slppca.png';
import youth from '../../image/youth.png';
import youthcrop from '../../image/youthcrop.png';
import youthsport from '../../image/youthsport.png';

const Local = () => {


    return (
        <div>
             <Header/>
           

        <div class="container text-center">
            <div class="row">
            <h3 class="text-uppercase" style= {{ margin : "140px 0px 60px 0px", fontWeight:"bold", textAlign:"center" , fontWeight : "800"}}>Local Partners</h3>

                <div class="col-sm-3">
                    <div class="card" style={{ height:"20rem",margin:"20px", boxShadow: "2px 2px 10px rgba(0,0,0,0.3)" }}>
                        <img src={lpec} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <p class="card-text" style = {{ fontWeight:"bold", marginTop: "20px", textAlign:"left"}}>LPEC Campus Pvt Ltd</p>
                        </div>
                    </div>
                </div>

                <div class="col-sm-3">
                    <div class="card" style={{height:"20rem",margin:"20px", boxShadow: "2px 2px 10px rgba(0,0,0,0.3)" }}>
                        <img src={slppca} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <p class="card-text" style = {{ fontWeight:"bold",marginTop: "20px", textAlign:"left"}}>Sri Lanka Professioanal Psychological Counsellor’s Association</p>
                        </div>
                    </div>
                </div>

                <div class="col-sm-3">
                    <div class="card" style={{height:"20rem",margin:"20px", boxShadow: "2px 2px 10px rgba(0,0,0,0.3)" }}>
                        <img src={foundation} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <p class="card-text" style = {{ fontWeight:"bold", marginTop: "20px", textAlign:"left"}}>Sri Lanka Foundation Institute</p>
                        </div>
                    </div>
                </div>

                <div class="col-sm-3">
                    <div class="card" style={{height:"20rem",margin:"20px", boxShadow: "2px 2px 10px rgba(0,0,0,0.3)" }}>
                        <img src={beauty} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <p class="card-text" style = {{ fontWeight:"bold", marginTop: "20px", textAlign:"left"}}>Ceylon Beauty and Aeatheticians Association</p>
                        </div>
                    </div>
                </div>

            </div>

            <div class="row">
                <div class="col-sm-3">
                    <div class="card" style={{height:"20rem",margin:"20px", boxShadow: "2px 2px 10px rgba(0,0,0,0.3)" }}>
                        <img src={youth} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <p class="card-text" style = {{ fontWeight:"bold", marginTop: "20px", textAlign:"left"}}>National Youth Services Council</p>
                        </div>
                    </div>
                </div>

                <div class="col-sm-3">
                    <div class="card" style={{height:"20rem",margin:"20px", boxShadow: "2px 2px 10px rgba(0,0,0,0.3)" }}>
                        <img src={youthcrop} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <p class="card-text" style = {{ fontWeight:"bold", marginTop: "20px", textAlign:"left"}}>National Youth Corps </p>
                        </div>
                    </div>
                </div>

                <div class="col-sm-3">
                    <div class="card" style={{height:"20rem",margin:"20px", boxShadow: "2px 2px 10px rgba(0,0,0,0.3)" }}>
                        <img src={youthsport} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <p class="card-text" style = {{ fontWeight:"bold", marginTop: "20px", textAlign:"left"}}>Ministry of Youth and Sports</p>
                        </div>
                    </div>
                </div>

                <div class="col-sm-3">
                    <div class="card" style={{height:"20rem",margin:"20px", boxShadow: "2px 2px 10px rgba(0,0,0,0.3)" }}>
                        <img src={education} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <p class="card-text" style = {{ fontWeight:"bold", marginTop: "20px", textAlign:"left"}}>Education Ministry</p>
                        </div>
                    </div>
                </div>
                
            </div>

            <div class="row">
                <div class="col-sm-3">
                    <div class="card" style={{height:"20rem",margin:"20px", boxShadow: "2px 2px 10px rgba(0,0,0,0.3)" }}>
                        <img src={british} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <p class="card-text" style = {{ fontWeight:"bold", marginTop: "20px", textAlign:"left"}}>British Council Sri Lanka</p>
                        </div>
                    </div>
                </div>

                <div class="col-sm-3">
                    <div class="card" style={{height:"20rem",margin:"20px", boxShadow: "2px 2px 10px rgba(0,0,0,0.3)" }}>
                        <img src={cricket} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <p class="card-text" style = {{ fontWeight:"bold", marginTop: "20px", textAlign:"left"}}>Sri Lanka Cricket Association for Physically Chalenged</p>
                        </div>
                    </div>
                </div>

                <div class="col-sm-3">
                    <div class="card" style={{height:"20rem",margin:"20px", boxShadow: "2px 2px 10px rgba(0,0,0,0.3)" }}>
                        <img src={citizen} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <p class="card-text" style = {{ fontWeight:"bold", marginTop: "20px", textAlign:"left"}}>Global Citizens</p>
                        </div>
                    </div>
                </div>

                <div class="col-sm-3">
                    <div class="card" style={{height:"20rem",margin:"20px", boxShadow: "2px 2px 10px rgba(0,0,0,0.3)" }}>
                        <img src={edutourism} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <p class="card-text" style = {{ fontWeight:"bold",marginTop: "20px", textAlign:"left"}}>Ceylon Edutourism Pvt Ltd</p>
                        </div>
                    </div>
                </div>
                
            </div>

            <div class="row">

                <div class="col-sm-3">
                                    
                </div>
               

                <div class="col-sm-3">
                    <div class="card" style={{height:"20rem",margin:"20px", boxShadow: "2px 2px 10px rgba(0,0,0,0.3)" }}>
                        <img src={edutourism} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <p class="card-text" style = {{ fontWeight:"bold", marginTop: "20px", textAlign:"left"}}>Global Study Tours Pvt Ltd</p>
                        </div>
                    </div>
                </div>

                <div class="col-sm-3">
                    <div class="card" style={{height:"20rem",margin:"20px", boxShadow: "2px 2px 10px rgba(0,0,0,0.3)" }}>
                        <img src={edutourism} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <p class="card-text" style = {{ fontWeight:"bold", marginTop: "20px", textAlign:"left"}}>International Learning Pathways Pvt Ltd</p>
                        </div>
                    </div>
                </div>

                <div class="col-sm-3">
                                
                </div>
                
                
            </div>

        </div>

    </div>
)
} 

export default Local