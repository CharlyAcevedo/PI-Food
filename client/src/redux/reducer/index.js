import { initialNormalize, filtersAndOrders } from './controlers'
import {
  GET_ALL_TYPES,
  GET_ALL_RECIPES,
  RECIPES_ORDER_AND_FILTER,
  SET_CURRENT_PAGE,
  SET_PAGE_NUMBER,
  SEARCH_RECIPE,
  GET_RECIPE_DETAILS,
  CREATE_RECIPE,
  SET_CURRENT_LIMIT,
} from "../actions/actionTypes";

const initialState = {
  recipesToShow: [],
  pageToShow: [],
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
  currentLimit: 9,
  currentPage: 1,
  created: "",
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
      const newPageRecipes2 = recipesNormalized.slice(0, state.currentLimit);
      return {
        ...state,
        allRecipes: recipesNormalized,
        recipesToShow: recipesNormalized,
        pageToShow: newPageRecipes2,
        currentPage: 1,
      };
    case RECIPES_ORDER_AND_FILTER:
      if (payload.error) {
        return {
          ...state,
          errors: payload.error,
        };
      }
      let newOrderAndFilter = filtersAndOrders(
        state.allRecipes,
        payload.field ? payload.field : state.currentFilter.prop,
        payload.filter ? payload.filter : state.currentFilter.value,
        payload.order ? payload.order : state.currentOrder.value,
        payload.orderBy ? payload.orderBy : state.currentOrder.prop
      );
      const newPageRecipes1 = newOrderAndFilter.slice(0, state.currentLimit);
      return {
        ...state,
        recipesToShow: newOrderAndFilter,
        pageToShow: newPageRecipes1,
        currentPage: 1,
        currentOrder: {
          prop: payload.orderBy ? payload.orderBy : state.currentOrder.prop,
          value: payload.order ? payload.order : state.currentOrder.value,
        },
        currentFilter: {
          prop: payload.field ? payload.field : state.currentFilter.prop,
          value: payload.filter ? payload.filter : state.currentFilter.value,
        },
      };
    case SET_CURRENT_PAGE:
      if (payload.error) {
        return {
          ...state,
          errors: payload.error,
        };
      };
      const newPageRecipes = state.recipesToShow.slice(payload.offset, payload.limit);
      return {
        ...state,
        pageToShow: newPageRecipes,
        currentPage: payload.currentPage
      };
    case SET_PAGE_NUMBER:
      if (payload.error) {
        return {
          ...state,
          errors: payload.error,
        };
      };
      return {
        ...state,
        currentPage: payload,
      };
      case SET_CURRENT_LIMIT:
        if (payload.error) {
          return {
            ...state,
            errors: payload.error,
          };
        };
        return {
          ...state,
          currentLimit: payload,
        };
    case SEARCH_RECIPE:
      if (payload.error) {
        return {
          ...state,
          errors: payload.error,
        };
      };
      let recipeFound = filtersAndOrders(
        state.allRecipes,
        'name',
        payload ? payload : state.currentFilter.value,
        'ASC',
        'name'
      );
      const recipeFoundSlice = recipeFound.slice(0, state.currentLimit);
      return {
        ...state,
        recipesToShow: recipeFound,
        pageToShow: recipeFoundSlice,
        currentPage: 1,
        currentOrder: {
          prop: 'name',
          value: 'ASC',
        },
        currentFilter: {
          prop: 'name',
          value: payload,
        },
      };
    case GET_RECIPE_DETAILS:
      if (payload.error) {
        return {
          ...state,
          errors: payload.error,
        };
      };
      let idTest = /^DBC-[0-9]/
      if (typeof payload.id === "string" && idTest.test(payload.id)){
        let normalizedRecipe = [payload];
        normalizedRecipe = initialNormalize(normalizedRecipe)
        return {
          ...state,
          recipeDetails: normalizedRecipe[0]
        };
      };
      return {
        ...state,
        recipeDetails: payload
      };
    case CREATE_RECIPE:
      if (payload.error) {
        return {
          ...state,
          errors: payload.error,
        };
      };
      return {
        ...state,
        created: payload
      }
    default:
      return state;
  }
};

export default rootReducer;