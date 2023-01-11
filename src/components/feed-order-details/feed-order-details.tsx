import styles from './feed-order-details.module.css';
import {useSelector} from "../../utils/hooks";
import {CurrencyIcon, FormattedDate} from '@ya.praktikum/react-developer-burger-ui-components'

import {feedData} from "../../utils/data";
import {useEffect, useState} from "react";
import {Counter, TFeedItem} from "../../utils/types";
import {useLocation} from "react-router-dom";

export function FeedOrderDetails() {
  const {ingredients} = useSelector(state => state.ingredients)
  const location = useLocation();
  const orderId = location.pathname.split('/')[2];
  const order = feedData.orders.find((el: TFeedItem) => el._id === orderId);

  // const order = ingredientFromParams || JSON.parse(localStorage.getItem('currentOrderId') || '');
  const orderIngredients = order!.ingredients;
  const [counter, setCounter] = useState<Counter>({});

  function countIngredients(arr: Array<any>) {
    const count = arr.reduce((acc: Counter, item: string): Counter => {
      acc[item] = acc[item] + 1 || 1;
      return acc
    }, {});
    setCounter(count);
  };

  const totalPrice = orderIngredients.reduce((acc, id) => {
    const price = ingredients.find(el => el._id === id)!.price;
    acc += price;
    return acc;
  }, 0);

  useEffect(() => {
    countIngredients(orderIngredients);
  }, [])

  return (
    <div className={`${styles.container}`}>
      {/*<p className={`text digits text_type_digits-default mb-10 ${styles.orderId}`}>#{feedData.orders[0]._id}</p>*/}
      <h3 className={`text text_type_main-medium mb-3`}>Black Hole Singularity острый бургер</h3>
      <p className={`text text_type_main-default mb-15`}>{feedData.orders[0].status}</p>
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