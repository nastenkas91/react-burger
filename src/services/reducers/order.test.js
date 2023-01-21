import {initialState, order} from "./order";
import * as types from "../actions/order";

describe('order reducer', () => {
  it('should return initial state', () => {
    expect(order(initialState, {})).toEqual(initialState)
  })

  it('should handle SEND_ORDER_REQUEST', () => {
    const action = {
      type: types.SEND_ORDER_REQUEST,
    }
    expect(order(initialState, action)).toEqual(
      {
        ...initialState,
        orderRequest: true,
      }
    )
  })

  it('should handle SEND_ORDER_SUCCESS', () => {
    const action = {
      type: types.SEND_ORDER_SUCCESS,
      payload: 12345
    }
    expect(order(initialState, action)).toEqual(
      {
        ...initialState,
        orderNumber: 12345,
        orderRequest: false,
        orderFailed: false
      }
    )
  })

  it('should handle SEND_ORDER_FAILED', () => {
    const action = {
      type: types.SEND_ORDER_FAILED,
    }
    expect(order(initialState, action)).toEqual(
      {
        ...initialState,
        orderRequest: false,
        orderFailed: true
      }
    )
  })

  it('should handle CLEAR_ORDER_NUMBER', () => {
    const action = {
      type: types.CLEAR_ORDER_NUMBER,
    }
    expect(order(initialState, action)).toEqual(
      {
        ...initialState,
        orderNumber: null,
      }
    )
  })

})