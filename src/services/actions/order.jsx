import {makeOrder} from "../../utils/api";

export const SEND_ORDER_REQUEST = 'SEND_ORDER_REQUEST';
export const SEND_ORDER_SUCCESS = 'SEND_ORDER_SUCCESS';
export const SEND_ORDER_FAILED = 'SEND_ORDER_FAILED';

export const sendOrder = (order) => {
  return function (dispatch) {
    dispatch({
      type: SEND_ORDER_REQUEST
    });
    makeOrder(order)
      .then(res => {
        if (res && res.success) {
          dispatch({
            type: SEND_ORDER_SUCCESS,
            payload: res.order.number
          })
        } else {
          dispatch({
            type: SEND_ORDER_FAILED,
          })
        }
      })
      .catch(err => {
        dispatch({
          type: SEND_ORDER_FAILED,
        })
      })
    }
  }
