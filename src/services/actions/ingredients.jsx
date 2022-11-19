import {fetchIngredients} from "../../utils/api";

export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED';
export const SET_CURRENT_INGREDIENT = 'SET_CURRENT_INGREDIENT';
export const REMOVE_CURRENT_INGREDIENT = 'REMOVE_CURRENT_INGREDIENT';

export const getIngredients = () => {
  return function(dispatch) {
    dispatch({
      type: GET_INGREDIENTS_REQUEST
    })
    fetchIngredients()
      .then(res => {
        if (res && res.success) {
          dispatch({
            type: GET_INGREDIENTS_SUCCESS,
            payload: res.data
          })
        } else {
          dispatch({
            type: GET_INGREDIENTS_FAILED,
          })
        }
      })
      .catch(err => {
        dispatch({
          type: GET_INGREDIENTS_FAILED,
        })
      })
  }
}