import {
  SEND_ORDER_SUCCESS,
  SEND_ORDER_FAILED,
  SEND_ORDER_REQUEST,
  CLEAR_ORDER_NUMBER
} from "../actions/order";

export const sendOrderRequest = () => {
  return {
    type: SEND_ORDER_REQUEST,
  }
};

export const sendOrderSuccess = (orderId) => {
  return {
    type: SEND_ORDER_SUCCESS,
    payload: orderId,
  }
};

export const sendOrderFailed = () => {
  return {
    type: SEND_ORDER_FAILED,
  }
};

export const clearOrderNumber = () => {
  return {
    type: CLEAR_ORDER_NUMBER,
  }
};
