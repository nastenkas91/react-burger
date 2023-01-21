import {orderDetailsState, orderDetailsReducer} from "./order-details";
import * as types from "../actions/order-details";

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
      payload: {
        "success":true,
        "orders":[
            {"_id":"63cbe9ee936b17001be52a36",
              "ingredients":["60d3b41abdacab0026a733c6",
                "60d3b41abdacab0026a733ce"],
              "owner":"6356dd7a9b518a001bb7707e",
              "status":"done",
              "name":"Люминесцентный традиционный-галактический краторный бургер",
              "createdAt":"2023-01-21T13:34:38.364Z",
              "updatedAt":"2023-01-21T13:34:38.804Z",
              "number":37440
            }
          ]}
    }
    expect(orderDetailsReducer(orderDetailsState, action)).toEqual(
      {
        ...orderDetailsState,
        order: {
          "success":true,
          "orders":[
            {"_id":"63cbe9ee936b17001be52a36",
              "ingredients":["60d3b41abdacab0026a733c6",
                "60d3b41abdacab0026a733ce"],
              "owner":"6356dd7a9b518a001bb7707e",
              "status":"done",
              "name":"Люминесцентный традиционный-галактический краторный бургер",
              "createdAt":"2023-01-21T13:34:38.364Z",
              "updatedAt":"2023-01-21T13:34:38.804Z",
              "number":37440
            }
          ]},
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