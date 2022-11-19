import styles from "./draggable-constructor-item.module.css";
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import React, { useRef, useCallback } from "react";
import { useDrag, useDrop } from "react-dnd";
import {MOVE_INGREDIENT} from "../../services/actions/burgerConstructor";
import {useDispatch} from "react-redux";
import {ingredientPropTypes} from "../../utils/types";
import PropTypes from "prop-types";

export const DraggableConstructorItem = ({elem, deleteIngredient, index, id}) => {
  DraggableConstructorItem.propTypes = {
    elem: ingredientPropTypes,
    deleteIngredient: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
  }

  const dispatch = useDispatch();
  const ref = useRef(null);

  const [{ opacity }, drag] = useDrag({
    type: 'draggable-ingredients',
    item: {id, index},
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0 : 1,
    })
  })

  const moveCard = useCallback((dragIndex, hoverIndex) => {
    dispatch({
      type: MOVE_INGREDIENT,
      payload: {dragIndex: dragIndex, hoverIndex: hoverIndex}})
  }, [dispatch])

  const [{handlerId}, drop] = useDrop({
    accept: 'draggable-ingredients',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      }
    },
    hover(item, monitor) {
      if (!ref.current) {
        return
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }
      moveCard(dragIndex, hoverIndex)
      item.index = hoverIndex
    }
  });

  drag(drop(ref));

  return (
    <div className={`${styles.constructor__dragbox} mr-2`} data-handler-id={handlerId} ref={ref} style={{opacity}} draggable={true}>
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