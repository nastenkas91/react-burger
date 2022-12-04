import {
  SEND_ORDER_SUCCESS,
  SEND_ORDER_FAILED,
  SEND_ORDER_REQUEST,
  CLEAR_ORDER_NUMBER
} from "../actions/order";

const initialState = {
  orderNumber: null,
  orderRequest: false,
  orderFailed: false,
  isModalOpen: false
}

export const order = (state = initialState, action) => {
  switch (action.type) {
    case SEND_ORDER_REQUEST: {
      return {
        ...state,
        orderRequest: true,
      }
    }
    case SEND_ORDER_SUCCESS: {
      return {
        ...state,
        orderNumber: action.payload,
        orderRequest: false,
        orderFailed: false
      }
    }
    case SEND_ORDER_FAILED: {
      return {
        ...state,
        orderRequest: false,
        orderFailed: true
      }
    }
    case CLEAR_ORDER_NUMBER: {
      return {
        ...state,
        orderNumber: null,
      }
    }
    default: {
      return state;
    }
  }
}