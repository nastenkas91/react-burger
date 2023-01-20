import {
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  SET_BUN,
  REMOVE_BUN,
  MOVE_INGREDIENT,
  CLEAR_CONSTRUCTOR, IAddIngredient, IRemoveIngredient, IMoveIngredient, ISetBun, IRemoveBun, IClearConstructor
} from "../actions/burgerConstructor";
import {v4 as uuidv4} from "uuid";
import {TDropIngredient, TIngredient} from "../../utils/types";

export const addIngredient = (ingredient: TIngredient): IAddIngredient => {
  return {
    type: ADD_INGREDIENT,
    payload: {...ingredient, dropId: uuidv4()}
  }
};

export const removeIngredient = (ingredient: TDropIngredient): IRemoveIngredient => {
  return {
    type: REMOVE_INGREDIENT,
    payload: ingredient
  }
};

export const moveIngredient = (dragIndex: number, hoverIndex: number): IMoveIngredient => {
  return {
    type: MOVE_INGREDIENT,
    payload: {dragIndex, hoverIndex}
  }
};

export const setBun = (bun: TIngredient): ISetBun => {
  return {
    type: SET_BUN,
    payload: bun
  }
};

export const removeBun = (bun: TIngredient): IRemoveBun => {
  return {
    type: REMOVE_BUN,
    payload: bun
  }
};

export const clearConstructor = (): IClearConstructor => {
  return {
    type: CLEAR_CONSTRUCTOR,
  }
};