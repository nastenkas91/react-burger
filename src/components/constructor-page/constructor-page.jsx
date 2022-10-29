import React from "react";
import styles from './constructor-page.module.css'
import {BurgerIngredients} from "../burger-ingridients/burger-ingridients";
import {BurgerConstructor} from "../burger-constructor/burger-constructor";
import { ingridients } from '../../utils/data';
import {order} from "../../utils/data";

export function ConstructorPage() {
  return (
    <main className={`${styles.constructor__container}`}>
      <BurgerIngredients ingridients={ingridients} />
      <BurgerConstructor order={order} />
    </main>
  )
}

