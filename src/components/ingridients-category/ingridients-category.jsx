import React from "react";
import styles from './ingridients-category.module.css';

export function IngridientsCategory(props) {
  return (
    <>
      <h2 className={`text text_type_main-medium mb-6`}>{props.title}</h2>
      <div className={`${styles.category__container} pl-4 pr-2`}>
        {props.children}
      </div>
    </>
  )
}