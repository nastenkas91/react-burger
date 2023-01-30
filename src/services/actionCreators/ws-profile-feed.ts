import {TWSData} from "../../utils/types";
import {
  IWSProfileFeedConnectionClosed,
  IWSProfileFeedConnectionError,
  IWSProfileFeedConnectionStart,
  IWSProfileFeedConnectionSuccess,
  IWSProfileFeedGetMessage,
  WS_PROFILE_FEED_CONNECTION_CLOSED,
  WS_PROFILE_FEED_CONNECTION_ERROR,
  WS_PROFILE_FEED_CONNECTION_START,
  WS_PROFILE_FEED_CONNECTION_SUCCESS,
  WS_PROFILE_FEED_GET_MESSAGE
} from "../actions/ws-profile-feed";

export const startProfileFeedConnection = (wsUrl: string): IWSProfileFeedConnectionStart => {
  return {
    type: WS_PROFILE_FEED_CONNECTION_START,
    payload: wsUrl
  }
};

export const profileFeedConnectionSuccess = (e: Event): IWSProfileFeedConnectionSuccess => {
  return {
    type: WS_PROFILE_FEED_CONNECTION_SUCCESS,
    payload: e
  }
};

export const profileFeedConnectionError = (e: Event): IWSProfileFeedConnectionError => {
  return {
    type: WS_PROFILE_FEED_CONNECTION_ERROR,
    payload: e
  }
};

export const profileFeedGetMessage = (message: TWSData): IWSProfileFeedGetMessage => {
  return {
    type: WS_PROFILE_FEED_GET_MESSAGE,
    payload: message
  }
};

export const closedProfileFeedConnection = (e: Event): IWSProfileFeedConnectionClosed => {
  return {
    type: WS_PROFILE_FEED_CONNECTION_CLOSED,
    payload: e
  }
};