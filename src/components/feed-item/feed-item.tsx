import {FC} from "react";
import styles from './feed-item.module.css';
import {CurrencyIcon, FormattedDate} from "@ya.praktikum/react-developer-burger-ui-components";
import {TFeedItem} from "../../utils/types";
import {useSelector} from "../../utils/hooks";
import {Link, useLocation} from "react-router-dom";
import {getStatusMessage} from "../../utils/utils";

interface IFeedItem {
  orderItem: TFeedItem,
  type:  'account' | 'general',
}

export const FeedItem: FC<IFeedItem> = ({orderItem, type}): JSX.Element => {
  const location = useLocation();
  const {ingredients} = useSelector(state => state.ingredients);
  const orderIngredients = orderItem.ingredients.map(id => ingredients.find(item => item._id === id))
  const ingredientsToShow = orderIngredients.length > 6 ? orderIngredients.slice(0, 5) : orderIngredients.slice(0, 6);
  const count = orderIngredients.length > 6 ? orderIngredients.length - 6 : null;
  const ingredientWithCount = count !== null ? orderIngredients[5] : null;

  const orderPrice = orderIngredients.reduce((acc, el) => {
    if (el && el.price) {
      return (acc + el!.price);
    }
    return acc
  }, 0)

  const onOrderClick = () => {
    localStorage.setItem('orderNumber', `${orderItem.number}`);
  }

  return (
    <li className={styles.container} onClick={onOrderClick}>
      <Link
        key={orderItem._id}
        to={{
          pathname: type === 'general'
            ? `/feed/${orderItem['number']}`
            : `/profile/orders/${orderItem['number']}`,
          state: { background: location },
        }}
        className={`${styles.link}`}
      >
      <div className={`${styles.titleContainer} mb-6`}>
        <span className={`digits text_type_digits-default`}>#{orderItem.number}</span>
        <span className={`text text_type_main-default text_color_inactive`}>
          <FormattedDate date={new Date(orderItem.createdAt)} />
        </span>
      </div>
      <p className={`text text_type_main-medium ${styles.burgerTitle}`}>{orderItem.name}</p>
      {
        type === 'account' && (
          <span className={`mt-2 text text_type_main-default ${orderItem.status === 'done' && 'text_color_success'}`}>{getStatusMessage(orderItem.status)}</span>
        )
      }
      <div className={`${styles.orderContainer} mt-6`}>
        <ul className={styles.ingredientContainer}>
          {
            ingredientsToShow &&
            ingredientsToShow.map((el, index) => (
              <li key={index} className={styles.ingredient} >
                <img
                  src={el!.image}
                  alt={el!.name}
                  className={`${styles.ingredientIcon}`}
                />
              </li>
            ))
          }
          {
            count && (
              <li className={styles.ingredient} >
                <img
                  src={ingredientWithCount!.image}
                  alt={ingredientWithCount!.name}
                  className={`${styles.ingredientIcon} ${styles.ingredientIcon_type_count}`}
                />
                <div className={styles.count__background}></div>
                <span className={styles.count}>+{count}</span>
              </li>
            )
          }
        </ul>
        <div className={styles.priceContainer}>
          <span className={`digits text_type_digits-default`}>{orderPrice}</span>
          <CurrencyIcon type={"primary"} />
        </div>
      </div>
      </Link>
    </li>
  )
}