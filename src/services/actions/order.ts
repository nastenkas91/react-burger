import {makeOrder} from "../../utils/api";
import {sendOrderFailed, sendOrderRequest, sendOrderSuccess} from "../actionCreators/order";
import {AppDispatch, AppThunk, TOrder} from "../../utils/types";

export const SEND_ORDER_REQUEST: 'SEND_ORDER_REQUEST' = 'SEND_ORDER_REQUEST';
export const SEND_ORDER_SUCCESS: 'SEND_ORDER_SUCCESS' = 'SEND_ORDER_SUCCESS';
export const SEND_ORDER_FAILED: 'SEND_ORDER_FAILED' = 'SEND_ORDER_FAILED';
export const CLEAR_ORDER_NUMBER: 'CLEAR_ORDER_NUMBER' = 'CLEAR_ORDER_NUMBER';

//action types
export interface ISendOrderRequest {
  readonly type: typeof SEND_ORDER_REQUEST,
};

export interface ISendOrderFailed {
  readonly type: typeof SEND_ORDER_FAILED,
};

export interface ISendOrderSuccess {
  readonly type: typeof SEND_ORDER_SUCCESS,
  payload: number
};

export interface IClearOrderNumber {
  readonly type: typeof CLEAR_ORDER_NUMBER,
};

export const sendOrder = (order: TOrder): AppThunk => (dispatch: AppDispatch) => {
  dispatch(sendOrderRequest());
  makeOrder(order)
    .then((res: any) => {
      if (res && res.success) {
        dispatch(sendOrderSuccess(res.order.number))
      } else {
        dispatch(sendOrderFailed())
      }
    })
    .catch(err => {
      dispatch(sendOrderFailed())
    })
  };

export type TOrderActions =
  | ISendOrderRequest
  | ISendOrderFailed
  | ISendOrderSuccess
  | IClearOrderNumber;

