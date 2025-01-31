import React, { useEffect } from 'react';
// import axios from 'axios';
// import { useState } from 'react';
// import {NavLink,Link} from 'react-router-dom';

import './Sign.css'

const SignIn = () =>{

return (

    <div class="container">
      <div class="form-box login"></div>
        <form action="#">
          <h4>Sign In</h4>
            <div class="input-box">
              <input type="text" placeholder="User Name" required>
              </input>
            </div>

            <div class="input-box">
              <input type="password" placeholder="Password" required>
              </input>
            </div>

            <button type="submit" class="btn1">Sign In</button>
        </form>        
    </div>

  )
}
export default SignIn
