import { api } from "../../config/api";
import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_USERS_ORDERS_SUCCESS } from "./ActionTypes";

export const createOrder = (reqData) => {
  return async (dispatch) => {
    dispatch({ type: CREATE_ORDER_REQUEST });
    try {
      const { data } = await api.post(`/api/order`, reqData.order ,{
        headers: {
          Authorization: `Bearer ${reqData.jwt}`,
        },
      });
    //   if(data.payment_url){
    //     window.location.href=data.payment_url;
    //   }
      dispatch({ type: CREATE_ORDER_SUCCESS, payload: data });
      console.log(data);
    } catch (error) {
      console.log("error: ", error);

      dispatch({ type: CREATE_ORDER_FAILURE, payload: error });
    }
  };
};

export const getUsersOrder = (jwt) => {
  return async (dispatch) => {
    dispatch({ type: GET_USERS_ORDERS_SUCCESS });
    try {
      const { data } = await api.get(`/api/order/user`,{
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
    //   if(data.payment_url){
    //     window.location.href=data.payment_url;
    //   }
      dispatch({ type: CREATE_ORDER_SUCCESS, payload: data });
      console.log(data);
    } catch (error) {
      console.log("error: ", error);

      dispatch({ type: CREATE_ORDER_FAILURE, payload: error });
    }
  };
};