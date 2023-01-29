import {profileFeedState, profileFeedReducer} from "./ws-profile-feed";
import * as types from "../actions/ws-profile-feed";
import {testOrder} from "../../utils/test-data";

describe('profile feed reducer', () => {
  it('should return initial state', () => {
    expect(profileFeedReducer(profileFeedState, {})).toEqual(profileFeedState)
  })

  it('should handle WS_PROFILE_FEED_CONNECTION_SUCCESS', () => {
    const action = {
      type: types.WS_PROFILE_FEED_CONNECTION_SUCCESS,
    }
    expect(profileFeedReducer(profileFeedState, action)).toEqual(
      {
        ...profileFeedState,
        wsProfileOrdersConnected: true
      }
    )
  })

  it('should handle WS_PROFILE_FEED_CONNECTION_ERROR', () => {
    const action = {
      type: types.WS_PROFILE_FEED_CONNECTION_ERROR,
      payload: 'error'
    }
    expect(profileFeedReducer(profileFeedState, action)).toEqual(
      {
        ...profileFeedState,
        wsProfileOrdersConnected: false,
        error: 'error'
      }
    )
  })

  it('should handle WS_PROFILE_FEED_CONNECTION_CLOSED', () => {
    const action = {
      type: types.WS_PROFILE_FEED_CONNECTION_CLOSED,
    }
    expect(profileFeedReducer(profileFeedState, action)).toEqual(
      {
        ...profileFeedState,
        profileData: {
          ...profileFeedState.profileData,
          orders: null,
          total: 0,
          totalToday: 0,
        },
        wsProfileOrdersConnected: false
      }
    )
  })

  it('should handle WS_PROFILE_FEED_GET_MESSAGE', () => {
    const action = {
      type: types.WS_PROFILE_FEED_GET_MESSAGE,
      payload: testOrder
    }
    expect(profileFeedReducer(profileFeedState, action)).toEqual(
      {
        ...profileFeedState,
        profileData: testOrder
      }
    )
  })

})