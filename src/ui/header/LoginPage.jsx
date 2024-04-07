import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { useState } from "react";

export default function LoginPage({ onCancel }) {
  const [activeLogin, setActiveLogin] = useState(true);

  return (
    <>
      <div
        onClick={onCancel}
        className="w-full text-right px-6 py-2 text-xl text-gray-500">
        <button>x</button>
      </div>
      <div className="topLoginPage text-2xl text-gray-500 font-semibold text-center space-x-12 p-4">
        <button onClick={() => setActiveLogin(true)} className="">
          Login
        </button>
        <button onClick={() => setActiveLogin(false)}>Sign Up</button>
      </div>
      <div className="midLoginPage pt-4 px-6">
        <form>
          <p className="font-semibold ">Email Address</p>
          <input
            className="p-4 mt-2 mb-6 boder-solid border-2 rounded-lg w-full"
            type="text"
            placeholder="Enter your email address..."
          />
          <p className="font-semibold ">Password</p>
          <input
            className="p-4 mt-2 mb-6 boder-solid border-2 rounded-lg w-full"
            type="text"
            placeholder="Enter your password..."
          />
          {activeLogin && (
            <button
              className="bg-blue-600 w-full text-lg text-white py-3 rounded-lg mt-4"
              type="submit">
              Login
            </button>
          )}
          {!activeLogin && (
            <div className="flex items-baseline space-x-2">
              <input type="checkbox" />
              <p>
                Please keep me updated by email with the latest crypto news,
                research findings, reward programs, event updates, coin listings
                and more information from CoinMarketCap.
              </p>
            </div>
          )}
          {!activeLogin && (
            <button
              className="bg-blue-600 w-full text-lg text-white py-3 rounded-lg mt-4"
              type="submit">
              Sign Up
            </button>
          )}
        </form>
        <div>
          <p className="font-bold text-gray-900 text-center my-4">OR</p>
        </div>

        <button className="flex flex-row items-center justify-center space-x-4 w-full text-lg boder-solid border-2 rounded-lg py-2">
          <FcGoogle />
          <span>Continue with Google</span>
        </button>

        <button className="flex flex-row items-center justify-center space-x-4 w-full text-lg boder-solid border-2 rounded-lg mt-4 py-2">
          <FaFacebook />
          <span>Continue with Facebook</span>
        </button>
      </div>
    </>
  );
}
