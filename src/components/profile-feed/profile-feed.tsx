import {Feed} from "../feed/feed";
import {useDispatch} from "../../utils/hooks";
import {useEffect} from "react";
import {WS_PROFILE_FEED_CONNECTION_START, WS_PROFILE_FEED_DISCONNECT} from "../../services/actions/ws-profile-feed";
import {getCookie} from "../../utils/cookies";

export const ProfileFeed = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: WS_PROFILE_FEED_CONNECTION_START, payload: `?token=${getCookie('accessToken')}` });

    return () => {
      dispatch({ type: WS_PROFILE_FEED_DISCONNECT })
    }
  }, [])

  return (
    <Feed type={'account'} />
  )
}