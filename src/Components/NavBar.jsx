import React, { useEffect } from "react";
import MessageRoundedIcon from "@mui/icons-material/MessageRounded";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import { InputAdornment, OutlinedInput } from "@mui/material";
import { Search } from "@mui/icons-material";

import { getImages } from "../api/Images";
// const query = "food";
const NavBar = () => {
  return (
    <nav className="flex gap-5 justify-center w-screen items-center px-4 fixed bg-white h-24 z-50">
      <img
        src={
          "https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png?20160129083321"
        }
        className="w-7"
      />
      <ul className="flex">
        <li className="h-12 min-w-14">
          <button className="bg-black rounded-3xl text-white px-4 py-3 font-semibold text-lg">
            Home
          </button>
        </li>
        <li className="h-12 min-w-14">
          <button className="  px-4 py-3 font-semibold text-lg">Explore</button>
        </li>
        <li className="h-12 min-w-14">
          <button className=" px-4 py-3 font-semibold text-lg">Create</button>
        </li>
      </ul>

      {/* <input
        placeholder="Search"
        type="text"
        className="border placeholder:text-lg placeholder:text-gray-500 w-[400px] rounded-3xl bg-gray-200 p-2 justify-center items-center"
      /> */}
      <OutlinedInput
        sx={{
          background: "#E9E9E9",

          borderRadius: "30px",
          minWidth: "407px",
          width: "1500px",
          padding: "0 10px",
          "*::placeholder": {
            fontSize: "18px",
          },
          "& .MuiOutlinedInput-notchedOutline ": {
            border: "none",
          },
          "&:focus-within .MuiOutlinedInput-notchedOutline": {
            border: "4px solid #0084ff80",
          },
        }}
        placeholder="Search"
        startAdornment={
          <InputAdornment position="start">
            <Search sx={{ color: "#767676" }} />
          </InputAdornment>
        }
      />

      <ul className="flex gap-4">
        <li className="">
          <button>
            <NotificationsIcon
              sx={{ width: 30, height: 30, color: "#767676" }}
            />
          </button>
        </li>
        <li>
          <button>
            <MessageRoundedIcon
              sx={{ width: 30, height: 30, color: "#767676" }}
            />
          </button>
        </li>
        <li>
          <button>
            <AccountCircleRoundedIcon
              sx={{ width: 30, height: 30, color: "#767676" }}
            />
          </button>
        </li>
        <li>
          <button>
            <ExpandMoreRoundedIcon
              sx={{ width: 30, height: 30, color: "#767676" }}
            />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
