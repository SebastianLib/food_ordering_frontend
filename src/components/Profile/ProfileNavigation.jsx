import React from "react";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import { NotificationsActive, Event, Logout } from "@mui/icons-material";
import { Divider, Drawer, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../state/Authentication/Action";

const menu = [
  { title: "Orders", icon: <ShoppingBagIcon /> },
  { title: "Favorites", icon: <FavoriteIcon /> },
  { title: "Address", icon: <AddReactionIcon /> },
  { title: "Payments", icon: <AccountBalanceIcon /> },
  { title: "Notification", icon: <NotificationsActive /> },
  { title: "Events", icon: <Event /> },
  { title: "Logout", icon: <Logout /> },
];
const ProfileNavigation = ({ open, handleClose }) => {
  const isSmallScreen = useMediaQuery("(max-width: 1080px)");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleNavigate = (item) => {
    if (item.title === "Logout") {
      dispatch(logout());
      navigate("/")
    } else {
      navigate(`/my-profile/${item.title.toLowerCase()}`);
    }
  };

  return (
    <div>
      <Drawer
        onClose={handleClose}
        open={open}
        anchor="left"
        sx={{ zIndex: 1 }}
        variant={isSmallScreen ? "temporary" : "permanent"}
      >
        <div
          className="w-[50vw] lg:w-[20vw] h-[100vh] flex flex-col 
        justify-center text-xl gap-8 pt-16"
        >
          {menu.map((item, index) => (
            <>
              <div
                onClick={() => handleNavigate(item)}
                className="px-5 flex items-center space-x-5 cursor-pointer"
              >
                {item.icon}
                <span>{item.title}</span>
              </div>
              {index !== menu.length - 1 && <Divider />}
            </>
          ))}
        </div>
      </Drawer>
    </div>
  );
};

export default ProfileNavigation;
