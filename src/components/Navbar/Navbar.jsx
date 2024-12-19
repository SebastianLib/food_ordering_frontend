import { Avatar, Badge, IconButton } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { pink } from "@mui/material/colors";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Navbar = () => {
  return (
    <div className="fixed w-full px-5 z-50 py-[.8rem] bg-[#e91e63] lg:px-20 flex justify-between">
      <div className="lg:mr-10 cursor-pointer flex items-center space-x-4">
        <h2 className="logo font-semibold text-gray-300 text-2xl">
          Sebastian Food
        </h2>
      </div>

      <div className="flex items-center space-x-2 lg:space-x-10">
        <IconButton>
          <SearchIcon sx={{ fontSize: "1.5rem" }} />
        </IconButton>

        <Avatar sx={{ bgcolor: "white", color: pink[400] }}>S</Avatar>

        <IconButton>
          <Badge color="primary" badgeContent={4}>
            <ShoppingCartIcon sx={{ fontSize: "1.5rem" }} />
          </Badge>
        </IconButton>
      </div>
    </div>
  );
};

export default Navbar;
