import {orderDetailsState, orderDetailsReducer} from "./order-details";
import * as types from "../actions/order-details";
import {testOrder} from "../../utils/test-data";

describe('order reducer', () => {
  it('should return initial state', () => {
    expect(orderDetailsReducer(orderDetailsState, {})).toEqual(orderDetailsState)
  })

  it('should handle GET_ORDER_REQUEST', () => {
    const action = {
      type: types.GET_ORDER_REQUEST,
    }
    expect(orderDetailsReducer(orderDetailsState, action)).toEqual(
      {
        ...orderDetailsState,
        orderRequest: true,
      }
    )
  })

  it('should handle GET_ORDER_SUCCESS', () => {
    const action = {
      type: types.GET_ORDER_SUCCESS,
      payload: testOrder
    }
    expect(orderDetailsReducer(orderDetailsState, action)).toEqual(
      {
        ...orderDetailsState,
        order: testOrder,
        orderRequest: false,
        orderFailed: false
      }
    )
  })

  it('should handle GET_ORDER_FAILED', () => {
    const action = {
      type: types.GET_ORDER_FAILED,
    }
    expect(orderDetailsReducer(orderDetailsState, action)).toEqual(
      {
        ...orderDetailsState,
        orderRequest: false,
        orderFailed: true
      }
    )
  })

  it('should handle CLEAR_ORDER_DETAILS', () => {
    const action = {
      type: types.CLEAR_ORDER_DETAILS,
    }
    expect(orderDetailsReducer(orderDetailsState, action)).toEqual(
      {
        ...orderDetailsState,
        order: null,
      }
    )
  })
})