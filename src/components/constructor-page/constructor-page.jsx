import React from "react";
import styles from './constructor-page.module.css'
import {BurgerIngredients} from "../burger-ingridients/burger-ingridients";
import {BurgerConstructor} from "../burger-constructor/burger-constructor";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

export function ConstructorPage() {
  return (
    <main className={`${styles.constructor__container}`}>
      <DndProvider backend={HTML5Backend}>
        <BurgerIngredients />
        <BurgerConstructor />
      </DndProvider>
    </main>
  )
}

