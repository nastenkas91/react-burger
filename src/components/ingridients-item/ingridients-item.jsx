import React from "react";
import styles from './ingridients-item.module.css';
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {Counter} from "@ya.praktikum/react-developer-burger-ui-components";
import {order} from '../../utils/data'

export function IngredientsItem({item, setModalOpen, setIngredientInfo}) {
  //временный подсчет
  const count = order.reduce((acc, el) => el._id === item._id ? acc + 1 : acc, 0)

  const onIngredientClick = () => {
    setIngredientInfo(item);
    setModalOpen(true);
  }
  return (
    <div className={`${styles.item__wraper}`} onClick={onIngredientClick}>
      {count > 0 && (
        <Counter count={count} size={"default"}/>
      )}
      <img src={item.image} alt={item.name} className={`${styles.item__image}`}/>
      <p className={`${styles.item__price} mt-1`}>
        <span className={`text text_type_digits-default mr-2`}>{item.price}</span>
        <CurrencyIcon type={"primary"} />
      </p>
      <p className={`${styles.item__name} mt-1`}>{item.name}</p>
    </div>
  )
}