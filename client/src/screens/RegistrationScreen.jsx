import React from "react";
import {Link} from 'react-router-dom'

const RegistrationScreen = () => {
  return (
    <div className="flex justify-center items-center h-screen gap-80 bg-blue-700">
      <div className="text-8xl text-white font-bold">
        Beautiful<br /> Sign
        Up<br /> Form
        </div>
      <div className="bg-white px-14 py-8 rounded-2xl">
        <h1 className="font-bold mb-12 text-5xl">Registration</h1>
        <form action="" className="flex flex-col gap-6 my-4">
          <input type="text" placeholder="Enter Your Name"
           className="border border-black px-2 py-1 text-2xl rounded-lg shadow-lg " />
          <input type="text" placeholder="Enter Your Email"
           className="border border-black px-2 py-1 text-2xl rounded-lg" />
          <input type="text" placeholder="Create Password"
           className="border border-black px-2 text-2xl py-1 rounded-lg" />
          <input type="text" placeholder="Confirm Password"
           className="border border-black px-2 text-2xl py-1 rounded-lg" />
            <div className="flex gap-2">
            <input type="checkbox"/> <h1>I accept all terms & conditions.</h1>
            </div>
            <button className="bg-blue-500 rounded-lg text-white py-2">Register Now</button>
            <h1 className="mb-4 text-center">Already have an account? <Link to={'/login'} className="text-blue-600 font-bold cursor-pointer">Login now</Link></h1>
        </form>
      </div>
      
    </div>
  );
};

export default RegistrationScreen;
