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
  const [selectedPayment, setSelectedPayment] = useState("");
  const [showBankForm, setShowBankForm] = useState(false);
  
  // Bank form states
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [bankSlip, setBankSlip] = useState(null);

  const handleSubscribe = () => {
    if(selectedPayment === 'payhere') {
      window.location.href = `https://payhere.lk/pay/checkout?merchant_id=YOUR_MERCHANT_ID&return_url=YOUR_RETURN_URL&cancel_url=YOUR_CANCEL_URL&notify_url=YOUR_NOTIFY_URL&order_id=${Date.now()}&items=Annual_Membership&amount=5000&currency=LKR`;
    } else if(selectedPayment === 'bank') {
      // Close subscription modal and show bank form
      document.getElementById('subscribeModal').classList.add('fade-out');
      setTimeout(() => {
        document.getElementById('subscribeModal').classList.remove('show');
        document.getElementById('bankDepositModal').classList.add('show');
        document.getElementById('bankDepositModal').style.display = 'block';
        document.getElementById('bankDepositModal').classList.add('fade-in');
      }, 300);
    }
  };

  const handleBankFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('address', address);
    formData.append('phone', phone);
    formData.append('bankSlip', bankSlip);

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
      document.getElementById('bankDepositModal').classList.remove('show');
      document.getElementById('bankDepositModal').style.display = 'none';
      setName("");
      setAddress("");
      setPhone("");
      setBankSlip(null);
    }).catch((e) => {
      swal("Error", "Something went wrong!", "error");
    });
  };

  const handleFileUpload = (e) => {
    setBankSlip(e.target.files[0]);
  };

  // ... rest of your existing code until the modals ...

  return (
    <div>
      {/* ... your existing navbar code ... */}

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
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bank Deposit Modal */}
      <div className="modal" id="bankDepositModal" aria-labelledby="bankDepositModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="bankDepositModalLabel">Bank Deposit Details</h5>
              <button type="button" className="btn-close" onClick={() => {
                document.getElementById('bankDepositModal').classList.remove('show');
                document.getElementById('bankDepositModal').style.display = 'none';
              }}></button>
            </div>
            <div className="modal-body">
              <div className="bank-info-card">
                <h6>Bank Account Details</h6>
                <div className="bank-details">
                  <p><strong>Bank:</strong> Example Bank</p>
                  <p><strong>Account Number:</strong> 1234-5678-9012</p>
                  <p><strong>Account Name:</strong> Organization Name</p>
                  <p><strong>Branch:</strong> Main Branch</p>
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
  )
}

export default Header
