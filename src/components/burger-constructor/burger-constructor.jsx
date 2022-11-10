import React, {useState, useContext, useEffect} from "react";
import styles from './burger-constructor.module.css';
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {Button} from "@ya.praktikum/react-developer-burger-ui-components";
import {Modal} from '../modal/modal'
import { OrderContext} from "../../context/appContext";
import {OrderDetails} from "../order-details/order-details";
import { v4 as uuidv4 } from 'uuid';
import {makeOrder} from "../../utils/api";

export function BurgerConstructor() {
  const { orderState } = useContext(OrderContext);
  const [orderNumber, setOrderNumber] = useState(null)

  const [filling, setFilling] = useState(orderState.ingredients);
  const [bun, setBun] = useState(orderState.bun);
  const [totalPrice, setTotalPrice] = useState(orderState.total);

  useEffect(() => {
    setFilling(orderState.ingredients.filter(el => el.type !== 'bun'));
    setBun(orderState.bun);
    setTotalPrice(orderState.total);
  }, [orderState])

  const [isModalOpen, setModalOpen] = useState(false);

  const onMakeOrderClick = () => {
    const order = { ingredients: [bun._id, ...filling.map(el => el._id), bun._id] };
    makeOrder(order)
      .then(res => {
        setOrderNumber(res.order.number);
        setModalOpen(true);
      })
      .catch(err => console.log(err))
  }

  return (
    <section className={`${styles.constructor} pt-25`}>
      {
        bun &&
        (<div className={`${styles.constructor__bun} mr-4`}>
          <ConstructorElement
            text={`${bun.name} (верх)`}
            thumbnail={bun.image}
            price={bun.price}
            isLocked={true}
            type={'top'}
            />
        </div>)
      }
      {
        filling &&
        (<div className={`${styles.constructor__container} mt-4 mb-4`}>
        {
          filling.map((elem, index) => {
            const key = uuidv4();
            return (
              <div key={key} className={`${styles.constructor__dragbox} mr-2`}>
                <DragIcon type={"primary"}/>
                <ConstructorElement
                  text={elem.name}
                  thumbnail={elem.image}
                  price={elem.price}
                />
              </div>
            )
          })
        }
      </div>)
      }
      {
        bun &&
        (<div className={`${styles.constructor__bun} mr-4`}>
          <ConstructorElement
            text={`${bun.name} (низ)`}
            thumbnail={bun.image}
            price={bun.price}
            isLocked={true}
            type={'bottom'}
          />
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