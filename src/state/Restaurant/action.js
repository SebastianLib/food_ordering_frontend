import {api} from "../../config/api";
import {
  CREATE_RESTAURANT_FAILURE,
  CREATE_RESTAURANT_REQUEST,
  CREATE_RESTAURANT_SUCCESS,
  GET_ALL_RESTAURANTS_FAILURE,
  GET_ALL_RESTAURANTS_REQUEST,
  GET_ALL_RESTAURANTS_SUCCESS,
  GET_RESTAURANT_BY_ID_FAILURE,
  GET_RESTAURANT_BY_ID_REQUEST,
  GET_RESTAURANT_BY_ID_SUCCESS,
  GET_RESTAURANT_BY_USER_ID_FAILURE,
  GET_RESTAURANT_BY_USER_ID_REQUEST,
  GET_RESTAURANT_BY_USER_ID_SUCCESS,
  UPDATE_RESTAURANT_STATUS_FAILURE,
  UPDATE_RESTAURANT_STATUS_REQUEST,
  UPDATE_RESTAURANT_STATUS_SUCCESS,
  DELETE_RESTAURANT_STATUS_FAILURE,
  DELETE_RESTAURANT_STATUS_REQUEST,
  DELETE_RESTAURANT_STATUS_SUCCESS,
  UPDATE_RESTAURANT_REQUEST,
  UPDATE_RESTAURANT_SUCCESS,
  UPDATE_RESTAURANT_FAILURE,
  CREATE_EVENTS_REQUEST,
  CREATE_EVENTS_SUCCESS,
  CREATE_EVENTS_FAILURE,
  GET_ALL_EVENTS_REQUEST,
  DELETE_EVENTS_REQUEST,
  DELETE_EVENTS_SUCCESS,
  DELETE_EVENTS_FAILURE,
  GET_RESTAURANTS_EVENTS_REQUEST,
  GET_RESTAURANTS_EVENTS_SUCCESS,
  GET_RESTAURANTS_EVENTS_FAILURE,
  CREATE_CATEGORY_REQUEST,
  CREATE_CATEGORY_SUCCESS,
  CREATE_CATEGORY_FAILURE,
  GET_RESTAURANTS_CATEGORY_REQUEST,
  GET_RESTAURANTS_CATEGORY_SUCCESS,
  GET_RESTAURANTS_CATEGORY_FAILURE,
} from "./actionTypes";

