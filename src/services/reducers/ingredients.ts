import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_FAILED,
  GET_INGREDIENTS_SUCCESS,
  SET_CURRENT_INGREDIENT,
  REMOVE_CURRENT_INGREDIENT, TIngredientsActions
} from "../actions/ingredients";
import {TIngredient} from "../../utils/types";

type TIngredientsInitialState = {
  ingredients: Array<TIngredient> | [],
  ingredientsRequest: boolean,
  ingredientsFailed: boolean,
  currentIngredient: TIngredient | null,
}
// JSON.parse(localStorage.getItem('ingredients') || '') ||
export const initialState: TIngredientsInitialState = {
  ingredients:[],
  ingredientsRequest: false,
  ingredientsFailed: false,
  currentIngredient: null,
}

export const ingredients = (state = initialState, action: TIngredientsActions): TIngredientsInitialState => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST: {
      return {
        ...state,
        ingredientsRequest: true,
      }
    }
    case GET_INGREDIENTS_SUCCESS: {
      return {
        ...state,
        ingredientsRequest: false,
        ingredientsFailed: false,
        ingredients: action.payload
      }
    }
    case GET_INGREDIENTS_FAILED: {
      return {
        ...state,
        ingredientsRequest: false,
        ingredientsFailed: true,
      }
    }
    case SET_CURRENT_INGREDIENT: {
      return {
        ...state,
        currentIngredient: action.payload,
      }
    }
    case REMOVE_CURRENT_INGREDIENT: {
      return {
        ...state,
        currentIngredient: null,
      }
    }
    default: {
      return state;
    }
  }
}