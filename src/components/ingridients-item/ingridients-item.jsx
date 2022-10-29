import React from "react";
import styles from './ingridients-item.module.css';
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {Counter} from "@ya.praktikum/react-developer-burger-ui-components";
import {order} from '../../utils/data'

export function IngridientsItem(props) {
  //временный подсчет
  const count = order.reduce((acc, el) => el._id === props._id ? acc + 1 : acc, 0)

  return (
    <div className={`${styles.item__wraper}`}>
      {count > 0 && (
        <Counter count={count} size={"default"}/>
      )}
      <img src={props.image} className={`${styles.item__image}`}/>
      <p className={`${styles.item__price} mt-1`}>
        <span className={`text text_type_digits-default mr-2`}>{props.price}</span>
        <CurrencyIcon type={"primary"} />
      </p>
      <p className={`${styles.item__name} mt-1`}>{props.name}</p>
    </div>
  )
}