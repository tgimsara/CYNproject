import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
// import axios from 'axios';
import Header from '../Headers/Header';
import Footer from '../Footer';

import cele1 from '../../image/cele1.png';
import cele2 from '../../image/cele2.png';
import  cele3 from '../../image/cele3.png';
import  cele4 from '../../image/cele4.png';





const Webinar = () => {


  return (
    <div>
         <Header/>

         <div class="container text-center">
                                <div class="row" style= {{ margin : "40px 0px 60px 0px"}}>
            
                                
                                 <div class="col">
                                    <div class="card">
                                        <div id="fb-root"></div>
                                            <script async defer crossorigin="anonymous" 
                                            src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v18.0" 
                                            nonce="randomString">
                                            </script>

                                            <div class="fb-video" data-href="https://www.facebook.com/commonwealthyouthnetworksrilanka/videos/1209119209421848" 
                                            data-width="500" data-show-text="false">
                                            </div>
                                        </div>
                                    </div>

                                    

                                    <div class="col">
                                    {/* <div class="card" >
                                        <img src={m1} class="card-img " alt="..."/>
                                    </div> */}
                                    </div>
    
                                    <div class="col">
                                    {/* <div class="card" >
                                        <img src={m8} class="card-img " alt="..."/>
                                    </div> */}
                                    </div>                                                                      
    
                                    
    
                                </div>
                               
    
                                

                            </div>
    
    <Footer/>
    </div>
  )
}

export default Webinar