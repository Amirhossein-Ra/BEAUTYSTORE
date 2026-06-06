import React from "react";
import { FaSearch, FaUser } from "react-icons/fa";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
export default function Navbar() {
  const user = useSelector((state) => state.user);
  console.log(user);
  return (
    <div className="flex items-center justify-between h-[100px] shadow-md px-6 ">
      <Link to="/">
        <div className="cursor-pointer m-2 ">
          <img src="/blisslogo1.png" alt="logo" height="200px" width="200px" />
        </div>
      </Link>
      <div className="flex items-center m-2">
        <input
          className="p-[15px] border-2 border-[#f096dd] border-solid w-[500px] outline-none rounded-lg mr-[-30px]"
          type="text"
          placeholder="search"
        />
        <FaSearch className="text-[20px] cursor-pointer" />
      </div>

      <div className="flex items-center">
        <Link to="/cart">
          <div className="flex items-center mr-[20px]">
            <Badge badgeContent={2} color="secondary">
              <ShoppingBasketIcon className="text-pink-500 cursor-pointer" />
            </Badge>
          </div>
        </Link>

        {user ? (
          <Link to="/myaccount">
            <div className="flex items-center space-x-2 border border-pink-300 p-2 rounded-lg hover:bg-pink-100 cursor-pointer">
              <FaUser className="text-[#e455c5] hover:text-pink-600 transition duration-300" />
              <span className="text-[#e455c5] hover:text-pink-600 font-semibold">
                {user.currentUser.name}
              </span>
            </div>
          </Link>
        ) : (
          <Link to="/login">
            <div className="flex items-center space-x-2 border border-pink-300 p-2 rounded-lg hover:bg-pink-100 cursor-pointer">
              <FaUser className="text-[#e455c5] hover:text-pink-600 transition duration-300" />
              <span className="text-[#e455c5] hover:text-pink-600 font-semibold">
                Login
              </span>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
}
