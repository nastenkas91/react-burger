import {
  SEND_ORDER_SUCCESS,
  SEND_ORDER_FAILED,
  SEND_ORDER_REQUEST,
  CLEAR_ORDER_NUMBER, ISendOrderRequest, ISendOrderFailed, ISendOrderSuccess, IClearOrderNumber
} from "../actions/order";

export const sendOrderRequest = (): ISendOrderRequest => {
  return {
    type: SEND_ORDER_REQUEST,
  }
};

export const sendOrderSuccess = (orderId: number): ISendOrderSuccess => {
  return {
    type: SEND_ORDER_SUCCESS,
    payload: orderId,
  }
};

export const sendOrderFailed = (): ISendOrderFailed => {
  return {
    type: SEND_ORDER_FAILED,
  }
};

export const clearOrderNumber = (): IClearOrderNumber => {
  return {
    type: CLEAR_ORDER_NUMBER,
  }
};
