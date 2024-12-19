import { CalendarMonth, LocationCity } from "@mui/icons-material";
import {
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  Grid2,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import MenuCard from "./MenuCard";

const RestaurantDetails = () => {
  const [foodType, setFoodType] = useState("all");
  const [category, setCategory] = useState("pizza");

  const categories = ["pizza", "biryani", "burger", "chicken", "rice"];

  const foodTypes = [
    { label: "All", value: "all" },
    { label: "Vegetarian only", value: "vegetarian" },
    { label: "Non-Vegetarian", value: "non_vegetarian" },
    { label: "Seasonal", value: "seasonal" },
  ];

  const menu = [1,1,1,1,1,1];

  const handleFilter = (e) => {
    if(e.target.name === "food_type"){
      setFoodType(e.target.value);
    }else{
      setCategory(e.target.value);
    }
  };

  return (
    <div className="px-5 lg:px-20">
      <section>
        <h3 className="text-gray-500 py-2 pt-20">
          Home/india/indian fast food/
        </h3>
        <div>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <img
                className="w-full h-[40vh] object-cover"
                src="https://cdn.pixabay.com/photo/2020/03/26/20/54/table-4971785_1280.jpg"
                alt=""
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <img
                className="w-full h-[40vh] object-cover"
                src="https://cdn.pixabay.com/photo/2020/06/21/15/55/cup-of-coffee-5325613_1280.jpg"
                alt=""
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <img
                className="w-full h-[40vh] object-cover"
                src="https://cdn.pixabay.com/photo/2019/12/20/16/58/cauliflower-4708842_1280.jpg"
                alt=""
              />
            </Grid>
          </Grid>
        </div>
        <div className="pt-3 pb-5">
          <h1 className="text-4xl font-semibold">Indian Fast Food</h1>
          <div className="space-y-3">
            <span className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
              rem eaque pariatur similique, sed autem. Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Nobis, explicabo!
            </span>
            <p className="text-gray-500 flex items-center gap-3">
              <LocationCity />
              <span>Warsaw</span>
            </p>
            <p className="text-gray-500 flex items-center gap-3">
              <CalendarMonth />
              <span>10:00-20:00</span>
            </p>
          </div>
        </div>
      </section>

      <Divider />

      <section className="pt-[2rem] lg:flex relative">
        <div className="space-y-10 lg:w-[20%] filter">
          <div className="box space-y-5 lg:sticky top-28">
            <div>
              <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
                Food Type
              </Typography>

              <FormControl className="py-10 space-y-5" component={"fieldset"}>
                <RadioGroup
                  onChange={handleFilter}
                  name="food_type"
                  value={foodType || "all"}
                >
                  {foodTypes.map((item, index) => (
                    <FormControlLabel
                      key={index}
                      value={item.value}
                      control={<Radio />}
                      label={item.label}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>
            <Divider/>
            <div>
              <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
                Food Categories
              </Typography>

              <FormControl className="py-10 space-y-5" component={"fieldset"}>
                <RadioGroup
                  onChange={handleFilter}
                  name="food_category"
                  value={category || "all"}
                >
                  {categories.map((item, index) => (
                    <FormControlLabel
                      key={index}
                      value={item}
                      control={<Radio />}
                      label={item}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>
          </div>
        </div>

        <div className="space-y-5 lg:w-[80%] lg:pl-10">
          {menu.map((item)=><MenuCard/>)}
        </div>
      </section>
    </div>
  );
};

export default RestaurantDetails;
