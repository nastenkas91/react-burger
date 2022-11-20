import {makeOrder} from "../../utils/api";
import {sendOrderFailed, sendOrderRequest, sendOrderSuccess} from "../actionCreators/order";

export const SEND_ORDER_REQUEST = 'SEND_ORDER_REQUEST';
export const SEND_ORDER_SUCCESS = 'SEND_ORDER_SUCCESS';
export const SEND_ORDER_FAILED = 'SEND_ORDER_FAILED';
export const CLEAR_ORDER_NUMBER ='CLEAR_ORDER_NUMBER';

export const sendOrder = (order) => {
  return function (dispatch) {
    dispatch(sendOrderRequest);
    makeOrder(order)
      .then(res => {
        if (res && res.success) {
          dispatch(sendOrderSuccess(res.order.number))
        } else {
          dispatch(sendOrderFailed)
        }
      })
      .catch(err => {
        dispatch(sendOrderFailed)
      })
    }
  }
