import { GET_ALL_TYPES, GET_ALL_RECIPES } from "../actions/actionTypes";

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
      return {
        ...state,
        allRecipes: payload.data,
        recipesToShow: payload.data
      };
    default:
      return state;
  }
};

export default rootReducer;