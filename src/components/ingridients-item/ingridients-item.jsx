import React from "react";
import styles from './ingridients-item.module.css';
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {Counter} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import {ingredientPropTypes} from "../../utils/types";
import {useDispatch} from "react-redux";
import { useDrag } from "react-dnd";
import {setCurrentIngredient} from "../../services/actionCreators/ingredients";

export function IngredientsItem({item, setModalOpen, count}) {
  const dispatch = useDispatch();

  const [{opacity}, dragRef] = useDrag({
    type: 'ingredient',
    item: item,
    collect: monitor => ({
      opacity: monitor.isDragging() ? 0.6 : 1
    })
  });

  const onIngredientClick = () => {
    dispatch(setCurrentIngredient(item));
    setModalOpen(true);
  }

  return (
    <div className={`${styles.item__wraper}`} draggable={true} onClick={onIngredientClick} ref={dragRef} style={{opacity}}>
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

IngredientsItem.propTypes = {
  item: ingredientPropTypes,
  setModalOpen: PropTypes.func.isRequired,
  count: PropTypes.number
}