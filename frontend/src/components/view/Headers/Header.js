import React from 'react'
import { useState, useEffect } from 'react';
import {NavLink,Link,useNavigate} from 'react-router-dom';
import './header.css';
import logo from '../../image/cyn.png';
import axios from "axios";
import swal from "sweetalert";

const Header = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedPayment, setSelectedPayment] = useState("");
  const [currentDateTime, setCurrentDateTime] = useState("");
  const [currentUser, setCurrentUser] = useState("");
  
  // Bank form states
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [bankSlip, setBankSlip] = useState(null);

  useEffect(() => {
    // Update date and time every second
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentDateTime(now.toISOString().slice(0, 19).replace('T', ' '));
    }, 1000);

    // Get current user from localStorage
    const user = localStorage.getItem("name") || "Guest";
    setCurrentUser(user);

    return () => clearInterval(timer);
  }, []);

  const handleSubscribe = () => {
    if(selectedPayment === 'payhere') {
      window.location.href = `https://payhere.lk/pay/checkout?merchant_id=YOUR_MERCHANT_ID&return_url=YOUR_RETURN_URL&cancel_url=YOUR_CANCEL_URL&notify_url=YOUR_NOTIFY_URL&order_id=${Date.now()}&items=First_Year_Membership&amount=5100&currency=LKR`;
    } else if(selectedPayment === 'bank') {
      const subscribeModal = document.getElementById('subscribeModal');
      const bankModal = document.getElementById('bankDepositModal');
      
      // Hide subscribe modal
      const bootstrapSubscribeModal = bootstrap.Modal.getInstance(subscribeModal);
      bootstrapSubscribeModal.hide();

      // Show bank deposit modal
      setTimeout(() => {
        const bankDepositModal = new bootstrap.Modal(bankModal);
        bankDepositModal.show();
      }, 500);
    }
  };

  const handleBankFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('address', address);
    formData.append('phone', phone);
    formData.append('bankSlip', bankSlip);
    formData.append('timestamp', currentDateTime);
    formData.append('user', currentUser);

    axios.post('http://localhost:8090/User/bankDeposit', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(() => {
      swal({
        title: "Success!",
        text: "Form Submitted Successfully",
        icon: 'success',
        timer: 2000,
        button: false,
      });
      // Close modal and reset form
      const bankModal = document.getElementById('bankDepositModal');
      const bootstrapBankModal = bootstrap.Modal.getInstance(bankModal);
      bootstrapBankModal.hide();
      
      // Reset form fields
      setName("");
      setAddress("");
      setPhone("");
      setBankSlip(null);
      setSelectedPayment("");
    }).catch((e) => {
      swal("Error", "Something went wrong!", "error");
    });
  };

  const handleFileUpload = (e) => {
    setBankSlip(e.target.files[0]);
  };

  const login = () => {
    const loginUser = {email, password};

    axios.post(`http://localhost:8090/User/login`,loginUser).then((res)=>{
      localStorage.setItem("id",res.data.id);
      localStorage.setItem("name",res.data.name);
      localStorage.setItem("email",res.data.email);

      if(res.data.status){
        setCurrentUser(res.data.name);
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
      <div className="system-info">
        <span className="datetime">{currentDateTime}</span>
        <span className="user-info">User: {currentUser}</span>
      </div>
      
      <nav className="navbar navbar-expand-lg bg-body-tertiary navbar" style={{ position:"fixed" , width:"100%"}}>
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
                {currentUser === "Guest" ? (
                  <>
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
                  </>
                ) : (
                  <li className="nav-item">
                    <button 
                      type="button" 
                      className="btn btn-outline-primary"
                      onClick={() => {
                        localStorage.clear();
                        setCurrentUser("Guest");
                        navigate("/");
                      }}
                    >
                      Logout
                    </button>
                  </li>
                )}
              </div>
            </ul>

            {/* Sign In Modal */}
            <div className="modal fade" id="signInModal" tabIndex="-1" aria-labelledby="signInModalLabel" aria-hidden="true">
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
            <div className="modal fade" id="subscribeModal" tabIndex="-1" aria-labelledby="subscribeModalLabel" aria-hidden="true">
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
                      <h2>Membership Fee Details</h2>
                      
                      <div className="fee-breakdown">
                        <div className="fee-item">
                          <span className="fee-label">Annual Fee</span>
                          <span className="fee-amount">LKR 3,600</span>
                        </div>
                        <div className="fee-item">
                          <span className="fee-label">New Member Registration</span>
                          <span className="fee-amount">LKR 1,500</span>
                        </div>
                        <div className="fee-item total">
                          <span className="fee-label">First-year Total</span>
                          <span className="fee-amount">LKR 5,100</span>
                        </div>
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
                        Continue
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bank Deposit Modal */}
            <div className="modal fade" id="bankDepositModal" tabIndex="-1" aria-labelledby="bankDepositModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="bankDepositModalLabel">Bank Deposit Details</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <div className="bank-info-card">
                      <h6>Bank Account Details</h6>
                      <div className="bank-details">
                        <p><strong>Bank:</strong> Example Bank</p>
                        <p><strong>Account Number:</strong> 1234-5678-9012</p>
                        <p><strong>Account Name:</strong> Organization Name</p>
                        <p><strong>Branch:</strong> Main Branch</p>
                        <p><strong>Amount to Deposit:</strong> LKR 5,100</p>
                      </div>
                    </div>
                    <form onSubmit={handleBankFormSubmit} className="bank-deposit-form">
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="nameInput"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Full Name"
                          required
                        />
                        <label htmlFor="nameInput">Full Name</label>
                      </div>

                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="addressInput"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          placeholder="Address"
                          required
                        />
                        <label htmlFor="addressInput">Address</label>
                      </div>

                      <div className="form-floating mb-3">
                        <input
                          type="tel"
                          className="form-control"
                          id="phoneInput"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="Phone Number"
                          required
                        />
                        <label htmlFor="phoneInput">Phone Number</label>
                      </div>

                      <div className="mb-4">
                        <label htmlFor="bankSlip" className="form-label">Upload Bank Deposit Slip</label>
                        <input
                          type="file"
                          className="form-control"
                          id="bankSlip"
                          onChange={handleFileUpload}
                          accept="image/*,.pdf"
                          required
                        />
                      </div>

                      <div className="d-grid">
                        <button type="submit" className="btn btn-primary btn-lg submit-btn">
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
