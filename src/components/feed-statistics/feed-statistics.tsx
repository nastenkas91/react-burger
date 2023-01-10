import {FC} from "react";
import styles from './feed-statistics.module.css'
import {feedData} from '../../utils/data'

export const FeedStatistics: FC = (): JSX.Element => {

  const doneOrders = feedData.orders.filter(el => el.status === 'done');

  return (
    <section className={styles.statistics}>
      <div className={styles.done}>
        <h3 className={`text text_type_main-medium mb-6`}>Готовы:</h3>
        <ul className={styles.orderList}>
          {
            doneOrders.map(el => (
              <li key={el._id} className={`digits text_type_digits-default text_color_success`}>{el._id}</li>
            ))
          }
        </ul>
      </div>

      <div className={styles.inProgress}>
        <h3 className={`text text_type_main-medium mb-6`}>В работе:</h3>
        <ul className={styles.orderList}>
          {
            doneOrders.map(el => (
              <li key={el._id} className={`digits text_type_digits-default`}>{el._id}</li>
            ))
          }
        </ul>
      </div>

      <div className={styles.total}>
        <h3 className={`text text_type_main-medium`}>Выполнено за все время:</h3>
        <p className={`digits text_type_digits-large text ${styles.digits}`}>{feedData.total}</p>
      </div>

      <div className={styles.totalToday}>
        <h3 className={`text text_type_main-medium`}>Выполнено за сегодня:</h3>
        <p className={`digits text_type_digits-large text ${styles.digits}`}>{feedData.totalToday}</p>
      </div>
    </section>
  )
}