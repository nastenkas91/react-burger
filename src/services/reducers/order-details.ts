import {TFeedItem} from "../../utils/types";
import {
  CLEAR_ORDER_DETAILS,
  GET_ORDER_FAILED,
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  TOrderDetailsActions
} from "../actions/order-details";


type TOrderDetailsState = {
  order: null | TFeedItem,
  orderRequest: boolean,
  orderFailed: boolean,
}

export const orderDetailsState: TOrderDetailsState = {
  order: null,
  orderRequest: false,
  orderFailed: false,
}

export const orderDetailsReducer = (state = orderDetailsState, action: TOrderDetailsActions): TOrderDetailsState => {
  switch (action.type) {
    case GET_ORDER_REQUEST: {
      return {
        ...state,
        orderRequest: true,
      }
    }
    case GET_ORDER_SUCCESS: {
      return {
        ...state,
        order: action.payload,
        orderRequest: false,
        orderFailed: false
      }
    }
    case GET_ORDER_FAILED: {
      return {
        ...state,
        orderRequest: false,
        orderFailed: true
      }
    }
    case CLEAR_ORDER_DETAILS: {
      return {
        ...state,
        order: null,
      }
    }
    default: {
      return state;
    }
  }
}