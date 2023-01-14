import {TWSData} from "../../utils/types";

export const WS_PROFILE_FEED_CONNECTION_START: 'WS_PROFILE_FEED_CONNECTION_START' = 'WS_PROFILE_FEED_CONNECTION_START';
export const WS_PROFILE_FEED_CONNECTION_SUCCESS: 'WS_PROFILE_FEED_CONNECTION_SUCCESS' = 'WS_PROFILE_FEED_CONNECTION_SUCCESS';
export const WS_PROFILE_FEED_CONNECTION_ERROR: 'WS_PROFILE_FEED_CONNECTION_ERROR' = 'WS_PROFILE_FEED_CONNECTION_ERROR';
export const WS_PROFILE_FEED_GET_MESSAGE: 'WS_PROFILE_FEED_GET_MESSAGE' = 'WS_PROFILE_FEED_GET_MESSAGE';
export const WS_PROFILE_FEED_CONNECTION_CLOSED: 'WS_PROFILE_FEED_CONNECTION_CLOSED' = 'WS_PROFILE_FEED_CONNECTION_CLOSED';

export interface IWSProfileFeedConnectionStart {
  readonly type: typeof WS_PROFILE_FEED_CONNECTION_START
}

export interface IWSProfileFeedConnectionSuccess {
  readonly type: typeof WS_PROFILE_FEED_CONNECTION_SUCCESS,
  readonly payload: Event
}

export interface IWSProfileFeedConnectionError {
  readonly type: typeof WS_PROFILE_FEED_CONNECTION_ERROR,
  readonly payload: Event
}

export interface IWSProfileFeedGetMessage {
  readonly type: typeof WS_PROFILE_FEED_GET_MESSAGE,
  readonly payload: TWSData
}

export interface IWSProfileFeedConnectionClosed {
  readonly type: typeof WS_PROFILE_FEED_CONNECTION_CLOSED,
  readonly payload: Event
}

export type TProfileFeedActions =
  | IWSProfileFeedConnectionStart
  | IWSProfileFeedConnectionSuccess
  | IWSProfileFeedConnectionError
  | IWSProfileFeedGetMessage
  | IWSProfileFeedConnectionClosed