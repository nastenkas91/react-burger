import {fetchIngredients} from "../../utils/api";
import {getIngredientsFailed, getIngredientsRequest, getIngredientsSuccess} from "../actionCreators/ingredients";
import {AppDispatch, AppThunk, TIngredient} from "../../utils/types";

export const GET_INGREDIENTS_REQUEST: 'GET_INGREDIENTS_REQUEST' = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS: 'GET_INGREDIENTS_SUCCESS' = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILED: 'GET_INGREDIENTS_FAILED' = 'GET_INGREDIENTS_FAILED';
export const SET_CURRENT_INGREDIENT: 'SET_CURRENT_INGREDIENT' = 'SET_CURRENT_INGREDIENT';
export const REMOVE_CURRENT_INGREDIENT: 'REMOVE_CURRENT_INGREDIENT' = 'REMOVE_CURRENT_INGREDIENT';

//action types
export interface IGetIngredientsRequest {
  readonly type: typeof GET_INGREDIENTS_REQUEST,
};

export interface IGetIngredientsFailed {
  readonly type: typeof GET_INGREDIENTS_FAILED,
};

export interface IGetIngredientsSuccess {
  readonly type: typeof GET_INGREDIENTS_SUCCESS,
  payload: Array<TIngredient>
};

export interface ISetCurrentIngredient {
  readonly type: typeof SET_CURRENT_INGREDIENT,
  readonly payload: TIngredient,
};

export interface IRemoveCurrentIngredient {
  readonly type: typeof REMOVE_CURRENT_INGREDIENT,
};

export const getIngredients = (): AppThunk => (dispatch: AppDispatch) => {
  dispatch(getIngredientsRequest())
  fetchIngredients()
    .then((res: any) => {
      if (res && res.success) {
        dispatch(getIngredientsSuccess(res.data));
        // localStorage.setItem('ingredients', JSON.stringify(res.data));
      } else {
        dispatch(getIngredientsFailed())
      }
    })
    .catch(err => {
      dispatch(getIngredientsFailed())
    })
};

export type TIngredientsActions =
  | IGetIngredientsRequest
  | IGetIngredientsFailed
  | IGetIngredientsSuccess
  | ISetCurrentIngredient
  | IRemoveCurrentIngredient;