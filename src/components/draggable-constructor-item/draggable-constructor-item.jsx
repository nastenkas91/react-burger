import styles from "./draggable-constructor-item.module.css";
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";


export const DraggableConstructorItem = ({elem, deleteIngredient, index}) => {

  return (
    <div className={`${styles.constructor__dragbox} mr-2`}>
      <DragIcon type={"primary"}/>
      <ConstructorElement
        text={elem.name}
        thumbnail={elem.image}
        price={elem.price}
        handleClose={() => deleteIngredient(elem, index)}
      />
    </div>
  )
}