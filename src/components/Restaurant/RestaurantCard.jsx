import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { Card, Chip, IconButton } from "@mui/material";
import React from "react";

const RestaurantCard = () => {
  return (
    <Card className="m-5 w-[18rem]">
      <div
        className={`${true ? "cursor-pointer" : "cursor-not-allowed"} relative`}
      >
        <img
          src="https://mui.com/static/images/cards/paella.jpg"
          alt=""
          className="w-full h-[10rem] rounded-t-md object-cover"
        />
        <Chip
          size="small"
          className="absolute top-2 left-2"
          color={true ? "success" : "error"}
          label={true ? "open" : "closed"}
        />
      </div>
      <div className="p-4 textPart lg:flex w-full justify-between">
        <div className="space-y-1">
          <p className="font-semibold text-lg">Indian Fast Food</p>
          <p className="text-gray-500 text-sm">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
        <div>
          <IconButton>
            {true ? <Favorite/> : <FavoriteBorder/>}
          </IconButton>
        </div>
      </div>
    </Card>
  );
};

export default RestaurantCard;