export const getAllRestaurantsAction = (token) => {
  return async (dispatch) => {
    dispatch({ type: GET_ALL_RESTAURANTS_REQUEST });
    try {
      const { data } = await api.get("/api/restaurants", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch({type: GET_ALL_RESTAURANTS_SUCCESS, payload: data });
      console.log("all restaurants", data);
    } catch (error) {
      console.log("error: ", error);

      dispatch({ type: GET_ALL_RESTAURANTS_FAILURE, payload: error });
    }
  };
};

export const getRestaurantById = (reqData) => {
  return async (dispatch) => {
    dispatch({ type: GET_RESTAURANT_BY_ID_REQUEST });
    try {
      const response = await api.get(
        `/api/restaurants/${reqData.restaurantId}`,
        {
          headers: {
            Authorization: `Bearer ${reqData.jwt}`,
          },
        }
      );
      dispatch({type: GET_RESTAURANT_BY_ID_SUCCESS, payload: response.data });
      console.log(response);
    } catch (error) {
      console.log("error: ", error);

      dispatch({ type: GET_RESTAURANT_BY_ID_FAILURE, payload: error });
    }
  };
};

export const getRestaurantByUserId = (jwt) => {
  return async (dispatch) => {
    dispatch({ type: GET_RESTAURANT_BY_USER_ID_REQUEST });
    try {
      const response = await api.get(`/api/restaurants/user`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      dispatch({type: GET_RESTAURANT_BY_USER_ID_SUCCESS, payload: response.data });
      console.log(response);
    } catch (error) {
      console.log("error: ", error);

      dispatch({ type: GET_RESTAURANT_BY_USER_ID_FAILURE, payload: error });
    }
  };
};

export const createRestaurant = (reqData) => {
  return async (dispatch) => {
    dispatch({ type: CREATE_RESTAURANT_REQUEST });
    try {
      const { data } = await api.post(`/api/admin/restaurants`, reqData.data, {
        headers: {
          Authorization: `Bearer ${reqData.jwt}`,
        },
      });
      dispatch({type: CREATE_RESTAURANT_SUCCESS, payload: data });
      console.log(data);
    } catch (error) {
      console.log("error: ", error);

      dispatch({ type: CREATE_RESTAURANT_FAILURE, payload: error });
    }
  };
};

export const updateRestaurant = ({ restaurantId, restaurantData, jwt }) => {
  return async (dispatch) => {
    dispatch({ type: UPDATE_RESTAURANT_REQUEST });
    try {
      const { data } = await api.put(
        `/api/admin/restaurants/${restaurantId}`,
        restaurantData,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      dispatch({ type: UPDATE_RESTAURANT_SUCCESS, payload: data });
      console.log(data);
    } catch (error) {
      console.log("error: ", error);

      dispatch({ type: UPDATE_RESTAURANT_FAILURE, payload: error });
    }
  };
};

export const deleteRestaurant = ({ restaurantId, jwt }) => {
  return async (dispatch) => {
    dispatch({ type: DELETE_RESTAURANT_STATUS_REQUEST });
    try {
      const { data } = await api.delete(
        `/api/admin/restaurants/${restaurantId}`,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      dispatch({type: DELETE_RESTAURANT_STATUS_SUCCESS, payload: restaurantId });
      console.log(data);
    } catch (error) {
      console.log("error: ", error);

      dispatch({ type: DELETE_RESTAURANT_STATUS_FAILURE, payload: error });
    }
  };
};

export const updateRestaurantStatus = ({ restaurantId, jwt }) => {
  return async (dispatch) => {
    dispatch({ type: UPDATE_RESTAURANT_STATUS_REQUEST });
    try {
      const { data } = await api.put(
        `/api/admin/restaurants/${restaurantId}/status`,
        {},
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      dispatch({type: UPDATE_RESTAURANT_STATUS_SUCCESS, payload: data });
      console.log(data);
    } catch (error) {
      console.log("error: ", error);

      dispatch({ type: UPDATE_RESTAURANT_STATUS_FAILURE, payload: error });
    }
  };
};

export const createEventAction = ({ data, restaurantId, jwt }) => {
  return async (dispatch) => {
    dispatch({ type: CREATE_EVENTS_REQUEST });
    try {
      const { data } = await api.post(
        `/api/admin/events/restaurants/${restaurantId}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      dispatch({type: CREATE_EVENTS_SUCCESS, payload: data });
      console.log(data);
    } catch (error) {
      console.log("error: ", error);

      dispatch({ type: CREATE_EVENTS_FAILURE, payload: error });
    }
  };
};

export const getAllEvents = ({ jwt }) => {
  return async (dispatch) => {
    dispatch({ type: GET_ALL_EVENTS_REQUEST });
    try {
      const { data } = await api.get(
        `/api/events`,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      dispatch({type: GET_ALL_RESTAURANTS_SUCCESS, payload: data });
      console.log(data);
    } catch (error) {
      console.log("error: ", error);

      dispatch({ type: GET_ALL_RESTAURANTS_FAILURE, payload: error });
    }
  };
};

export const deleteEventAction = ({eventId,jwt }) => {
  return async (dispatch) => {
    dispatch({ type: DELETE_EVENTS_REQUEST });
    try {
      const { data } = await api.delete(
        `/api/admin/events/${eventId}`,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      dispatch({type: DELETE_EVENTS_SUCCESS, payload: data });
      console.log(data);
    } catch (error) {
      console.log("error: ", error);

      dispatch({ type: DELETE_EVENTS_FAILURE, payload: error });
    }
  };
};

export const getRestaurantsEvents = ({restaurantId,jwt }) => {
  return async (dispatch) => {
    dispatch({ type: GET_RESTAURANTS_EVENTS_REQUEST });
    try {
      const { data } = await api.get(
        `/api/admin/events/${restaurantId}`,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      dispatch({type: GET_RESTAURANTS_EVENTS_SUCCESS, payload: data });
      console.log(data);
    } catch (error) {
      console.log("error: ", error);

      dispatch({ type: GET_RESTAURANTS_EVENTS_FAILURE, payload: error });
    }
  };
};

export const createCategoryAction = ({reqData,jwt }) => {
  return async (dispatch) => {
    dispatch({ type: CREATE_CATEGORY_REQUEST });
    try {
      const { data } = await api.post(
        `/api/admin/category`,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      dispatch({type: CREATE_CATEGORY_SUCCESS, payload: data });
      console.log(data);
    } catch (error) {
      console.log("error: ", error);

      dispatch({ type: CREATE_CATEGORY_FAILURE, payload: error });
    }
  };
};


export const getRestaurantsCategory = ({restaurantId,jwt }) => {
    return async (dispatch) => {
      dispatch({ type: GET_RESTAURANTS_CATEGORY_REQUEST });
      try {
        const { data } = await api.get(
          `/api/category/restaurant/${restaurantId}`,
          {
            headers: {
              Authorization: `Bearer ${jwt}`,
            },
          }
        );
        dispatch({type: GET_RESTAURANTS_CATEGORY_SUCCESS, payload: data });
        console.log(data);
      } catch (error) {
        console.log("error: ", error);
  
        dispatch({ type: GET_RESTAURANTS_CATEGORY_FAILURE, payload: error });
      }
    };
  };