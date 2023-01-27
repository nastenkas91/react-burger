import {TFeedItem, TWSData} from "../../utils/types";
import {TOrderFeedActions} from "../actions/ws-order-feed";


type TOrderFeedState = {
  wsOrdersConnected: boolean,
  data: {
    orders: TFeedItem[] | null;
    success: boolean,
    total: number;
    totalToday: number;
  },
  error?: Event
}

export const orderFeedState: TOrderFeedState = {
  wsOrdersConnected: false,
  data: {
    orders: null,
    success: false,
    total: 0,
    totalToday: 0,
  },
}

export const orderFeedReducer = (state = orderFeedState, action: TOrderFeedActions): TOrderFeedState => {
  switch (action.type) {
    case "WS_ORDER_FEED_CONNECTION_SUCCESS": {
      return {
        ...state,
        wsOrdersConnected: true
      }
    }
    case "WS_ORDER_FEED_CONNECTION_ERROR": {
      return {
        ...state,
        wsOrdersConnected: false,
        error: action.payload
      }
    }
    case "WS_ORDER_FEED_CONNECTION_CLOSED": {
      return {
        ...state,
        data: {
          ...state.data,
          orders: null,
          total: 0,
          totalToday: 0,
        },
        wsOrdersConnected: false
      }
    }
    case "WS_ORDER_FEED_GET_MESSAGE": {
      return {
        ...state,
        data: action.payload
      }
    }
    default: {
      return state;
    }
  }
}