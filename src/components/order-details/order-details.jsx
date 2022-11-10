import styles from './order-details.module.css';
import doneIcon from '../../images/done.svg';
import PropTypes from "prop-types";

export function OrderDetails({orderId}) {
  OrderDetails.propTypes = {
    orderId: PropTypes.number.isRequired
  }

  return (
    <div className={`${styles.order__container}`}>
      <p className={`${styles.order__ident} text text_type_digits-large mt-4`}>{orderId}</p>
      <h3 className={`text text_type_main-medium mt-8`}>идентификатор заказа</h3>
      <img src={doneIcon} className={`${styles.order__image} mt-15 m-15`} />
      <p className={`text text_type_main-default mb-2`}>Ваш заказ начали готовить</p>
      <p className={`text text_type_main-default mb-20 ${styles.order__wait}`}>Дождитесь готовности на орбитальной станции</p>
    </div>
  )
}