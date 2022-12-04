import {fetchIngredients} from "../../utils/api";
import {getIngredientsFailed, getIngredientsRequest, getIngredientsSuccess} from "../actionCreators/ingredients";

export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED';
export const SET_CURRENT_INGREDIENT = 'SET_CURRENT_INGREDIENT';
export const REMOVE_CURRENT_INGREDIENT = 'REMOVE_CURRENT_INGREDIENT';

export const getIngredients = () => {
  return function(dispatch) {
    dispatch(getIngredientsRequest())
    fetchIngredients()
      .then(res => {
        if (res && res.success) {
          dispatch(getIngredientsSuccess(res.data))
        } else {
          dispatch(getIngredientsFailed)
        }
      })
      .catch(err => {
        dispatch(getIngredientsFailed)
      })
  }
}