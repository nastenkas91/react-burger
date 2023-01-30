import styles from './order-details.module.css';
import doneIcon from '../../images/done.svg';
import {useSelector} from "../../utils/hooks";

export function OrderDetails() {
  const {orderRequest, orderNumber} = useSelector(state => state.order)
  return (
    <div data-testid='order-number' className={`${styles.order__container}`}>
      {
        orderRequest && (
          <p className={`${styles.order__ident} text text_type_digits-default mt-4`}>Загрузка...</p>
        )
      }
      {
        orderNumber && (
          <p className={`${styles.order__ident} text text_type_digits-large mt-4`}>{orderNumber}</p>
        )
      }
      <h3 className={`text text_type_main-medium mt-8`}>идентификатор заказа</h3>
      <img alt={'done'} src={doneIcon} className={`${styles.order__image} mt-15 m-15`} />
      <p className={`text text_type_main-default mb-2`}>Ваш заказ начали готовить</p>
      <p className={`text text_type_main-default mb-20 ${styles.order__wait}`}>Дождитесь готовности на орбитальной станции</p>
    </div>
  )
}
