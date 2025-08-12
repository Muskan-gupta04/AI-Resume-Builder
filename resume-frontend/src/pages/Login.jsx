import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in with:", email, password);
    // Add your login logic here (API call or Firebase, etc.)
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-base-100 rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-base-content mb-6">
          Login to <span className="text-blue-700">ResumeForge</span>
        </h1>

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="form-control">
            <label className="label font-semibold text-base-content">Email</label>
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full pl-10"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-900" />
            </div>
          </div>

          <div className="form-control">
            <label className="label font-semibold text-base-content">Password</label>
            <div className="relative">
              <input
                type="password"
                placeholder="Enter your password"
                className="input input-bordered w-full pl-10"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-900" />
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-primary w-full hover:bg-blue-600 transition-all duration-300"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-center mt-4 text-gray-500">
          Don’t have an account? <span className="text-blue-700 cursor-pointer hover:underline">Sign up</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
