import {
  GET_ORDER_SUCCESS,
  GET_ORDER_FAILED,
  GET_ORDER_REQUEST,
  CLEAR_ORDER_DETAILS,
  IGetOrderRequest,
  IGetOrderFailed,
  IGetOrderSuccess,
  IClearOrderDetails,
} from "../actions/order-details";
import {TFeedItem} from "../../utils/types";

export const getOrderRequest = (): IGetOrderRequest => {
  return {
    type: GET_ORDER_REQUEST,
  }
};

export const getOrderSuccess = (order: TFeedItem): IGetOrderSuccess => {
  return {
    type: GET_ORDER_SUCCESS,
    payload: order,
  }
};

export const getOrderFailed = (): IGetOrderFailed => {
  return {
    type: GET_ORDER_FAILED,
  }
};

export const clearOrderDetails = (): IClearOrderDetails => {
  return {
    type: CLEAR_ORDER_DETAILS,
  }
};