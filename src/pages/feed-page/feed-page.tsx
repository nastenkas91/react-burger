import React, {FC} from "react";
import styles from "./feed-page.module.css";
import {Feed} from "../../components/feed/feed";
import {FeedStatistics} from "../../components/feed-statistics/feed-statistics";

export const FeedPage: FC = (): JSX.Element => {

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