import * as types from '../actions/burgerConstructor';
import {initialState, burgerConstructor} from '../reducers/burgerConstructor';
import {bun, ingredient1, ingredient2} from "../../utils/test-data";

describe('burger constructor reducer', () => {
  it('should return initial state', () => {
    expect(burgerConstructor(initialState, {})).toEqual(initialState)
  })

  it('should handle ADD_INGREDIENT', () => {
    const action = {
      type: types.ADD_INGREDIENT,
      payload: ingredient1,
    }
    expect(burgerConstructor(initialState, action)).toEqual(
      {
        ...initialState,
        selectedIngredients: [ingredient1],
        totalPrice: 4142
      }
    )
  })

  it('should handle REMOVE_INGREDIENT', () => {
    const action = {
      type: types.REMOVE_INGREDIENT,
      payload: ingredient1
    }
    expect(burgerConstructor({
      ...initialState,
      totalPrice: 4142
    }, action)).toEqual(
      {
        ...initialState,
        selectedIngredients: [],
        totalPrice: 0
      }
    )
  })

  it('should handle MOVE_INGREDIENT', () => {
    const action = {
      type: types.MOVE_INGREDIENT,
      payload: {
        dragIndex: 0,
        hoverIndex: 1
      }
    }
    expect(burgerConstructor({
      ...initialState,
      selectedIngredients: [
        ingredient1,
        ingredient2
      ],
    }, action)).toEqual(
      {
        ...initialState,
        selectedIngredients: [
          ingredient2,
          ingredient1
        ],
      }
    )
  })

  it('should handle SET_BUN', () => {
    const action = {
      type: types.SET_BUN,
      payload:  bun
    }
    expect(burgerConstructor(initialState, action)).toEqual(
      {
        ...initialState,
        bun: bun,
        totalPrice: 2510
      }
    )
  })

  it('should handle REMOVE_BUN', () => {
    const action = {
      type: types.REMOVE_BUN,
      payload: bun
    }
    expect(burgerConstructor({
      ...initialState,
      totalPrice: 2510
    }, action)).toEqual(
      {
        ...initialState,
        bun: null,
        totalPrice: 0
      }
    )
  })

  it('should handle CLEAR_CONSTRUCTOR', () => {
    const action = {
      type: types.CLEAR_CONSTRUCTOR,
    }
    expect(burgerConstructor(initialState, action)).toEqual(
      {
        ...initialState,
        selectedIngredients: [],
        bun: null,
        totalPrice: 0
      }
    )
  })

})