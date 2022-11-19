import React, {useState} from "react";
import styles from './burger-constructor.module.css';
import {ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {Button} from "@ya.praktikum/react-developer-burger-ui-components";
import {Modal} from '../modal/modal'
import {OrderDetails} from "../order-details/order-details";
import { v4 as uuidv4 } from 'uuid';
import {useDispatch, useSelector} from "react-redux";
import {sendOrder} from "../../services/actions/order";
import {ADD_INGREDIENT, REMOVE_BUN, REMOVE_INGREDIENT, SET_BUN} from "../../services/actions/burgerConstructor";
import {DraggableConstructorItem} from "../draggable-constructor-item/draggable-constructor-item";
import { useDrop } from "react-dnd";

export function BurgerConstructor() {
  const {orderNumber} = useSelector(state => state.order)

  const {selectedIngredients, bun, totalPrice} = useSelector(state => state.burgerConstructor);
  const [isModalOpen, setModalOpen] = useState(false);

  const dispatch = useDispatch();

  const onMakeOrderClick = () => {
    const order = { ingredients: [bun._id, ...selectedIngredients.map(el => el._id), bun._id] };
    dispatch(sendOrder(order));
    setModalOpen(true);
  }

  const deleteIngredient = (item, itemIndex) => {
    item.type === 'bun' ? dispatch({type: REMOVE_BUN}) :
      dispatch({type: REMOVE_INGREDIENT, payload: item, index: itemIndex})
  }

  const onIngredientDrop = (item) => {
    if (item.type !== 'bun') {
      dispatch({
        type: ADD_INGREDIENT,
        payload: {...item, dropId: uuidv4()},
      });
    } else if (item.type === 'bun' && !bun) {
      dispatch({
        type: SET_BUN,
        payload: item
      });
    } else {
      dispatch({
        type: REMOVE_BUN,
        payload: bun
      });
      dispatch({
        type: SET_BUN,
        payload: item
      });
    }
  }

  const [, dropTarget] = useDrop({
    accept: 'ingredient',
    drop(item) {
      onIngredientDrop(item)
    },
  })

  return (
    <section className={`${styles.constructor} pt-25`} ref={dropTarget}>
      {
        bun ?
        (<div className={`${styles.constructor__bun} mr-4`}>
          <ConstructorElement
            text={`${bun.name} (верх)`}
            thumbnail={bun.image}
            price={bun.price}
            isLocked={true}
            type={'top'}
            handleClose={() => deleteIngredient(bun)}
            />
        </div>) : (
          <div className={`${styles.constructor__bunContainer} mr-4`}>
            <p className={`text_type_main-medium`}>Перетащите булку</p>
          </div>
          )
      }
      {
        selectedIngredients.length > 0 ?
        (<div className={`${styles.constructor__container} mt-4 mb-4`}>
        {selectedIngredients.map((elem, index) => {

            return (
              <DraggableConstructorItem
                key={elem.dropId}
                deleteIngredient={deleteIngredient}
                index={index}
                elem={elem}/>
            )
          })}
        </div>) : (
            <div className={`${styles.constructor__ingredientContainer} mr-4 mt-4 mb-4`}>
              <p className={`text_type_main-medium`}>Перетащите ингредиент</p>
            </div>
          )
      }
      {
        bun ?
        (<div className={`${styles.constructor__bun} mr-4`}>
          <ConstructorElement
            text={`${bun.name} (низ)`}
            thumbnail={bun.image}
            price={bun.price}
            isLocked={true}
            type={'bottom'}
            handleClose={() => deleteIngredient(bun)}
          />
        </div>) : (
          <div className={`${styles.constructor__bunContainer} mr-4`}>
            <p className={`text_type_main-medium`}>Перетащите булку</p>
          </div>
          )}
      <div className={`${styles.constructor__info} mt-10`}>
        <span className={`text text_type_digits-medium mr-10`}>
          {totalPrice} <CurrencyIcon type={"primary"} />
        </span>
        <Button htmlType={"submit"} type={"primary"} size={"large"} onClick={onMakeOrderClick}>Оформить заказ</Button>
      </div>
      {isModalOpen && (
        <Modal title={''} setModalOpen={setModalOpen}>
          <OrderDetails orderId={orderNumber} />
        </Modal>
      )}
    </section>
  )
}