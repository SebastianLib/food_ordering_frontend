import {
  AddCircleOutline,
  RemoveCircleOutlineOutlined,
} from "@mui/icons-material";
import { Chip, IconButton } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {removeCartItem, updateCartItem} from "../../state/Cart/Action"

const CartItem = ({item}) => {
  const navigate = useNavigate();
  const { auth, cart } = useSelector((store) => store);
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");

  const handleUpdateCartItem = (value) => {
    if(value === -1 && item.quantity===1){
      handleRemoveCartItem();
    }
    const data = {cartItemId: item.id, quantity: item.quantity+value}
    dispatch(updateCartItem(data))
  }

  const handleRemoveCartItem = () => {
    dispatch(removeCartItem({cartItemId: item.id, jwt:auth.jwt || jwt}))
  }

  return (
    <div className="px-5">
      <div className="flex space-x-5">
          <img
            className="w-[5rem] h-[5rem] object-cover"
            src={item?.food?.images[0]}
            alt=""
          />

        {/* Item Details */}
        <div className="flex flex-1 items-center justify-between">
          {/* Item Name and Quantity Controls */}
          <div className="space-y-1 ">
            <p className="font-medium">{item.food.name}</p>
            <div className="flex items-center space-x-2">
              <IconButton onClick={()=>handleUpdateCartItem(-1)}>
                <RemoveCircleOutlineOutlined />
              </IconButton>
              <div className="w-6 h-6 text-xs flex items-center justify-center border border-gray-300 rounded">
                {item.quantity}
              </div>
              <IconButton onClick={()=>handleUpdateCartItem(+1)}>
                <AddCircleOutline />
              </IconButton>
            </div>
          </div>

          {/* Price */}
          <p className="text-lg font-semibold">{item.totalPrice} PLN</p>
        </div>
      </div>
      <div className="pt-3 space-x-2">
      {item.ingredients.map((item)=><Chip label={item}/>)}
      </div>
    </div>
  );
};

export default CartItem;
