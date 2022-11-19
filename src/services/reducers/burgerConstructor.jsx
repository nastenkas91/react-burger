import {
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  SET_BUN,
  REMOVE_BUN
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
        //selectedIngredients: state.selectedIngredients.splice(action.index, 1),
        totalPrice: state.totalPrice - action.payload.price
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
    default: {
      return state
    }
  }
}