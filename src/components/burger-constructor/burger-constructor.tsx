import React, {useState} from "react";
import styles from './burger-constructor.module.css';
import {ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {Button} from "@ya.praktikum/react-developer-burger-ui-components";
import {Modal} from '../modal/modal'
import {OrderDetails} from "../order-details/order-details";
import {useDispatch, useSelector} from "../../utils/hooks";
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
import {getUser} from "../../services/actions/auth";

export function BurgerConstructor() {
  const {isLoggedIn} = useSelector(state => state.loginReducer);
  const history = useHistory();
  const {selectedIngredients, bun, totalPrice} = useSelector((state: any) => state.burgerConstructor);
  const [isModalOpen, setModalOpen] = useState(false);

  const dispatch = useDispatch();

  const onMakeOrderClick = () => {
    dispatch(getUser());
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

  const deleteIngredient = (item: TDropIngredient) => {
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
    <section
      className={`${styles.constructor} pt-25`}
      ref={dropTarget}
      data-testid='drop-container'
    >
      {
        bun ?
        (<div data-testid='constructor-bun-1' className={`${styles.constructor__bun} mr-4`}>
          <ConstructorElement
            text={`${bun.name} (верх)`}
            thumbnail={bun.image}
            price={bun.price}
            isLocked={true}
            type={'top'}
            />
        </div>) : (
          <div className={`${styles.constructor__bunContainer} mr-4`}>
            <p className={`text_type_main-medium`}>Добавьте булку</p>
          </div>
          )
      }
      {
        selectedIngredients.length > 0 ?
        (<div data-testid='constructor-ingredient' className={`${styles.constructor__container} mt-4 mb-4`}>
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
              <p className={`text_type_main-medium`}>Добавьте ингредиент</p>
            </div>
          )
      }
      {
        bun ?
        (<div data-testid='constructor-bun-2' className={`${styles.constructor__bun} mr-4`}>
          <ConstructorElement
            text={`${bun.name} (низ)`}
            thumbnail={bun.image}
            price={bun.price}
            isLocked={true}
            type={'bottom'}
          />
        </div>) : (
          <div className={`${styles.constructor__bunContainer} mr-4`}>
            <p className={`text_type_main-medium`}>Добавьте булку</p>
          </div>
          )}
      <div className={`${styles.constructor__info} mt-10`}>
        <span className={`text text_type_digits-medium mr-10`}>
          {totalPrice} <CurrencyIcon type={"primary"} />
        </span>
        <Button
          data-testid="send-order-button"
          disabled={!bun}
          htmlType={"submit"}
          type={"primary"}
          size={"large"}
          onClick={onMakeOrderClick}
        >
          Оформить заказ
        </Button>
      </div>
      {isModalOpen && (
        <Modal title={''} closeModal={closeModal}>
          <OrderDetails />
        </Modal>
      )}
    </section>
  )
}