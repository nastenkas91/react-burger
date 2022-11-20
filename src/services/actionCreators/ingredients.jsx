import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_FAILED,
  GET_INGREDIENTS_SUCCESS,
  SET_CURRENT_INGREDIENT,
  REMOVE_CURRENT_INGREDIENT
} from "../actions/ingredients";

export const getIngredientsRequest = () => {
  return {
    type: GET_INGREDIENTS_REQUEST
  }
};

export const getIngredientsFailed = () => {
  return {
    type: GET_INGREDIENTS_FAILED
  }
};

export const getIngredientsSuccess = (data) => {
  return {
    type: GET_INGREDIENTS_SUCCESS,
    payload: data,
  }
};

export const setCurrentIngredient = (item) => {
  return {
    type: SET_CURRENT_INGREDIENT,
    payload: item,
  }
};

export const removeCurrentIngredient = () => {
  return {
    type: REMOVE_CURRENT_INGREDIENT
  }
};