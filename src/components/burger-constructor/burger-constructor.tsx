import React, {useState} from "react";
import styles from './burger-constructor.module.css';
import {ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {Button} from "@ya.praktikum/react-developer-burger-ui-components";
import {Modal} from '../modal/modal'
import {OrderDetails} from "../order-details/order-details";
import {useDispatch, useSelector} from "react-redux";
import {sendOrder} from "../../services/actions/order";
import {DraggableConstructorItem} from "../draggable-constructor-item/draggable-constructor-item";
import { useDrop } from "react-dnd";
import {
  addIngredient,
  clearConstructor,
  removeBun,
  removeIngredient, setBun
} from "../../services/actionCreators/burgerConstructor";
import {clearOrderNumber} from "../../services/actionCreators/order";
import {useHistory} from "react-router-dom";
import {TDropIngredient, TIngredient} from "../../utils/types";
import {removeCurrentIngredient} from "../../services/actionCreators/ingredients";

export function BurgerConstructor() {
  const {isLoggedIn} = useSelector((state: any) => state.loginReducer);
  const history = useHistory();
  const {selectedIngredients, bun, totalPrice} = useSelector((state: any) => state.burgerConstructor);
  const [isModalOpen, setModalOpen] = useState(false);

  const dispatch = useDispatch<any>();

  const onMakeOrderClick = () => {
    if (isLoggedIn) {
      const order = {ingredients: [bun._id, ...selectedIngredients.map((el: TIngredient) => el._id), bun._id]};
      dispatch(clearOrderNumber());
      dispatch(sendOrder(order));
      dispatch(clearConstructor());
      setModalOpen(true);
    } else {
      history.push('/login')
    }
  }

  const deleteIngredient = (item: TIngredient) => {
    dispatch(removeIngredient(item))
  }

  const onIngredientDrop = (item: TIngredient) => {
    if (item.type !== 'bun') {
      dispatch(addIngredient(item));
    } else if (item.type === 'bun' && !bun) {
      dispatch(setBun(item));
    } else {
      dispatch(removeBun(bun));
      dispatch(setBun(item));
    }
  }

  const closeModal = () => {
    setModalOpen(false);
    dispatch(removeCurrentIngredient());
  }

  const [, dropTarget] = useDrop({
    accept: 'ingredient',
    drop(item: TIngredient) {
      onIngredientDrop(item)
    },
  })

  return (
    <section className={`${styles.constructor} pt-25`} ref={dropTarget}>
      {
        bun ?
        (<div className={`${styles.constructor__bun} mr-4`}>
          <ConstructorElement
            text={`${bun.name} (????????)`}
            thumbnail={bun.image}
            price={bun.price}
            isLocked={true}
            type={'top'}
            />
        </div>) : (
          <div className={`${styles.constructor__bunContainer} mr-4`}>
            <p className={`text_type_main-medium`}>???????????????? ??????????</p>
          </div>
          )
      }
      {
        selectedIngredients.length > 0 ?
        (<div className={`${styles.constructor__container} mt-4 mb-4`}>
        {selectedIngredients.map((elem: TDropIngredient, index: number) => {
            return (
              <DraggableConstructorItem
                key={elem.dropId}
                id={elem.dropId}
                index={index}
                elem={elem}
                deleteIngredient={deleteIngredient}
              />
            )
          })}
        </div>) : (
            <div className={`${styles.constructor__ingredientContainer} mr-4 mt-4 mb-4`}>
              <p className={`text_type_main-medium`}>???????????????? ????????????????????</p>
            </div>
          )
      }
      {
        bun ?
        (<div className={`${styles.constructor__bun} mr-4`}>
          <ConstructorElement
            text={`${bun.name} (??????)`}
            thumbnail={bun.image}
            price={bun.price}
            isLocked={true}
            type={'bottom'}
          />
        </div>) : (
          <div className={`${styles.constructor__bunContainer} mr-4`}>
            <p className={`text_type_main-medium`}>???????????????? ??????????</p>
          </div>
          )}
      <div className={`${styles.constructor__info} mt-10`}>
        <span className={`text text_type_digits-medium mr-10`}>
          {totalPrice} <CurrencyIcon type={"primary"} />
        </span>
        <Button disabled={!bun} htmlType={"submit"} type={"primary"} size={"large"} onClick={onMakeOrderClick}>???????????????? ??????????</Button>
      </div>
      {isModalOpen && (
        <Modal title={''} closeModal={closeModal}>
          <OrderDetails />
        </Modal>
      )}
    </section>
  )
}