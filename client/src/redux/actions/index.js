import axios from 'axios';
import { GET_ALL_TYPES, GET_ALL_RECIPES, RECIPES_ORDER_AND_FILTER } from './actionTypes';

export function getAllTypes() {
    return async (dispatch) => {
        try {
            const response = await axios.get('/types');
            console.log(response)
            dispatch({
                type: GET_ALL_TYPES,
                payload: response.data
            });
        } catch (error) {
            dispatch({
                type: GET_ALL_TYPES,
                payload: { error: error.message }
            });
        };
    };
};

export function getAllRecipes() {
    return async (dispatch) => {
        try {
            const response = await axios.get('/recipes');
            dispatch({
                type: GET_ALL_RECIPES,
                payload: response
            })
        } catch (error) {
            dispatch({
                type: GET_ALL_RECIPES,
                payload: { error: error.message }
            });
        };
    }
}

export function recipesOrderAndFilter(payload) {
    return (dispatch) => {
        try {
          dispatch({
            type: RECIPES_ORDER_AND_FILTER,
            payload: payload
          })
            
        } catch (error) {
            dispatch({
                type: RECIPES_ORDER_AND_FILTER,
                payload: { error: error.message }
            });
        };
    };
};

