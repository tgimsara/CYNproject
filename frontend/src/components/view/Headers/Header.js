import React from 'react'
import { useState } from 'react';
import {NavLink,Link,useNavigate} from 'react-router-dom';
import './header.css';
import logo from '../../image/cyn.png';
import axios from "axios";
import swal from "sweetalert";

const Header = () => {

  const navigate = useNavigate();

    const [name, setName] = useState("");
    const [date, setDateOfBirth] = useState("");
    const [gender, setGender] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [whatsappnumber, setWhatsappMobileNumber] = useState("");
    const [parentnumber, setParentMobileNumber] = useState("");
    // const [category, setCategory] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    

    function sendData(e){
        const newForm={

          name,
          date,
          gender,
          email,
          address,
          whatsappnumber,
          parentnumber,
          // category,
          password,
          confirmpassword

    }

    if( name==='' && email === '' && password === '' && date === '' && gender==='' && address === '' && whatsappnumber === '' && parentnumber === ''  && confirmpassword === '' ) {
        swal("All Fields are empty");
    }else if(name === ''){
        swal("Name Field is empty")
    }else if(email === ''){
        swal("Email Field is empty")
    }else if(password === ''){
        swal("Password Field is empty")
    }else if(date === ''){
        swal("Date of Birth Field is empty")
    }else if(gender === ''){
        swal("Gender Field is empty")
    }else if(address === ''){
        swal("Address Field is empty")
    }else if(whatsappnumber === ''){
        swal("Whatsapp Number Field is empty")
    }else if(parentnumber === ''){
        swal("Parent Mobile Number Field is empty")
    }else if(confirmpassword === ''){
      swal("Confirm Password Field is empty")
    }   
    else{

    axios.post('http://localhost:8090/User/add',newForm).then(()=>{

        swal({
        title: "Success!",
        text: "Registered Successfully",
        icon: 'success',
        timer: 2000,
        button: false,
        });
        const timer = setTimeout(() => {
          window.location.reload()
        }, 2000);                             
    }).catch((e)=>{
    alert(e);
    })

    }

    }
               
    const login = ()  => {

        const loginUser = {email, password};

        axios.post(`http://localhost:8090/User/login`,loginUser).then((res)=>{

            localStorage.setItem("id",res.data.id);
            localStorage.setItem("name",res.data.name);
            localStorage.setItem("email",res.data.email);

            if(res.data.status){
                swal({
                    title: "Success!",
                    text: "Login Successfull !",
                    icon: 'success',
                    timer: 2000,
                    button: false,
                  });
                  navigate("/",{
                    state:{
                        id:res.data._id
                    }
                   })
                 
      }else{
                swal({
                    title: "Warning!",
                    text: "Login Unsuccessfull !",
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
                  

                    <div class="rightside">
                    <li className="nav-item">
                    <a className="nav-link " data-bs-toggle="modal"
                     data-bs-target="#signInModal" data-bs-whatever="@fat" aria-current="page" href="#signInModal"><button  type="submit" class="btn btn-primary">Sign In</button></a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link " data-bs-toggle="modal"
                     data-bs-target="#signUpModal" data-bs-whatever="@fat" aria-current="page" href="#signUpModal"><button  type="submit" class="btn btn-primary">Sign Up</button></a>
                    </li>
                    </div>                 
                </ul>

                {/*------------------- Sign In Modal--------------------- */}

                  <div class="modal fade" id="signInModal" aria-labelledby="signInModalLabel" aria-hidden="true">
                  <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="signInModalLabel">Sign In</h5>   
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">

                        <form>

                        <div class="form-floating mb-3">
                          <input type="email" class="form-control" id="floatingInput" 
                          value={email} onChange={e => setEmail(e.target.value)} placeholder="name@example.com"/>
                          <label for="floatingInput">Email address</label>
                        </div>
                        <div class="form-floating mb-3">
                          <input type="password" class="form-control" id="floatingPassword"
                          value={password} onChange={e => setPassword(e.target.value)} placeholder="Password"/>
                          <label for="floatingPassword">Password</label>
                        </div>
                        

                        </form>

                      </div>
                      <div class="modal-footer">

                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={(e)=>login()} >Sign In</button>

                      </div>
                    </div>
                  </div>
                </div>

                {/*--------------------------------------------------------- */}

                {/*------------------- Sign Up Modal--------------------- */}

                <div class="modal fade" id="signUpModal" aria-labelledby="signUpModalLabel" aria-hidden="true">
                  <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="signUpModalLabel">Sign Up</h5>   
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">

                        <form>

                        <div class="form-floating mb-3">
                          <input type="name" class="form-control" id="floatingInput" 
                          onChange={(e) => ( setName(e.target.value) )} placeholder="Name"/>
                          <label for="floatingInput">Name</label>
                        </div>
                        <select class="form-select" id="gender" onChange={(e) => ( setGender(e.target.value) )} aria-label="Floating label select example">
                          <option selected disabled>Select Gender</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                        </select>
                        <div class="form-floating mb-3">
                          <input type="date" class="form-control" id="floatingInput"
                          onChange={(e) => ( setDateOfBirth(e.target.value) )} placeholder="DD/MM/YY"/>
                          <label for="floatingInput">Date of Birth</label>
                        </div>
                        <div class="form-floating mb-3">
                          <input type="email" class="form-control" id="floatingInput"
                          onChange={(e) => ( setEmail(e.target.value) )} placeholder="name@example.com"/>
                          <label for="floatingInput">Email address</label>
                        </div>
                        <div class="form-floating mb-3">
                          <input type="address" class="form-control" id="floatingInput"
                          onChange={(e) => ( setAddress(e.target.value) )} placeholder="Address"/>
                          <label for="floatingInput">Address</label>
                        </div>
                        <div class="form-floating mb-3">
                          <input type="whatsappnumber" class="form-control" id="floatingInput"
                          onChange={(e) => ( setWhatsappMobileNumber(e.target.value) )} placeholder="Whatsapp Number"/>
                          <label for="floatingInput">Whatsapp Mobile Number</label>
                        </div>
                        <div class="form-floating mb-3">
                          <input type="parentnumber" class="form-control" id="floatingInput"
                          onChange={(e) => ( setParentMobileNumber(e.target.value) )} placeholder="Parent Mobile Number"/>
                          <label for="floatingInput">Parent Mobile Number</label>
                        </div>
                        {/* <div class="form-floating mb-3">
                          <input type="name" class="form-control" id="floatingInput"
                          onChange={(e) => ( setStudent(e.target.value) )} placeholder="Student"/>
                          <label for="floatingInput">Student</label>
                        </div> */}
                        <div class="form-floating mb-3">
                          <input type="password" class="form-control" id="floatingPassword" 
                          onChange={(e) => ( setPassword(e.target.value) )} placeholder="Password"/>
                          <label for="floatingPassword">Password</label>
                        </div>
                        <div class="form-floating mb-3">
                          <input type="password" class="form-control" id="floatingPassword" 
                          onChange={(e) => ( setConfirmPassword(e.target.value) )} placeholder="Confirm Password"/>
                          <label for="floatingPassword"> Confirm Password</label>
                        </div>
                        

                        </form>

                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-primary" onClick={sendData} >Sign Up</button>
                      </div>
                    </div>
                  </div>
                </div>

                {/*--------------------------------------------------------- */}



                </div>
            </div>
            </nav>

    </div>
  )
}


export default Header