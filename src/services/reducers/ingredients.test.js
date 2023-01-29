import {initialState, ingredients} from "./ingredients";
import * as types from "../actions/ingredients";
import {bun} from "../../utils/test-data";

describe('ingredients reducer', () => {
  it('should return initial state', () => {
    expect(ingredients(initialState, {})).toEqual(initialState)
  })

  it('should handle GET_INGREDIENTS_REQUEST', () => {
    const action = {
      type: types.GET_INGREDIENTS_REQUEST,
    }
    expect(ingredients(initialState, action)).toEqual(
      {
        ...initialState,
        ingredientsRequest: true,
      }
    )
  })

  it('should handle GET_INGREDIENTS_SUCCESS', () => {
    const action = {
      type: types.GET_INGREDIENTS_SUCCESS,
      payload: [bun]
    }
    expect(ingredients(initialState, action)).toEqual(
      {
        ...initialState,
        ingredientsRequest: false,
        ingredientsFailed: false,
        ingredients: [bun]
      }
    )
  })

  it('should handle GET_INGREDIENTS_FAILED', () => {
    const action = {
      type: types.GET_INGREDIENTS_FAILED,
    }
    expect(ingredients(initialState, action)).toEqual(
      {
        ...initialState,
        ingredientsRequest: false,
        ingredientsFailed: true,
      }
    )
  })

  it('should handle SET_CURRENT_INGREDIENT', () => {
    const action = {
      type: types.SET_CURRENT_INGREDIENT,
      payload: bun
    }
    expect(ingredients(initialState, action)).toEqual(
      {
        ...initialState,
        currentIngredient: bun
      }
    )
  })

  it('should handle REMOVE_CURRENT_INGREDIENT', () => {
    const action = {
      type: types.REMOVE_CURRENT_INGREDIENT,
    }
    expect(ingredients(initialState, action)).toEqual(
      {
        ...initialState,
        currentIngredient: null,
      }
    )
  })

})