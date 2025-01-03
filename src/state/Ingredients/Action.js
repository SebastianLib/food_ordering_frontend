import { api } from "../../config/api";
import {
  CREATE_INGREDIENT_CATEGORY_FAILURE,
  CREATE_INGREDIENT_CATEGORY_REQUEST,
  CREATE_INGREDIENT_CATEGORY_SUCCESS,
  CREATE_INGREDIENT_FAILURE,
  CREATE_INGREDIENT_REQUEST,
  CREATE_INGREDIENT_SUCCESS,
  GET_INGREDIENT_CATEGORY_FAILURE,
  GET_INGREDIENT_CATEGORY_REQUEST,
  GET_INGREDIENT_CATEGORY_SUCCESS,
  GET_INGREDIENT_FAILURE,
  GET_INGREDIENT_REQUEST,
  GET_INGREDIENT_SUCCESS,
  UPDATE_STOCK_FAILURE,
  UPDATE_STOCK_REQUEST,
  UPDATE_STOCK_SUCCESS,
} from "./ActionTypes";

export const getIngredientsOfRestaurant = ({ id, jwt }) => {
  return async (dispatch) => {
    dispatch({ type: GET_INGREDIENT_REQUEST });
    try {
      const { data } = await api.get(
        `/api/admin/ingredients/restaurant/${id}`,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      dispatch({ type: GET_INGREDIENT_SUCCESS, payload: data });
      console.log(data);
    } catch (error) {
      console.log("error: ", error);

      dispatch({ type: GET_INGREDIENT_FAILURE, payload: error });
    }
  };
};

export const createIngredient = ({ data, jwt }) => {
  return async (dispatch) => {
    dispatch({ type: CREATE_INGREDIENT_REQUEST });
    try {
      const { data } = await api.post(`/api/admin/ingredients`, data, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      dispatch({ type: CREATE_INGREDIENT_SUCCESS, payload: data });
      console.log(data);
    } catch (error) {
      console.log("error: ", error);

      dispatch({ type: CREATE_INGREDIENT_FAILURE, payload: error });
    }
  };
};

export const createIngredientCategory = ({ data, jwt }) => {
  return async (dispatch) => {
    dispatch({ type: CREATE_INGREDIENT_CATEGORY_REQUEST });
    try {
      const { data } = await api.post(`/api/admin/ingredients/category`, data, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      dispatch({ type: CREATE_INGREDIENT_CATEGORY_SUCCESS, payload: data });
      console.log(data);
    } catch (error) {
      console.log("error: ", error);

      dispatch({ type: CREATE_INGREDIENT_CATEGORY_FAILURE, payload: error });
    }
  };
};

export const getIngredientCategory = ({ id, jwt }) => {
    return async (dispatch) => {
      dispatch({ type: GET_INGREDIENT_CATEGORY_REQUEST });
      try {
        const { data } = await api.get(
          `/api/admin/ingredients/restaurant/${id}/category`,
          {
            headers: {
              Authorization: `Bearer ${jwt}`,
            },
          }
        );
        dispatch({ type: GET_INGREDIENT_CATEGORY_SUCCESS, payload: data });
        console.log(data);
      } catch (error) {
        console.log("error: ", error);
  
        dispatch({ type: GET_INGREDIENT_CATEGORY_FAILURE, payload: error });
      }
    };
  };

export const updateStockOfIngredient = ({ id, jwt }) => {
    return async (dispatch) => {
      dispatch({ type: UPDATE_STOCK_REQUEST });
      try {
        const { data } = await api.put(
          `/api/admin/ingredients/${id}/stock`,
          {},
          {
            headers: {
              Authorization: `Bearer ${jwt}`,
            },
          }
        );
        dispatch({ type: UPDATE_STOCK_SUCCESS, payload: data });
        console.log(data);
      } catch (error) {
        console.log("error: ", error);
  
        dispatch({ type: UPDATE_STOCK_FAILURE, payload: error });
      }
    };
  };
  