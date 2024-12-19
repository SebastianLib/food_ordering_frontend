import { Button, Card } from "@mui/material";
import React from "react";
import { Home } from "@mui/icons-material";

const AddressCard = ({ item, showButton, handleSelectAddress }) => {

  return (
    <Card className="flex gap-5 w-64 p-5">
      <Home />
      <div className="space-y-3 text-gray-500">
        <h1 className="font-semibold text-lg text-white">Home</h1>
        <p>Lorem ipsum dolor sit.</p>
        {showButton && (
          <Button
            onClick={() => handleSelectAddress(item)}
            variant="outlined"
            fullWidth
          >
            Select
          </Button>
        )}
      </div>
    </Card>
  );
};

export default AddressCard;
