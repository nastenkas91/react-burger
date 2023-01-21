import {orderFeedState, orderFeedReducer} from "./ws-order-feed";
import * as types from "../actions/ws-order-feed";

describe('order feed reducer', () => {
  it('should return initial state', () => {
    expect(orderFeedReducer(orderFeedState, {})).toEqual(orderFeedState)
  })

  it('should handle WS_ORDER_FEED_CONNECTION_SUCCESS', () => {
    const action = {
      type: types.WS_ORDER_FEED_CONNECTION_SUCCESS,
    }
    expect(orderFeedReducer(orderFeedState, action)).toEqual(
      {
        ...orderFeedState,
        wsOrdersConnected: true
      }
    )
  })

  it('should handle WS_ORDER_FEED_CONNECTION_ERROR', () => {
    const action = {
      type: types.WS_ORDER_FEED_CONNECTION_ERROR,
      payload: 'error'
    }
    expect(orderFeedReducer(orderFeedState, action)).toEqual(
      {
        ...orderFeedState,
        wsOrdersConnected: false,
        error: 'error'
      }
    )
  })

  it('should handle WS_ORDER_FEED_CONNECTION_CLOSED', () => {
    const action = {
      type: types.WS_ORDER_FEED_CONNECTION_CLOSED,
    }
    expect(orderFeedReducer(orderFeedState, action)).toEqual(
      {
        ...orderFeedState,
        wsOrdersConnected: false
      }
    )
  })

  it('should handle WS_ORDER_FEED_GET_MESSAGE', () => {
    const action = {
      type: types.WS_ORDER_FEED_GET_MESSAGE,
      payload: {
        "success": true,
        "orders": [
          {
            "_id": "63cbe9ee936b17001be52a36",
            "ingredients": ["60d3b41abdacab0026a733c6",
              "60d3b41abdacab0026a733ce"],
            "owner": "6356dd7a9b518a001bb7707e",
            "status": "done",
            "name": "Люминесцентный традиционный-галактический краторный бургер",
            "createdAt": "2023-01-21T13:34:38.364Z",
            "updatedAt": "2023-01-21T13:34:38.804Z",
            "number": 37440
          }
        ],
      "total": 37355,
      "totalToday": 75
      }
    }
    expect(orderFeedReducer(orderFeedState, action)).toEqual(
      {
        ...orderFeedState,
        data: {
          "success": true,
          "orders": [
            {
              "_id": "63cbe9ee936b17001be52a36",
              "ingredients": ["60d3b41abdacab0026a733c6",
                "60d3b41abdacab0026a733ce"],
              "owner": "6356dd7a9b518a001bb7707e",
              "status": "done",
              "name": "Люминесцентный традиционный-галактический краторный бургер",
              "createdAt": "2023-01-21T13:34:38.364Z",
              "updatedAt": "2023-01-21T13:34:38.804Z",
              "number": 37440
            }
          ],
          "total": 37355,
          "totalToday": 75
        }
      }
    )
  })
})