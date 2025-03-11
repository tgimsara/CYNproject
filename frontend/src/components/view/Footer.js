import React from "react";
import './footer.css';

import logo from '../image/cyn.png';

const Footer = () => {

    return (
        <footer id="footer">
    
          <div className="leftFooter">
            <h4>CYN SRI LANKA</h4>
            <div className="subscribe-container">
              <img style={{ margin: "0px 0px 0px -20px",width: "150px", height: "150px", objectFit: "cover" }} class="logoimg" src={logo} alt="Logo"/>
            </div>
            <p>Stay informed with our latest news and exclusive content.</p>
          </div>
    
          <div className="midFooter">
            <h3>Commonwealth Youth Network of Sri Lanka</h3>
            <p>CYN Sri Lanka empowers youth through global opportunities and strategic partnerships.</p>
            <p>© 2025 CYN. All Rights Reserved.</p>
            {/* <h4>Follow Us</h4>
            <div class="social-icons">
              <a href="https://www.linkedin.com/in/saadamin662/" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/saad662" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-github"></i>
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-instagram"></i>
              </a>
            </div> */}
          </div>
    
          
          <div className="rightFooter">
                 <h5 className="text-uppercase">Quick Links</h5>
                 <ul className="list-unstyled nav-underline">
                    <li class="nav-item">
                    <a class="nav-link  " aria-current="page" href="/">Home</a>
                    </li><br/>
                    <li class="nav-item">
                    <a class="nav-link  " aria-current="page" href="/program">Program</a>
                    </li><br/>
                    <li class="nav-item">
                    <a class="nav-link  " aria-current="page" href="/partner">Partner</a>
                    </li><br/>
                    <li class="nav-item">
                    <a class="nav-link  " aria-current="page" href="/gallery">Gallery</a>
                    </li><br/>
                    <li class="nav-item">
                    <a class="nav-link  " aria-current="page" href="#contactus">Contact Us</a>
                    </li>

                     
                 </ul>
             </div>

    
        </footer>
      );
    };

//     return(

// <footer className="page-footer font-small blue pt-4">
//     <div className="container-fluid text-center text-md-left">
//         <div className="row">
//             <div className="col-md-4 mt-md-0 mt-3">
//                 <h5 style={{ margin: "0px 0px 0px -130px"}} className="text-uppercase">CYN SRI LANKA</h5>
//                 <img style={{ margin: "0px 0px 0px -150px",width: "150px", height: "150px", objectFit: "cover" }}  class="logoimg" src={logo} alt="Logo"/>
//                 <p>Here you can use rows and columns to organize your footer content.</p>
//             </div>

//             <hr className="clearfix w-100 d-md-none pb-0"/>

//             <div className="col-md-4 mb-md-0 mb-3">
//                 <h5 className="text-uppercase">Links</h5>
//                 <ul className="list-unstyled">
//                     <li><a href="#!">Link 1</a></li>
//                     <li><a href="#!">Link 2</a></li>
//                     <li><a href="#!">Link 3</a></li>
//                     <li><a href="#!">Link 4</a></li>
//                 </ul>
//             </div>

//             <div className="col-md-4 mb-md-0 mb-3">
//                 <h5 className="text-uppercase">Links</h5>
//                 <ul className="list-unstyled">
//                     <li><a href="#!">Link 1</a></li>
//                     <li><a href="#!">Link 2</a></li>
//                     <li><a href="#!">Link 3</a></li>
//                     <li><a href="#!">Link 4</a></li>
//                 </ul>
//             </div>
//         </div>
//     </div>

//     <div className="footer-copyright text-center py-3">© 2020 Copyright:
//         <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
//     </div>

// </footer>

//     )
// } 

export default Footer