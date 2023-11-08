import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const api = "http://localhost:3000/login";
const LoginScreen = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const validateInputs = () => {
    if (!email || !password) {
      setError("Please fill in all fields.");
      return false;
    }
    setError("");
    return true;
  };

  const login = async (e) => {
    e.preventDefault();

    if (validateInputs()) {
      axios
        .post(api, {
          email,
          password,
        })
        .then(async (res) => {
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
        })
        .catch((err) => {
          console.log(err);
          setError("Wrong Password or Invalid Email");
        });
    }
  };
  return (
    <div className="flex justify-center items-center h-screen gap-80 bg-blue-700">
      <div className="text-8xl text-white font-bold hidden md:flex">
        Beautiful
        <br /> Login
        <br /> Form
      </div>
      <div className="bg-white px-14 py-8 rounded-2xl">
        <h1 className="font-bold text-5xl mb-2">Welcome Back!</h1>
        <h1 className="mb-12">Login to continue</h1>
        <form onSubmit={login} className="flex flex-col gap-6 my-4">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="border border-black px-2 py-1 text-2xl rounded-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
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

          <div className="text-red-500">{error}</div>
          <button
            type="submit"
            className="bg-blue-500 rounded-lg text-white py-2 text-2xl"
          >
            Enter
          </button>

          <div>
            <h1 className="text-center">
              New user ?{" "}
              <Link to={"/register"} className="text-blue-600 font-bold">
                Sign up
              </Link>
            </h1>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
