import {FC} from "react";
import styles from './feed.module.css'
import {FeedItem} from "../feed-item/feed-item";
import {useSelector} from "../../utils/hooks";
import {TFeedItem} from "../../utils/types";

interface IFeed {
  type: 'account' | 'general',
}

export const Feed: FC<IFeed> = ({type}): JSX.Element => {
  const {orders, profileOrders} = useSelector(state => ({
    orders: state.orderFeedReducer.data.orders,
    profileOrders: state.profileFeedReducer.profileData.orders
  }));

  return (
    <section className={`${styles.feed} ${type === 'account' ? styles.feed_type_account : styles.feed_type_general}`}>
      <ul className={styles.feed__container}>
        { type === 'general' && orders &&
          orders!.map((el: TFeedItem) => {
            if (!el.ingredients.includes(null)) {
              return (
                <FeedItem orderItem={el} key={el._id} type={type}/>
              )
            }
          })
        }
        { type === 'account' && profileOrders &&
          profileOrders!.map((el: TFeedItem) => {
            if (!el.ingredients.includes(null)) {
              return (
                <FeedItem orderItem={el} key={el._id} type={type}/>
              )
            }
          })
        }
      </ul>
    </section>
  )
}