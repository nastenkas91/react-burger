import React, {useState} from "react";
import styles from './burger-constructor.module.css';
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {Button} from "@ya.praktikum/react-developer-burger-ui-components";
import {Modal} from '../modal/modal'
import {OrderDetails} from "../order-details/order-details";
import {ingredientSetPropType} from "../../utils/types";

export function BurgerConstructor({order}) {
  const selectedIngridients = order.filter(el => el.type !== 'bun');
  const selectedBun = order.find(el => el.type === 'bun');
  const total = selectedBun.price*2 + selectedIngridients.reduce((acc, el) => acc + el.price, 0);

  BurgerConstructor.propTypes = ingredientSetPropType;

  const [isModalOpen, setModalOpen] = useState(false);

  const openOrderDetails = () => {
    setModalOpen(true)
  }

  return (
    <section className={`${styles.constructor} pt-25`}>
      {
        selectedBun &&
        (<div className={`${styles.constructor__bun} mr-4`}>
          <ConstructorElement
            text={`${selectedBun.name} (верх)`}
            thumbnail={selectedBun.image}
            price={selectedBun.price}
            isLocked={true}
            type={'top'}
            />
        </div>)
      }
      {
        selectedIngridients &&
        (<div className={`${styles.constructor__container} mt-4 mb-4`}>
        {
          selectedIngridients.map(elem => {
            return (
              <div key={elem.orderId} className={`${styles.constructor__dragbox} mr-2`}>
                <DragIcon type={"primary"}/>
                <ConstructorElement text={elem.name} thumbnail={elem.image} price={elem.price}/>
              </div>
            )
          })
        }
      </div>)
      }
      {
        selectedBun &&
        (<div className={`${styles.constructor__bun} mr-4`}>
          <ConstructorElement
            text={`${selectedBun.name} (низ)`}
            thumbnail={selectedBun.image}
            price={selectedBun.price}
            isLocked={true}
            type={'bottom'}
          />
        </div>
        )}
      <div className={`${styles.constructor__info} mt-10`}>
        <span className={`text text_type_digits-medium mr-10`}>
          {total} <CurrencyIcon type={"primary"} />
        </span>
        <Button htmlType={"submit"} type={"primary"} size={"large"} onClick={openOrderDetails}>Оформить заказ</Button>
      </div>
      {isModalOpen && (
        <Modal setModalOpen={setModalOpen}>
          <OrderDetails />
        </Modal>
      )}
    </section>
  )
}