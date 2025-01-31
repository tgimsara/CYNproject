import React, { useEffect } from 'react';
// import axios from 'axios';
// import { useState } from 'react';
// import {NavLink,Link} from 'react-router-dom';

import './Sign.css'

const SignUp = () =>{

return (

        <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-xl font-bold mb-4">Sign Up</h2>
        <form>
          <div className="mb-4 flex space-x-4">
            <div className="w-1/2">
              <label className="block text-gray-700">First Name</label>
              <input
                type="text"
                name="firstName"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="w-1/2">
              <label className="block text-gray-700">Last Name</label>
              <input
                type="text"
                name="lastName"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Sign Up
          </button>
        </form>
      </div>
  

  )
}
export default SignUp
