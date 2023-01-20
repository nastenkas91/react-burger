import {getOrderById} from "../../utils/api";
import {AppDispatch, AppThunk, TFeedItem, TOrder} from "../../utils/types";
import {getOrderFailed, getOrderRequest, getOrderSuccess} from "../actionCreators/order-details";

export const GET_ORDER_SUCCESS: 'GET_ORDER_SUCCESS' = 'GET_ORDER_SUCCESS';
export const GET_ORDER_FAILED: 'GET_ORDER_FAILED' = 'GET_ORDER_FAILED';
export const GET_ORDER_REQUEST: 'GET_ORDER_REQUEST' = 'GET_ORDER_REQUEST';
export const CLEAR_ORDER_DETAILS: 'CLEAR_ORDER_DETAILS' = 'CLEAR_ORDER_DETAILS';

//action types
export interface IGetOrderRequest {
  readonly type: typeof GET_ORDER_REQUEST,
};

export interface IGetOrderFailed {
  readonly type: typeof GET_ORDER_FAILED,
};

export interface IGetOrderSuccess {
  readonly type: typeof GET_ORDER_SUCCESS,
  readonly payload: TFeedItem
};

export interface IClearOrderDetails {
  readonly type: typeof CLEAR_ORDER_DETAILS,
};

export const getOrderDetails = (number: string): AppThunk => (dispatch: AppDispatch) => {
  dispatch(getOrderRequest());
  getOrderById(number)
    .then((res: any) => {
      if (res && res.success) {
        dispatch(getOrderSuccess(res.orders[0]))
      } else {
        dispatch(getOrderFailed())
      }
    })
    .catch(err => {
      dispatch(getOrderFailed())
    })
};

export type TOrderDetailsActions =
  | IGetOrderRequest
  | IGetOrderFailed
  | IGetOrderSuccess
  | IClearOrderDetails;