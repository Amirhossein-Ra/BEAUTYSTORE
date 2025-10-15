import React from "react";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div className="flex items-center justify-center mt-[15%]">
      <div className="flex items-center bg-white shadow-lg rounded-lg overflow-hidden">
        {/* IMAGE */}
        <div className="h-[500px] w-[500px] transition-transform duration-700 ease-in-out transform hover:scale-105">
          <img
            src="/lotion1.jpg"
            alt="login"
            className="w-full h-full object-cover"
          />
        </div>

        {/* FORM */}

        <div className="p-10 w-[500px] h-[500px]">
          <h2 className="text-xl font-semibold text-gray-700 mb-5">Login</h2>

          <form className="space-y-5">
            <div className="mb-5">
              <label htmlFor="" className="block text-gray-600 mb-1">
                Email
              </label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d55fbb]"
                placeholder="example@example.com"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="" className="block text-gray-600 mb-1">
                Password
              </label>
              <input
                type="password"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d55fbb]"
                placeholder="*******"
              />
            </div>
            <button className="w-full py-2 bg-[#d55fbb] font-black rounded-md transition-transform duration-500 hover:bg-blue-200 focus:outline-none focus:ring-red-500 hover:scale-105 text-white">
              Login
            </button>

            <div className="mt-4 text-sm text-gray-600">
              <span className="">Dont Have An Account?</span>
              <Link
                className="ml-2 text-red-500 hover:underline"
                to="/create-account"
              >
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
