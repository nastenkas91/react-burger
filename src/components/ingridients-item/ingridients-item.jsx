import React, {useContext} from "react";
import styles from './ingridients-item.module.css';
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {Counter} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import {ingredientPropTypes} from "../../utils/types";
import {OrderContext} from "../../context/appContext";

export function IngredientsItem({item, setModalOpen, setIngredientInfo}) {
  const { orderDispatcher } = useContext(OrderContext);

  IngredientsItem.propTypes = {
    item: ingredientPropTypes,
    setModalOpen: PropTypes.func.isRequired,
    setIngredientInfo: PropTypes.func.isRequired
  }
  let count = 0;

  const onIngredientClick = () => {
    orderDispatcher({type: 'add', payload: item});
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