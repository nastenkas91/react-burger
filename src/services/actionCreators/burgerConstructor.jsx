import {
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  SET_BUN,
  REMOVE_BUN,
  MOVE_INGREDIENT,
  CLEAR_CONSTRUCTOR
} from "../actions/burgerConstructor";
import {v4 as uuidv4} from "uuid";

export const addIngredient = (ingredient) => {
  return {
    type: ADD_INGREDIENT,
    payload: {...ingredient, dropId: uuidv4()}
  }
};

export const removeIngredient = (ingredient) => {
  return {
    type: REMOVE_INGREDIENT,
    payload: ingredient
  }
};

export const moveIngredient = (dragIndex, hoverIndex) => {
  return {
    type: MOVE_INGREDIENT,
    payload: {dragIndex, hoverIndex}
  }
};

export const setBun = (bun) => {
  return {
    type: SET_BUN,
    payload: bun
  }
};

export const removeBun = (bun) => {
  return {
    type: REMOVE_BUN,
    payload: bun
  }
};

export const clearConstructor = () => {
  return {
    type: CLEAR_CONSTRUCTOR,
  }
};