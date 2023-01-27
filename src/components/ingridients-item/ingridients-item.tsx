import React, {FC} from "react";
import styles from './ingridients-item.module.css';
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {Counter} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrag } from "react-dnd";
import {useLocation, Link} from "react-router-dom";
import {TIngredient} from "../../utils/types";
import {useDispatch} from "../../utils/hooks";
import {setCurrentIngredient} from "../../services/actionCreators/ingredients";

interface Ingredient {
  item: TIngredient,
  count?: number
}

export const IngredientsItem: FC<Ingredient> = ({item, count}): JSX.Element => {
  const dispatch = useDispatch();
  const location = useLocation();
  const ingredientId = item['_id'];

  const [{opacity}, dragRef] = useDrag({
    type: 'ingredient',
    item: item,
    collect: monitor => ({
      opacity: monitor.isDragging() ? 0.6 : 1
    })
  });

  const onIngredientClick = () => {
    dispatch(setCurrentIngredient(item));
    localStorage.setItem('currentIngredient', JSON.stringify( item));
  }

  return (
    <Link
      key={ingredientId}
      to={{
        pathname: `/ingredients/${ingredientId}`,
        state: { background: location },
      }}
      className={`${styles.item__link}`}

      data-testid={item.name}
    >
      <div className={`${styles.item__wraper}`} onClick={onIngredientClick} draggable={true} ref={dragRef} style={{opacity}}>
      {count && (
        <Counter count={count} size={"default"}/>
      )}
      <img src={item.image} alt={item.name} className={`${styles.item__image}`}/>
      <p className={`${styles.item__price} mt-1`}>
        <span className={`text text_type_digits-default mr-2`}>{item.price}</span>
        <CurrencyIcon type={"primary"} />
      </p>
      <p className={`${styles.item__name} mt-1`}>{item.name}</p>
    </div>
    </Link>
  )
}