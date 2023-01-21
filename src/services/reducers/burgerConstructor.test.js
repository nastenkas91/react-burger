import * as types from '../actions/burgerConstructor';
import {initialState, burgerConstructor} from '../reducers/burgerConstructor';

describe('burger constructor reducer', () => {
  it('should return initial state', () => {
    expect(burgerConstructor(initialState, {})).toEqual(initialState)
  })

  it('should handle ADD_INGREDIENT', () => {
    const action = {
      type: types.ADD_INGREDIENT,
      payload:
        {
          "_id":"60d3b41abdacab0026a733d4",
          "name":"Сыр с астероидной плесенью",
          "type":"main",
          "proteins":84,
          "fat":48,
          "carbohydrates":420,
          "calories":3377,
          "price":4142,
          "image":"https://code.s3.yandex.net/react/code/cheese.png"
        },
    }
    expect(burgerConstructor(initialState, action)).toEqual(
      {
        ...initialState,
        selectedIngredients: [{
          "_id":"60d3b41abdacab0026a733d4",
          "name":"Сыр с астероидной плесенью",
          "type":"main",
          "proteins":84,
          "fat":48,
          "carbohydrates":420,
          "calories":3377,
          "price":4142,
          "image":"https://code.s3.yandex.net/react/code/cheese.png",
        }],
        totalPrice: 4142
      }
    )
  })

  it('should handle REMOVE_INGREDIENT', () => {
    const action = {
      type: types.REMOVE_INGREDIENT,
      payload: {
        "_id":"60d3b41abdacab0026a733d4",
        "name":"Сыр с астероидной плесенью",
        "type":"main",
        "proteins":84,
        "fat":48,
        "carbohydrates":420,
        "calories":3377,
        "price":4142,
        "image":"https://code.s3.yandex.net/react/code/cheese.png",
      }
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
      selectedIngredients:
        [{
          "_id":"60d3b41abdacab0026a733d4",
          "name":"Сыр с астероидной плесенью",
          "type":"main",
          "proteins":84,
          "fat":48,
          "carbohydrates":420,
          "calories":3377,
          "price":4142,
          "image":"https://code.s3.yandex.net/react/code/cheese.png"
        },
        {
          "_id":"60d3b41abdacab0026a733d4",
          "name":"Сыр с астероидной плесенью",
          "type":"main",
          "proteins":84,
          "fat":48,
          "carbohydrates":420,
          "calories":3377,
          "price":4142,
          "image":"https://code.s3.yandex.net/react/code/cheese.png"
        }]
    }, action)).toEqual(
      {
        ...initialState,
        selectedIngredients: [
          {
            "_id":"60d3b41abdacab0026a733d4",
            "name":"Сыр с астероидной плесенью",
            "type":"main",
            "proteins":84,
            "fat":48,
            "carbohydrates":420,
            "calories":3377,
            "price":4142,
            "image":"https://code.s3.yandex.net/react/code/cheese.png"
          },
          {
            "_id":"60d3b41abdacab0026a733d4",
            "name":"Сыр с астероидной плесенью",
            "type":"main",
            "proteins":84,
            "fat":48,
            "carbohydrates":420,
            "calories":3377,
            "price":4142,
            "image":"https://code.s3.yandex.net/react/code/cheese.png"
          }
        ],
      }
    )
  })

  it('should handle SET_BUN', () => {
    const action = {
      type: types.SET_BUN,
      payload:  {
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
    expect(burgerConstructor(initialState, action)).toEqual(
      {
        ...initialState,
        bun: {
          "_id":"60d3b41abdacab0026a733c6",
          "name":"Краторная булка N-200i",
          "type":"bun",
          "proteins":80,
          "fat":24,
          "carbohydrates":53,
          "calories":420,
          "price":1255,
          "image":"https://code.s3.yandex.net/react/code/bun-02.png"
        },
        totalPrice: 2510
      }
    )
  })

  it('should handle REMOVE_BUN', () => {
    const action = {
      type: types.REMOVE_BUN,
      payload:  {
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