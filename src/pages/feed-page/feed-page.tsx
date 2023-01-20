import React, {useEffect} from "react";
import styles from "./feed-page.module.css";
import {Feed} from "../../components/feed/feed";
import {FeedStatistics} from "../../components/feed-statistics/feed-statistics";
import {useDispatch} from "../../utils/hooks";
import {
  WS_ORDER_FEED_CONNECTION_START,
  WS_ORDER_FEED_DISCONNECT
} from '../../services/actions/ws-order-feed';

export function FeedPage () {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: WS_ORDER_FEED_CONNECTION_START });

    return () => {
      dispatch({type: WS_ORDER_FEED_DISCONNECT})
    }
  }, [])

  return (
    <main className={`${styles.feed}`}>
      <h2 className={`text text_type_main-large`}>Лента заказов</h2>
      <div className={styles.feed__container}>
        <Feed type={'general'} />
        <FeedStatistics />
      </div>
    </main>
  )
}