import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const RegistrationScreen = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);
  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);

  const validateInputs = () => {
    if (!name || !email || !password || !cPassword) {
      setError("Please fill in all fields.");
      return false;
    }
    if (password !== cPassword) {
      setError("Passwords do not match.");
      return false;
    }
    setError("");
    return true;
  };

  const register = (e) => {
    e.preventDefault();
    if (validateInputs()) {
      axios
        .post("http://localhost:3000/register", {
          name: name,
          password: password,
          email: email,
          phonenumber: phonenumber,
        })
        .then((res) => {
          // Handle the response from the server if needed.
          console.log(res.data);
          const jsonData = {
            email: res.data.data.email,
            isAdmin: res.data.data.isAdmin,
            name: res.data.data.name,
            id: res.data.data._id,
          };
          const sjson = JSON.stringify(jsonData);
          localStorage.setItem("user_data", sjson);
          if (jsonData.isAdmin) {
            navigate("/adminPage");
          } else navigate("/");
          console.log("Registration successful!");
        })
        .catch((error) => {
          // Handle registration errors.
          console.error("Registration failed:", error);
        });
    } else {
      setShowError(true);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen gap-8 bg-blue-700">
      <div className="text-8xl text-white font-bold gap-x-7">
        Sign Up
        <br /> Form
      </div>
      <div className="bg-white px-14 py-8 rounded-2xl">
        <h1 className="font-bold text-5xl mb-12">Registration</h1>
        <form onSubmit={register} className="flex flex-col gap-6 my-4">
          <input
            required
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Your Name"
            className="border border-black px-2 py-1 text-2xl rounded-lg shadow-lg"
          />
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email"
            className="border border-black px-2 py-1 text-2xl rounded-lg"
          />
          <input
            required
            type="text"
            value={phonenumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter Your Phone"
            className="border border-black px-2 py-1 text-2xl rounded-lg"
          />
          {/* Password */}
          <div className="flex items-center border border-black rounded-lg">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Create Password"
              className="w-full py-2 px-4 outline-none text-2xl rounded-lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div
              className="p-2 cursor-pointer"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                  />
                </svg>
              )}
            </div>
          </div>
          {/* Confirm Password */}
          <div className="flex items-center border border-black rounded-lg">
            <input
              type={showCPassword ? "text" : "password"}
              placeholder="Confirm Password"
              className="w-full py-2 px-4 outline-none text-2xl rounded-lg"
              value={cPassword}
              onChange={(e) => setCPassword(e.target.value)}
            />
            <div
              className="p-2 cursor-pointer"
              onClick={() => setShowCPassword((prev) => !prev)}
            >
              {showCPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-0.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                  />
                </svg>
              )}
            </div>
          </div>
          {showError && <h1 className="text-red-600">{error}</h1>}
          <div className="flex gap-2 items-center">
            <input className="flex-col items-center justify-center" type="checkbox" required />{" "}
            <h1>I accept all <Link to={"https://www.termsandconditionsgenerator.com/live.php?token=M5c2ZHrAyaz6Awgex1AxibkY91qkC12p"} className="text-blue-600 font-bold underline cursor-pointer">Terms & Conditions</Link>.</h1>
          </div>
          <button
            type="submit"
            className="bg-blue-500 rounded-lg text-white py-2"
          >
            Register Now
          </button>
          <h1 className="mb-4 text-center">
            Already have an account?{" "}
            <Link
              to={"/login"}
              className="text-blue-600 font-bold cursor-pointer"
            >
              Login now
            </Link>
          </h1>
        </form>
      </div>
    </div>
  );
};

export default RegistrationScreen;
