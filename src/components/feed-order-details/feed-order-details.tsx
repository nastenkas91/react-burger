import styles from './feed-order-details.module.css';
import {useSelector} from "../../utils/hooks";
import {CurrencyIcon, FormattedDate} from '@ya.praktikum/react-developer-burger-ui-components'
import {useEffect, useState} from "react";
import {Counter, TFeedItem} from "../../utils/types";
import {useLocation} from "react-router-dom";
import {getStatusMessage} from "../../utils/utils";

export function FeedOrderDetails() {
  const location = useLocation();
  const {ingredients} = useSelector(state => state.ingredients)
  const {orders, profileOrders} = useSelector(state => ({
    orders: state.orderFeedReducer.data.orders,
    profileOrders: state.profileFeedReducer.profileData.orders
  }));
  const orderId = location.pathname.includes('feed')
    ? location.pathname.split('/')[2]
    : location.pathname.split('/')[3];

  const order = location.pathname.includes('feed')
    ? orders!.find((el: TFeedItem) => el._id === orderId)
    : profileOrders!.find((el: TFeedItem) => el._id === orderId);
  const [counter, setCounter] = useState<Counter>({});

  function countIngredients(arr: Array<any>) {
    const count = arr.reduce((acc: Counter, item: string): Counter => {
      acc[item] = acc[item] + 1 || 1;
      return acc
    }, {});
    setCounter(count);
  };

  const totalPrice = Object.keys(counter).reduce((acc: number, key: string | null) => {
    const price = ingredients.find(el => el._id === key)!.price;
    acc += price*counter[key!];
    return acc;
  }, 0);

  useEffect(() => {
    countIngredients(order!.ingredients);
  }, [])

  return (
    <div className={`${styles.container}`}>
      <h3 className={`text text_type_main-medium mb-3`}>{order!.name}</h3>
      <p className={`text text_type_main-default mb-15 ${order!.status === 'done' && 'text_color_success'}`}>{getStatusMessage(order!.status)}</p>
      <p className={`text text_type_main-medium mb-6`}>Состав:</p>
      <ul className={`${styles.ingredientsContainer} mb-10`}>
        {
          Object.keys(counter).map((id: string, index: number) => {
            const element = ingredients.find(el => el._id === id)
            return (
              <li key={index} className={styles.ingredient}>
                <div className={styles.ingredientNameContainer}>
                  <div className={styles.iconContainer}>
                    <img src={element!.image} alt={element!.name} className={`${styles.icon}`}/>
                  </div>
                  <p className={`text text_type_main-default`}>{element!.name}</p>
                </div>
                <div className={styles.priceContainer}>
                  <span className={`text digits text_type_digits-default mr-2`}>{counter[element!._id]} x {element!.price}</span>
                  <CurrencyIcon type={"primary"} />
                </div>
              </li>)
          })
        }
      </ul>
      <div className={styles.summaryContainer}>
        <span className={`text text_type_main-default text_color_inactive`}>
          <FormattedDate date={new Date(order!.createdAt)} />
        </span>
        <div className={styles.priceContainer}>
          <span className={`text digits text_type_digits-default mr-2`}>{totalPrice}</span>
          <CurrencyIcon type={"primary"} />
        </div>
      </div>
    </div>
  )
}