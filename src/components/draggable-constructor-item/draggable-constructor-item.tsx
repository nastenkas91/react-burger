import styles from "./draggable-constructor-item.module.css";
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import React, {useRef, useCallback, FC} from "react";
import { useDrag, useDrop } from "react-dnd";
import {useDispatch} from "../../utils/hooks";
import {moveIngredient} from "../../services/actionCreators/burgerConstructor";
import {TDropIngredient} from "../../utils/types";
import { Identifier } from 'dnd-core'

interface DraggableItem {
  elem: TDropIngredient,
  deleteIngredient: (elem: TDropIngredient) => void,
  index: number,
  id: string,
}

interface CollectedProps {
  handlerId: Identifier | null
}

export const DraggableConstructorItem: FC<DraggableItem> = ({elem, deleteIngredient, index, id}): JSX.Element => {
  const dispatch = useDispatch();
  const ref = useRef<HTMLDivElement>(null);

  const [{opacity}, drag] = useDrag({
    type: 'draggable-ingredients',
    item: {id, index},
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0 : 1,
    })
  })

  const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
    dispatch(moveIngredient(dragIndex, hoverIndex))
  }, [dispatch])

  const [{handlerId}, drop] = useDrop<DraggableItem, undefined, CollectedProps>({
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
      const hoverClientY = clientOffset!.y - hoverBoundingRect.top
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
    <div className={`${styles.constructor__dragbox} mr-2`} data-handler-id={handlerId} ref={ref} style={{opacity}}
         draggable={true}>
      <DragIcon type={"primary"}/>
      <ConstructorElement
        text={elem.name}
        thumbnail={elem.image}
        price={elem.price}
        handleClose={() => deleteIngredient(elem)}
      />
    </div>
  )
}