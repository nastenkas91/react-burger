import {profileFeedState, profileFeedReducer} from "./ws-profile-feed";
import * as types from "../actions/ws-profile-feed";

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
        wsProfileOrdersConnected: false
      }
    )
  })

  it('should handle WS_PROFILE_FEED_GET_MESSAGE', () => {
    const action = {
      type: types.WS_PROFILE_FEED_GET_MESSAGE,
      payload: {
        "success": true,
        "orders": [
          {
            "_id": "63cbe9ee936b17001be52a36",
            "ingredients": ["60d3b41abdacab0026a733c6",
              "60d3b41abdacab0026a733ce"],
            "owner": "6356dd7a9b518a001bb7707e",
            "status": "done",
            "name": "Люминесцентный традиционный-галактический краторный бургер",
            "createdAt": "2023-01-21T13:34:38.364Z",
            "updatedAt": "2023-01-21T13:34:38.804Z",
            "number": 37440
          }
        ],
        "total": 37355,
        "totalToday": 75
      }
    }
    expect(profileFeedReducer(profileFeedState, action)).toEqual(
      {
        ...profileFeedState,
        profileData: {
          "success": true,
          "orders": [
            {
              "_id": "63cbe9ee936b17001be52a36",
              "ingredients": ["60d3b41abdacab0026a733c6",
                "60d3b41abdacab0026a733ce"],
              "owner": "6356dd7a9b518a001bb7707e",
              "status": "done",
              "name": "Люминесцентный традиционный-галактический краторный бургер",
              "createdAt": "2023-01-21T13:34:38.364Z",
              "updatedAt": "2023-01-21T13:34:38.804Z",
              "number": 37440
            }
          ],
          "total": 37355,
          "totalToday": 75
        }
      }
    )
  })

})