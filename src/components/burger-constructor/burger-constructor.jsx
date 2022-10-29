import React from "react";
import styles from './burger-constructor.module.css';
import {ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";
import {ConstructorDragElement} from "../constructor-drag-element/constructor-drag-element";
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {Button} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';

export function BurgerConstructor(props) {
  const selectedIngridients = props.order.filter(el => el.type !== 'bun');
  const selectedBun = props.order.find(el => el.type === 'bun');
  const total = selectedBun.price*2 + selectedIngridients.reduce((acc, el) => acc + el.price, 0);

  const burgerConstructorPropTypes = PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    image:  PropTypes.string.isRequired,
    price:  PropTypes.number.isRequired,
  })
  BurgerConstructor.propTypes = {
    order: PropTypes.arrayOf(burgerConstructorPropTypes).isRequired,
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
              <ConstructorDragElement key={elem.orderId} {...elem} />
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
        <Button htmlType={"submit"} type={"primary"} size={"large"}>Оформить заказ</Button>
      </div>
    </section>
  )
}