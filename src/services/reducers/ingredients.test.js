import {initialState, ingredients} from "./ingredients";
import * as types from "../actions/ingredients";

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
      payload: [{
        "_id":"60d3b41abdacab0026a733c6",
        "name":"Краторная булка N-200i",
        "type":"bun",
        "proteins":80,
        "fat":24,
        "carbohydrates":53,
        "calories":420,
        "price":1255,
        "image":"https://code.s3.yandex.net/react/code/bun-02.png"
      }]
    }
    expect(ingredients(initialState, action)).toEqual(
      {
        ...initialState,
        ingredientsRequest: false,
        ingredientsFailed: false,
        ingredients: [{
          "_id":"60d3b41abdacab0026a733c6",
          "name":"Краторная булка N-200i",
          "type":"bun",
          "proteins":80,
          "fat":24,
          "carbohydrates":53,
          "calories":420,
          "price":1255,
          "image":"https://code.s3.yandex.net/react/code/bun-02.png"
        }]
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
      payload: {
        "_id":"60d3b41abdacab0026a733c6",
        "name":"Краторная булка N-200i",
        "type":"bun",
        "proteins":80,
        "fat":24,
        "carbohydrates":53,
        "calories":420,
        "price":1255,
        "image":"https://code.s3.yandex.net/react/code/bun-02.png"
      }
    }
    expect(ingredients(initialState, action)).toEqual(
      {
        ...initialState,
        currentIngredient: {
          "_id":"60d3b41abdacab0026a733c6",
          "name":"Краторная булка N-200i",
          "type":"bun",
          "proteins":80,
          "fat":24,
          "carbohydrates":53,
          "calories":420,
          "price":1255,
          "image":"https://code.s3.yandex.net/react/code/bun-02.png"
        }
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