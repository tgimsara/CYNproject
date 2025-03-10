import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
// import axios from 'axios';
import Header from '../Headers/Header';
import sound from '../../image/sound/sound.jpg'
import sound1 from '../../image/sound/sound1.jpg'
import sound2 from '../../image/sound/sound2.jpg'
import sound3 from '../../image/sound/sound3.jpg'
import sound4 from '../../image/sound/sound4.jpg'
import sound5 from '../../image/sound/sound5.jpg'
import sound6 from '../../image/sound/sound6.jpg'




const ViewEye = () => {


  return (
    <div>
         <Header/>

         <div class="container text-center">
                                <div class="row" style= {{ margin : "180px 0px 60px 0px"}}>
            
                                    <div class="col">
                                    <div class="card" >
                                        <img src={sound} class="card-img " alt="..."/>
                                    </div>
                                    </div>
    
                                    <div class="col">
                                    <div class="card">
                                        <img src={sound1} class="card-img " alt="..."/>  
                                    </div>
                                    </div>
    
                                    <div class="col">
                                    <div class="card" >
                                        <img src={sound2} class="card-img " alt="..."/>
                                    </div>
                                    </div>
    
                                    <div class="col">
                                    <div class="card" >
                                        <img src={sound3} class="card-img " alt="..."/>
                                    </div>
                                    </div>
                                </div>
    
                                <div class="row">
                                 <div class="col">
                                    <div class="card">
                                        <img src={sound4} class="card-img " alt="..."/>
                                    </div>
                                    </div>
    
                                    <div class="col">
                                    <div class="card">
                                        <img src={sound5} class="card-img " alt="..."/>
                                    </div>
                                    </div>
    
                                    <div class="col">
                                    
                                    </div>
    
                                    <div class="col">
                                    {/* <div class="card">
                                        <img src={sound7} class="card-img " alt="..."/>
                                    </div> */}
                                    </div>
    
                                </div>

                            </div>
    

    </div>
  )
}

export default ViewEye