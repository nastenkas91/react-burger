import React, {useState} from "react";
import styles from './burger-ingridients.module.css';
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import {IngridientsCategory} from "../ingridients-category/ingridients-category";
import {IngredientsItem} from "../ingridients-item/ingridients-item";
import {Modal} from "../modal/modal";
import {IngredientDetails} from "../ingredient-details/ingredient-details";
import {ingredientSetPropType} from "../../utils/types";

export function BurgerIngredients({ingredients}) {
  const [current, setCurrent] = useState('Булки');
  const [isModalOpen, setModalOpen] = useState(false);
  const [ingredientInfo, setIngredientInfo] = useState({});

  BurgerIngredients.propTypes = ingredientSetPropType;

  const filterIngredients = (array, type) => array.filter(item => item.type === type);
  const bun = filterIngredients(ingredients, 'bun');
  const sauce = filterIngredients(ingredients, 'sauce');
  const main = filterIngredients(ingredients, 'main');

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
            bun.map(el => (
                <IngredientsItem
                  key={el._id}
                  item={el}
                  setModalOpen={setModalOpen}
                  setIngredientInfo={setIngredientInfo}
                />
              )
            )}
        </IngridientsCategory>
        </li>
        <li className={`${styles.ingridients__navItem}`}>
          <IngridientsCategory title={'Соусы'}>
          {
            sauce.map(el => (
                <IngredientsItem
                  key={el._id}
                  item={el}
                  setModalOpen={setModalOpen}
                  setIngredientInfo={setIngredientInfo}
                />
              )
            )}
        </IngridientsCategory>
        </li>
        <li className={`${styles.ingridients__navItem}`}>
          <IngridientsCategory title={'Начинки'}>
          {
            main.map(el => (
              <IngredientsItem
                key={el._id}
                item={el}
                setModalOpen={setModalOpen}
                setIngredientInfo={setIngredientInfo}
              />
            )
          )}
        </IngridientsCategory>
        </li>
      </ul>
      {isModalOpen && (
        <Modal setModalOpen={setModalOpen} title={'Детали ингредиента'}>
          <IngredientDetails item={ingredientInfo} />
        </Modal>
      )}

    </section>
  )
}