import * as actionTypes from "./ActionType";

const initialState = {
  menuItems: [],
  loading: false,
  error: null,
  search: [],
  message: null,
};

export const menuItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_MENU_ITEM_REQUEST:
    case actionTypes.GET_MENU_ITEMS_BY_RESTAURANT_ID_REQUEST:
    case actionTypes.DELETE_MENU_ITEM_REQUEST:
    case actionTypes.SEARCH_MENU_ITEM_REQUEST:
    case actionTypes.UPDATE_MENU_ITEMS_AVAILABILITY_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        message: null,
      };
    case actionTypes.CREATE_MENU_ITEM_SUCCESS:
      return {
        ...state,
        loading: true,
        menuItems: [...state.menuItems, action.payload],
        message: "Food created successfully",
      };
    case actionTypes.GET_MENU_ITEMS_BY_RESTAURANT_ID_SUCCESS:
      return {
        ...state,
        loading: true,
        menuItems: action.payload,
      };
    case actionTypes.DELETE_MENU_ITEM_SUCCESS:
      return {
        ...state,
        loading: true,
        menuItems: state.menuItems.filter(
          (menuItem) => menuItem.id !== action.payload
        ),
      };
    case actionTypes.UPDATE_MENU_ITEMS_AVAILABILITY_SUCCESS:
      return {
        ...state,
        loading: true,
        menuItems: state.menuItems.map((item) => {
          if (item.id === action.payload.id) {
            return action.payload;
          }
          return item;
        }),
      };
    case actionTypes.SEARCH_MENU_ITEM_SUCCESS:
      return {
        ...state,
        loading: true,
        searchItems: action.payload,
      };
    case actionTypes.CREATE_MENU_ITEM_FAILURE:
    case actionTypes.GET_MENU_ITEMS_BY_RESTAURANT_ID_FAILURE:
    case actionTypes.DELETE_MENU_ITEM_FAILURE:
    case actionTypes.SEARCH_MENU_ITEM_FAILURE:
    case actionTypes.UPDATE_MENU_ITEMS_AVAILABILITY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        message: null,
      };

    default:
      return state;
  }
};
