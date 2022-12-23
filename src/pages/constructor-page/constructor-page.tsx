import React, {FC} from "react";
import styles from './constructor-page.module.css'
import {BurgerIngredients} from "../../components/burger-ingridients/burger-ingridients";
import {BurgerConstructor} from "../../components/burger-constructor/burger-constructor";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

export const ConstructorPage: FC = (): JSX.Element => {

  return (
    <main className={`${styles.constructor__container}`}>
      <DndProvider backend={HTML5Backend}>
        <BurgerIngredients />
        <BurgerConstructor />
      </DndProvider>
    </main>
  )
}

