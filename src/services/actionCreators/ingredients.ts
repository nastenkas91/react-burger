import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_FAILED,
  GET_INGREDIENTS_SUCCESS,
  SET_CURRENT_INGREDIENT,
  REMOVE_CURRENT_INGREDIENT,
  IGetIngredientsRequest,
  IGetIngredientsFailed,
  IGetIngredientsSuccess,
  ISetCurrentIngredient,
  IRemoveCurrentIngredient
} from "../actions/ingredients";
import {TIngredient} from "../../utils/types";

export const getIngredientsRequest = (): IGetIngredientsRequest => {
  return {
    type: GET_INGREDIENTS_REQUEST
  }
};

export const getIngredientsFailed = (): IGetIngredientsFailed => {
  return {
    type: GET_INGREDIENTS_FAILED
  }
};

export const getIngredientsSuccess = (data: Array<TIngredient>): IGetIngredientsSuccess => {
  return {
    type: GET_INGREDIENTS_SUCCESS,
    payload: data,
  }
};

export const setCurrentIngredient = (item: TIngredient): ISetCurrentIngredient => {
  return {
    type: SET_CURRENT_INGREDIENT,
    payload: item,
  }
};

export const removeCurrentIngredient = (): IRemoveCurrentIngredient => {
  return {
    type: REMOVE_CURRENT_INGREDIENT
  }
};