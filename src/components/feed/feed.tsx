import {FC} from "react";
import styles from './feed.module.css'
import {FeedItem} from "../feed-item/feed-item";

import {feedData} from '../../utils/data';

interface IFeed {
  type: 'account' | 'general',
}

export const Feed: FC<IFeed> = ({type}): JSX.Element => {

  return (
    <section className={`${styles.feed} ${type === 'account' ? styles.feed_type_account : styles.feed_type_general}`}>
      <ul className={styles.feed__container}>
        {
          feedData.orders.map(el => (<FeedItem orderItem={el} key={el._id} type={type}/>))
        }
      </ul>
    </section>
  )
}