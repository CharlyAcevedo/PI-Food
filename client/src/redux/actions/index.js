import axios from "axios";
import {
  GET_ALL_TYPES,
  GET_ALL_RECIPES,
  RECIPES_ORDER_AND_FILTER,
  SET_CURRENT_PAGE,
  SET_PAGE_NUMBER,
  SEARCH_RECIPE,
  GET_RECIPE_DETAILS,
} from "./actionTypes";

export function getAllTypes() {
  return async (dispatch) => {
    try {
      const response = await axios.get("/types");
      dispatch({
        type: GET_ALL_TYPES,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: GET_ALL_TYPES,
        payload: { error: error.message },
      });
    };
  };
};

export function getAllRecipes() {
  return async (dispatch) => {
    try {
      const response = await axios.get("/recipes");
      dispatch({
        type: GET_ALL_RECIPES,
        payload: response,
      });
    } catch (error) {
      dispatch({
        type: GET_ALL_RECIPES,
        payload: { error: error.message },
      });
    };
  };
};

export function recipesOrderAndFilter(payload) {
  return (dispatch) => {
    try {
      dispatch({
        type: RECIPES_ORDER_AND_FILTER,
        payload: payload,
      });
    } catch (error) {
      dispatch({
        type: RECIPES_ORDER_AND_FILTER,
        payload: { error: error.message },
      });
    };
  };
};

export function setCurrentPage(payload) {
  return (dispatch) => {
    try {
      dispatch({
        type: SET_CURRENT_PAGE,
        payload: payload,
      });
    } catch (error) {
      dispatch({
        type: SET_CURRENT_PAGE,
        payload: { error: error.message },
      });
    };
  };
};

export function setPageNumber(payload) {
  return (dispatch) => {
    try {
      dispatch({
        type: SET_PAGE_NUMBER,
        payload: payload,
      });
    } catch (error) {
      dispatch({
        type: SET_PAGE_NUMBER,
        payload: { error: error.message },
      });
    };
  };
};

export function searchRecipe(payload) {
  return (dispatch) => {
    try {
      dispatch({
        type: SEARCH_RECIPE,
        payload: payload,
      });
    } catch (error) {
      dispatch({
        type: SEARCH_RECIPE,
        payload: { error: error.message },
      });
    };
  };
};

export function getRecipeDetail(payload) {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/recipes/${payload}`);
      dispatch({
        type: GET_RECIPE_DETAILS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: GET_RECIPE_DETAILS,
        payload: { error: error.message },
      });
    };
  };
};
