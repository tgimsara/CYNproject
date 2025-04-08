import React from 'react'
import { useState } from 'react';
import {NavLink,Link,useNavigate} from 'react-router-dom';
import './header.css';
import logo from '../../image/cyn.png';
import axios from "axios";
import swal from "sweetalert";

const Header = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState("");

  const handleSubscribe = () => {
    if(selectedPayment === 'payhere') {
      window.location.href = `https://payhere.lk/pay/checkout?merchant_id=YOUR_MERCHANT_ID&return_url=YOUR_RETURN_URL&cancel_url=YOUR_CANCEL_URL&notify_url=YOUR_NOTIFY_URL&order_id=${Date.now()}&items=Annual_Membership&amount=3600&currency=LKR`;
    } else if(selectedPayment === 'bank') {
      // Show bank details and file upload in a new modal or redirect to a form page
      navigate("/registration");
    }
  };

  const login = () => {
    const loginUser = {email, password};
    axios.post(`http://localhost:8090/User/login`,loginUser).then((res)=>{
      localStorage.setItem("id",res.data.id);
      localStorage.setItem("name",res.data.name);
      localStorage.setItem("email",res.data.email);

      if(res.data.status){
        swal({
          title: "Success!",
          text: "Login Successful !",
          icon: 'success',
          timer: 2000,
          button: false,
        });
        navigate("/",{
          state:{
            id:res.data._id
          }
        });
      } else {
        swal({
          title: "Warning!",
          text: "Login Unsuccessful !",
          icon: 'error',
          timer: 2000,
          button: false,
        });
        setEmail("");
        setPassword("");
      }
    });
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary navbar" style={{ position:"fixed" , width:"100%"}}>
        {/* ... existing navbar code ... */}
        <div className="container-fluid">
          <img style={{ margin: "0px", width: "100px", height: "100px", objectFit: "cover" }} className="logoimg" src={logo} alt="Logo"/>
                           
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav nav-underline me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/program">Programs</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/partner">Partners</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/gallery">Gallery</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#contactus">Contact Us</a>
              </li>

              <div className="rightside">
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="modal" data-bs-target="#signInModal" aria-current="page" href="#signInModal">
                    <button type="submit" className="btn btn-primary">Sign In</button>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="modal" data-bs-target="#subscribeModal" aria-current="page" href="#subscribeModal">
                    <button type="submit" className="btn btn-primary">Subscribe</button>
                  </a>
                </li>
              </div>
            </ul>

            {/* Sign In Modal */}
            <div className="modal fade" id="signInModal" aria-labelledby="signInModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="signInModalLabel">Sign In</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput" 
                          value={email} onChange={e => setEmail(e.target.value)} placeholder="name@example.com"/>
                        <label htmlFor="floatingInput">Email address</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input type="password" className="form-control" id="floatingPassword"
                          value={password} onChange={e => setPassword(e.target.value)} placeholder="Password"/>
                        <label htmlFor="floatingPassword">Password</label>
                      </div>
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={login}>Sign In</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Subscribe Modal */}
            <div className="modal fade" id="subscribeModal" aria-labelledby="subscribeModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header border-0">
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body text-center pb-5">
                    <div className="subscription-plan">
                      <div className="plan-icon">
                        <i className="fas fa-crown"></i>
                      </div>
                      <h2>Premium Membership</h2>
                      <div className="price">
                        <span className="currency">LKR</span>
                        <span className="amount">5,000</span>
                        <span className="period">/year</span>
                      </div>
                      <ul className="features">
                        <li><i className="fas fa-check"></i> Access to all programs</li>
                        <li><i className="fas fa-check"></i> Exclusive member benefits</li>
                        <li><i className="fas fa-check"></i> Priority support</li>
                        <li><i className="fas fa-check"></i> Special event invitations</li>
                      </ul>
                      <div className="payment-options">
                        <h6>Select Payment Method</h6>
                        <div className="payment-buttons">
                          <button 
                            className={`payment-btn ${selectedPayment === 'payhere' ? 'active' : ''}`}
                            onClick={() => setSelectedPayment('payhere')}
                          >
                            <i className="fas fa-credit-card"></i>
                            PayHere
                          </button>
                          <button 
                            className={`payment-btn ${selectedPayment === 'bank' ? 'active' : ''}`}
                            onClick={() => setSelectedPayment('bank')}
                          >
                            <i className="fas fa-university"></i>
                            Bank Deposit
                          </button>
                        </div>
                      </div>
                      <button 
                        className="subscribe-btn"
                        onClick={handleSubscribe}
                        disabled={!selectedPayment}
                      >
                        Subscribe Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
