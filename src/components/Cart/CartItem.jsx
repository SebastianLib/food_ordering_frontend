import {
  AddCircleOutline,
  RemoveCircleOutlineOutlined,
} from "@mui/icons-material";
import { Chip, IconButton } from "@mui/material";
import React from "react";

const CartItem = () => {
  return (
    <div className="px-5">
      <div className="flex space-x-5">
          <img
            className="w-[5rem] h-[5rem] object-cover"
            src="https://cdn.pixabay.com/photo/2020/10/05/19/55/hamburger-5630646_1280.jpg"
            alt=""
          />

        {/* Item Details */}
        <div className="flex flex-1 items-center justify-between">
          {/* Item Name and Quantity Controls */}
          <div className="space-y-1 ">
            <p className="font-medium">biryani</p>
            <div className="flex items-center space-x-2">
              <IconButton>
                <RemoveCircleOutlineOutlined />
              </IconButton>
              <div className="w-6 h-6 text-xs flex items-center justify-center border border-gray-300 rounded">
                {5}
              </div>
              <IconButton>
                <AddCircleOutline />
              </IconButton>
            </div>
          </div>

          {/* Price */}
          <p className="text-lg font-semibold">550 PLN</p>
        </div>
      </div>
      <div className="pt-3 space-x-2">
      {[1,1,1].map((item)=><Chip label={"bread"}/>)}
      </div>
    </div>
  );
};

export default CartItem;
