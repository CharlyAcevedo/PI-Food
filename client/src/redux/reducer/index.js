import { initialNormalize, filtersAndOrders } from './controlers'
import {
  GET_ALL_TYPES,
  GET_ALL_RECIPES,
  RECIPES_ORDER_AND_FILTER,
} from "../actions/actionTypes";

const initialState = {
  recipesToShow: [],
  allRecipes: [],
  allDiets: [],
  allCuisines: [],
  allDishTypes: [],
  recipeDetails: {},
  currentFilter: {
    prop: "name",
    value: "all",
  },
  currentOrder: {
    prop: "name",
    value: "ASC",
  },
  currentPage: 1,
  errors: "",
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_TYPES:
      if (payload.error) {
        return {
          ...state,
          errors: payload.error,
        };
      }
      return {
        ...state,
        allCuisines: [...payload[0].cuisines],
        allDiets: [...payload[0].diets],
        allDishTypes: [...payload[0].dishTypes],
      };
    case GET_ALL_RECIPES:
      if (payload.error) {
        return {
          ...state,
          errors: payload.error,
        };
      }
      let recipesNormalized = initialNormalize(payload.data);
      recipesNormalized = filtersAndOrders(
        recipesNormalized,
        state.currentFilter.prop,
        state.currentFilter.value,
        state.currentOrder.value,
        state.currentOrder.prop
      );
      return {
        ...state,
        allRecipes: recipesNormalized,
        recipesToShow: recipesNormalized,
      };
      case RECIPES_ORDER_AND_FILTER:
        let newOrderAndFilter = filtersAndOrders(
          state.allRecipes, 
          payload.field ? payload.field : state.currentFilter.prop,
          payload.filter ? payload.filter : state.currentFilter.value,
          payload.order ? payload.order : state.currentOrder.value,
          payload.orderBy ? payload.orderBy : state.currentOrder.prop
          );
        return {
          ...state,
          recipesToShow: newOrderAndFilter,
          currentOrder: {
            prop: payload.orderBy ? payload.orderBy : state.currentOrder.prop,
            value: payload.order ? payload.order : state.currentOrder.value
          },
          currentFilter: {
            prop: payload.field ? payload.field : state.currentFilter.prop,
            value: payload.filter ? payload.filter : state.currentFilter.value
          }
        };
    default:
      return state;
  }
};

export default rootReducer;