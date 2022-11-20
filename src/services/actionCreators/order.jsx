import {
  SEND_ORDER_SUCCESS,
  SEND_ORDER_FAILED,
  SEND_ORDER_REQUEST,
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