import { Box, Modal } from "@mui/material";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { style } from "../Cart/Cart";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const Auth = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleOnClose = () => {
    navigate("/");
  };

  return (
    <>
      <Modal
        open={
          location.pathname === "/account/login" ||
          location.pathname === "/account/register"
        }
        onClose={handleOnClose}
      >
        <Box sx={style}>
            {location.pathname === "/account/register" ? <RegisterForm/> : <LoginForm/>}       
        </Box>
      </Modal>
    </>
  );
};

export default Auth;
