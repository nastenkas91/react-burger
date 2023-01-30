import {orderFeedState, orderFeedReducer} from "./ws-order-feed";
import * as types from "../actions/ws-order-feed";
import {testOrder} from "../../utils/test-data";

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
        data: {
          ...orderFeedState.data,
          orders: null,
          total: 0,
          totalToday: 0,
        },
        wsOrdersConnected: false
      }
    )
  })

  it('should handle WS_ORDER_FEED_GET_MESSAGE', () => {
    const action = {
      type: types.WS_ORDER_FEED_GET_MESSAGE,
      payload: testOrder
    }
    expect(orderFeedReducer(orderFeedState, action)).toEqual(
      {
        ...orderFeedState,
        data: testOrder
      }
    )
  })
})