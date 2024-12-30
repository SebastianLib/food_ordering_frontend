import { TaskAlt } from "@mui/icons-material";
import { Button } from "@mui/material";
import { green } from "@mui/material/colors";
import React from "react";
import { useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  return (
    <div className="pt-20 min-h-screen px-5">
      <div className="flex flex-col items-center justify-center h-[90vh]">
        <div className="box w-full lg:w-1/4 flex flex-col items-center rounded-md">
          <TaskAlt sx={{ fontSize: "5rem", color: green[500] }} />
          <h1 className="py-5 text-2xl font-semibold">Order Success</h1>
          <p>Thank you for choosing our restaurant</p>
          <p className="py-2 text-center text-gray-200 text-lg">
            Have A Great Day!
          </p>
          <Button
          onClick={()=>navigate("/")}
            variant="contained"
            className="py-5"
            sx={{ margin: "1rem 0rem" }}
          >
            Go To Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
