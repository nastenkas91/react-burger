import {TFeedItem} from "../../utils/types";
import {TProfileFeedActions} from "../actions/ws-profile-feed";

type TProfileFeedState = {
  wsProfileOrdersConnected: boolean,
  profileData: {
    orders: TFeedItem[] | null;
    success: boolean,
    total: number;
    totalToday: number;
  },
  error?: Event
}

export const profileFeedState: TProfileFeedState = {
  wsProfileOrdersConnected: false,
  profileData: {
    orders: null,
    success: false,
    total: 0,
    totalToday: 0,
  },
}

export const profileFeedReducer = (state = profileFeedState, action: TProfileFeedActions): TProfileFeedState => {
  switch (action.type) {
    case "WS_PROFILE_FEED_CONNECTION_SUCCESS": {
      return {
        ...state,
        wsProfileOrdersConnected: true
      }
    }
    case "WS_PROFILE_FEED_CONNECTION_ERROR": {
      return {
        ...state,
        wsProfileOrdersConnected: false,
        error: action.payload
      }
    }
    case "WS_PROFILE_FEED_CONNECTION_CLOSED": {
      return {
        ...state,
        profileData: {
          ...state.profileData,
          orders: null,
          total: 0,
          totalToday: 0,
        },
        wsProfileOrdersConnected: false
      }
    }
    case "WS_PROFILE_FEED_GET_MESSAGE": {
      return {
        ...state,
        profileData: action.payload
      }
    }
    default: {
      return state;
    }
  }
}