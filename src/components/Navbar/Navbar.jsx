import { Avatar, Badge, IconButton } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { pink } from "@mui/material/colors";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Person } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const navigate = useNavigate();
  const { auth, cart } = useSelector((store) => store);

  const handleAvatarClick = () => {
      if(auth.user?.role === "ROLE_CUSTOMER"){
        navigate("/my-profile")
      }else{
        navigate("/admin/restaurant")
      }
  }

  return (
    <div className="fixed w-full px-5 z-50 py-[.8rem] bg-[#e91e63] lg:px-20 flex justify-between">
      <div className="lg:mr-10 cursor-pointer flex items-center space-x-4">
        <h2 onClick={()=>navigate("/")} className="logo font-semibold text-gray-300 text-2xl">
          Sebastian Food
        </h2>
      </div>

      <div className="flex items-center space-x-2 lg:space-x-10">
        <IconButton>
          <SearchIcon sx={{ fontSize: "1.5rem" }} />
        </IconButton>

        {auth.user ? (
          <Avatar onClick={handleAvatarClick} sx={{ bgcolor: "white", color: pink[400] }}>
            {auth.user?.fullName[0].toUpperCase()}
          </Avatar>
        ) : (
          <IconButton
            sx={{ bgcolor: "white", color: pink[400] }}
            onClick={() => navigate("/account/login")}
          >
            <Person />
          </IconButton>
        )}

        <IconButton>
          <Badge 
          onClick={()=>navigate("/cart")}
          color="primary" 
          badgeContent={cart.cartItems?.length}>
            <ShoppingCartIcon sx={{ fontSize: "1.5rem" }} />
          </Badge>
        </IconButton>
      </div>
    </div>
  );
};

export default Navbar;
