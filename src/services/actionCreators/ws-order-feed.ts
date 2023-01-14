import {
  IWSOrderFeedConnectionClosed,
  IWSOrderFeedConnectionError,
  IWSOrderFeedConnectionStart,
  IWSOrderFeedConnectionSuccess,
  IWSOrderFeedGetMessage,
  WS_ORDER_FEED_CONNECTION_CLOSED,
  WS_ORDER_FEED_CONNECTION_ERROR,
  WS_ORDER_FEED_CONNECTION_START,
  WS_ORDER_FEED_CONNECTION_SUCCESS,
  WS_ORDER_FEED_GET_MESSAGE
} from "../actions/ws-order-feed";
import {TWSData} from "../../utils/types";

export const startOrderFeedConnection = (): IWSOrderFeedConnectionStart => {
  return {
    type: WS_ORDER_FEED_CONNECTION_START,
  }
};

export const orderFeedConnectionSuccess = (e: Event): IWSOrderFeedConnectionSuccess => {
  return {
    type: WS_ORDER_FEED_CONNECTION_SUCCESS,
    payload: e
  }
};

export const orderFeedConnectionError = (e: Event): IWSOrderFeedConnectionError => {
  return {
    type: WS_ORDER_FEED_CONNECTION_ERROR,
    payload: e
  }
};

export const orderFeedGetMessage = (message: TWSData): IWSOrderFeedGetMessage => {
  return {
    type: WS_ORDER_FEED_GET_MESSAGE,
    payload: message
  }
};

export const closedOrderFeedConnection = (e: Event): IWSOrderFeedConnectionClosed => {
  return {
    type: WS_ORDER_FEED_CONNECTION_CLOSED,
    payload: e
  }
};