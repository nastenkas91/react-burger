import {React, useEffect, useState} from "react";
import styles from './constructor-page.module.css'
import {BurgerIngredients} from "../burger-ingridients/burger-ingridients";
import {BurgerConstructor} from "../burger-constructor/burger-constructor";
import {order} from "../../utils/data";
import {getIngredients} from "../../utils/api";

export function ConstructorPage() {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    getIngredients()
      .then(res => {
        setIngredients(res.data)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <main className={`${styles.constructor__container}`}>
      <BurgerIngredients ingredients={ingredients} />
      <BurgerConstructor order={order} />
    </main>
  )
}

