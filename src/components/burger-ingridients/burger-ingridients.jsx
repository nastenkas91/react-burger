import React from "react";
import styles from './burger-ingridients.module.css';
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import {IngridientsCategory} from "../ingridients-category/ingridients-category";
import {IngridientsItem} from "../ingridients-item/ingridients-item";
import PropTypes from "prop-types";

export function BurgerIngredients(props) {
  const [current, setCurrent] = React.useState('Булки')

  const burgerIngredientsPropTypes = PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    image:  PropTypes.string.isRequired,
    price:  PropTypes.number.isRequired,
  })
  BurgerIngredients.propTypes = {
    ingridients: PropTypes.arrayOf(burgerIngredientsPropTypes).isRequired,
  }

  return (
    <section className={`${styles.ingridients}`}>

      <h1 className='text text_type_main-large mt-10'>Соберите бургер</h1>
      <ul className={`${styles.ingridients__nav} mt-5 mb-10`}>
        <li className={`${styles.ingridients__category}`}>
          <Tab value="Булки" active={current === 'Булки'} onClick={setCurrent}>
            Булки
          </Tab>
        </li>
        <li className={`${styles.ingridients__category}`}>
          <Tab value="Соусы" active={current === 'Соусы'} onClick={setCurrent}>
            Соусы
          </Tab>
        </li>
        <li className={`${styles.ingridients__category}`}>
          <Tab value="Начинки" active={current === 'Начинки'} onClick={setCurrent}>
            Начинки
          </Tab>
        </li>
      </ul>

      <ul className={`${styles.ingridients__container}`}>
        <li className={`${styles.ingridients__navItem}`}>
          <IngridientsCategory title={'Булки'}>
          {
            props.ingridients.filter(el => el.type === "bun").map(el => {
              return <IngridientsItem key={el._id} {...el} />
            })
          }
        </IngridientsCategory>
        </li>
        <li className={`${styles.ingridients__navItem}`}>
          <IngridientsCategory title={'Соусы'}>
          {
            props.ingridients.filter(el => el.type === "sauce").map(el => {
              return <IngridientsItem key={el._id} {...el} />
            })
          }
        </IngridientsCategory>
        </li>
        <li className={`${styles.ingridients__navItem}`}>
          <IngridientsCategory title={'Начинки'}>
          {
            props.ingridients.filter(el => el.type === "main").map(el => {
              return <IngridientsItem key={el._id} {...el} />
            })
          }
        </IngridientsCategory>
        </li>
      </ul>

    </section>
  )
}