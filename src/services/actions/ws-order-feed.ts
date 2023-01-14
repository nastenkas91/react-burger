import {TWSData} from "../../utils/types";

export const WS_ORDER_FEED_CONNECTION_START: 'WS_ORDER_FEED_CONNECTION_START' = 'WS_ORDER_FEED_CONNECTION_START';
export const WS_ORDER_FEED_CONNECTION_SUCCESS: 'WS_ORDER_FEED_CONNECTION_SUCCESS' = 'WS_ORDER_FEED_CONNECTION_SUCCESS';
export const WS_ORDER_FEED_CONNECTION_ERROR: 'WS_ORDER_FEED_CONNECTION_ERROR' = 'WS_ORDER_FEED_CONNECTION_ERROR';
export const WS_ORDER_FEED_GET_MESSAGE: 'WS_ORDER_FEED_GET_MESSAGE' = 'WS_ORDER_FEED_GET_MESSAGE';
export const WS_ORDER_FEED_CONNECTION_CLOSED: 'WS_ORDER_FEED_CONNECTION_CLOSED' = 'WS_ORDER_FEED_CONNECTION_CLOSED';

export interface IWSOrderFeedConnectionStart {
  readonly type: typeof WS_ORDER_FEED_CONNECTION_START
}

export interface IWSOrderFeedConnectionSuccess {
  readonly type: typeof WS_ORDER_FEED_CONNECTION_SUCCESS,
  readonly payload: Event
}

export interface IWSOrderFeedConnectionError {
  readonly type: typeof WS_ORDER_FEED_CONNECTION_ERROR,
  readonly payload: Event
}

export interface IWSOrderFeedGetMessage {
  readonly type: typeof WS_ORDER_FEED_GET_MESSAGE,
  readonly payload: TWSData
}

export interface IWSOrderFeedConnectionClosed {
  readonly type: typeof WS_ORDER_FEED_CONNECTION_CLOSED,
  readonly payload: Event
}

export type TOrderFeedActions =
  | IWSOrderFeedConnectionStart
  | IWSOrderFeedConnectionSuccess
  | IWSOrderFeedConnectionError
  | IWSOrderFeedGetMessage
  | IWSOrderFeedConnectionClosed
