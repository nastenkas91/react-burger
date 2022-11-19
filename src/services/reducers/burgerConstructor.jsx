import {
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  SET_BUN,
  REMOVE_BUN,
  MOVE_INGREDIENT,
  CLEAR_CONSTRUCTOR
} from "../actions/burgerConstructor";

const initialState = {
  selectedIngredients: [],
  bun: null,
  totalPrice: 0
}

export const burgerConstructor = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INGREDIENT: {
      return {
        ...state,
        selectedIngredients: [...state.selectedIngredients, action.payload],
        totalPrice: state.totalPrice + action.payload.price
      }
    }
    case REMOVE_INGREDIENT: {
      return {
        ...state,
        selectedIngredients: state.selectedIngredients.filter(el => el.dropId !== action.payload.dropId),
        totalPrice: state.totalPrice - action.payload.price
      }
    }
    case MOVE_INGREDIENT: {
      const ingredients = [...state.selectedIngredients];
      ingredients.splice(action.payload.dragIndex, 0, ingredients.splice(action.payload.hoverIndex, 1)[0]);
      return {
        ...state,
        selectedIngredients: ingredients,
      }
    }
    case SET_BUN: {
      return {
        ...state,
        bun: action.payload,
        totalPrice: state.totalPrice + 2*action.payload.price
      }
    }
    case REMOVE_BUN: {
      return {
        ...state,
        totalPrice: state.totalPrice - action.payload.price * 2,
        bun: null,
      }
    }
    case CLEAR_CONSTRUCTOR: {
      return {
        ...state,
        selectedIngredients: [],
        bun: null,
      }
    }
    default: {
      return state
    }
  }
}