import React from "react";
import styles from './constructor-drag-element.module.css';
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";

export function ConstructorDragElement(props) {
  return (
    <div key={props.orderId} className={`${styles.dragbox} mr-2`}>
      <DragIcon type={"primary"}/>
      <ConstructorElement text={props.name} thumbnail={props.image} price={props.price}/>
    </div>
  )
}