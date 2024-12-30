import { Card, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";
import React, { useState } from "react";
import MenuTable from "./MenuTable";

const menutatus = [
  {label:"Pending", value:"PENDING"},
  {label:"Completed", value:"COMPLETED"},
  {label:"All", value:"ALL"},
]
const Menu = () => {
  const [filterValue, setFilterValue] = useState();

  const handleFilter = (e, value) => {
    setFilterValue(value);
  };

  return (
    <div className="px-2">
      <MenuTable/>
    </div>
  );
};

export default Menu;
