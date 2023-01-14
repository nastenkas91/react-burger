import {FC} from "react";
import styles from './feed-statistics.module.css'
import {useSelector} from "../../utils/hooks";
import {TFeedItem} from "../../utils/types";

export const FeedStatistics: FC = (): JSX.Element => {
  const {orders, totalToday, total} = useSelector(state => state.orderFeedReducer.data)
  const doneOrders = orders?.filter((el: TFeedItem) => el.status === 'done');
  const ordersInProgress = orders?.filter((el: TFeedItem) => el.status === 'pending');

  return (
    <section className={styles.statistics}>
      <div className={styles.done}>
        <h3 className={`text text_type_main-medium mb-6`}>Готовы:</h3>
        <ul className={styles.orderList}>
          {
            doneOrders &&
            doneOrders.map((el: TFeedItem, index: number) => (
              index < 20 &&
              <li key={el._id} className={`digits text_type_digits-default text_color_success`}>{el.number}</li>
            ))
          }
        </ul>
      </div>

      <div className={styles.inProgress}>
        <h3 className={`text text_type_main-medium mb-6`}>В работе:</h3>
        <ul className={styles.orderList}>
          {
            ordersInProgress &&
            ordersInProgress.map((el: TFeedItem, index: number) => (
              index < 20 &&
              <li key={el._id} className={`digits text_type_digits-default`}>{el.number}</li>
            ))
          }
        </ul>
      </div>

      <div className={styles.total}>
        <h3 className={`text text_type_main-medium`}>Выполнено за все время:</h3>
        <p className={`digits text_type_digits-large text ${styles.digits}`}>{total}</p>
      </div>

      <div className={styles.totalToday}>
        <h3 className={`text text_type_main-medium`}>Выполнено за сегодня:</h3>
        <p className={`digits text_type_digits-large text ${styles.digits}`}>{totalToday}</p>
      </div>
    </section>
  )
}