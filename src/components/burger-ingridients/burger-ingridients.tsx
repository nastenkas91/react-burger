import React, {useEffect, useMemo, useRef, useState} from "react";
import styles from './burger-ingridients.module.css';
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import {IngridientsCategory} from "../ingridients-category/ingridients-category";
import {IngredientsItem} from "../ingridients-item/ingridients-item";
import {useDispatch, useSelector} from "../../utils/hooks";
import {Counter, TIngredient} from "../../utils/types";
import {removeCurrentIngredient} from "../../services/actionCreators/ingredients";

export function BurgerIngredients() {
  const dispatch = useDispatch();
  const {ingredients} = useSelector(state => state.ingredients);
  const {bun, selectedIngredients} = useSelector(state => state.burgerConstructor);

  const [current, setCurrent] = useState('buns');
  const [isModalOpen, setModalOpen] = useState(false);
  const [counter, setCounter] = useState<Counter>({});

  const filterIngredients = (array: TIngredient[], type: string) => array.filter(item => item.type === type);
  const buns = useMemo(() => {
    return filterIngredients(ingredients, 'bun');
  }, [ingredients])

  const sauces = useMemo(() => {
    return filterIngredients(ingredients, 'sauce');
  }, [ingredients])

  const main = useMemo(() => {
    return filterIngredients(ingredients, 'main');
  }, [ingredients])

  function countIngredients() {
    const counter = selectedIngredients.reduce((acc: Counter, item: TIngredient): Counter => {
      acc[item._id] = acc[item._id] + 1 || 1;
      return acc
    }, {});
    if (bun) {
      counter[bun._id] = 2;
    };
    setCounter(counter);
  }

  const closeModal = () => {
    setModalOpen(false);
    dispatch(removeCurrentIngredient());
    localStorage.removeItem('currentIngredient');
  }

  useEffect(() => {
    countIngredients();
  }, [bun, selectedIngredients])

  const bunRef = useRef<HTMLLIElement>(null);
  const sauceRef = useRef<HTMLLIElement>(null);
  const mainRef = useRef<HTMLLIElement>(null);

  const changeTub = () => {
    const rootTop = document.querySelector('.scrollArea')!.getBoundingClientRect().top;
    const bunSectionTop = document.getElementById('buns')!.getBoundingClientRect().top;
    const sauceSectionTop = document.getElementById('sauces')!.getBoundingClientRect().top;
    const mainSectionTop = document.getElementById('mains')!.getBoundingClientRect().top;
    Math.abs(rootTop - bunSectionTop) < Math.abs(rootTop - sauceSectionTop) ?
      setCurrent('buns') :
      Math.abs(rootTop - sauceSectionTop) < Math.abs(rootTop - mainSectionTop) ?
        setCurrent('sauces') :
        setCurrent('mains')
  }

  return (
    <section className={`${styles.ingridients}`}>

      <h1 className='text text_type_main-large mt-10'>Соберите бургер</h1>
      <ul className={`${styles.ingridients__nav} mt-5 mb-10`} id={'scrollArea'}>
        <li className={`${styles.ingridients__category}`}>
          <Tab value="Булки" active={current === 'buns'} onClick={() => bunRef.current!.scrollIntoView({behavior: "smooth"})}>
            Булки
          </Tab>
        </li>
        <li className={`${styles.ingridients__category}`}>
          <Tab value="Соусы" active={current === 'sauces'} onClick={() => sauceRef.current!.scrollIntoView({behavior: "smooth"})}>
            Соусы
          </Tab>
        </li>
        <li className={`${styles.ingridients__category}`}>
          <Tab value="Начинки" active={current === 'mains'} onClick={() => mainRef.current!.scrollIntoView({behavior: "smooth"})}>
            Начинки
          </Tab>
        </li>
      </ul>

      <ul className={`${styles.ingridients__container} scrollArea`} onScroll={changeTub} >
        <li className={`${styles.ingridients__navItem} nav-item bunSection`} ref={bunRef} id={'buns'}>
          <IngridientsCategory title={'Булки'}>
          {
            buns.map(el => (
                <IngredientsItem
                  key={el._id}
                  item={el}
                  count={counter[el._id]}
                />
              )
            )}
        </IngridientsCategory>
        </li>
        <li className={`${styles.ingridients__navItem} nav-item sauceSection`} ref={sauceRef} id={'sauces'}>
          <IngridientsCategory title={'Соусы'}>
          {
            sauces.map(el => (
                <IngredientsItem
                  key={el._id}
                  item={el}
                  count={counter[el._id]}
                />
              )
            )}
        </IngridientsCategory>
        </li>
        <li className={`${styles.ingridients__navItem} nav-item mainSection`} ref={mainRef} id={'mains'}>
          <IngridientsCategory title={'Начинки'}>
          {
            main.map(el => (
              <IngredientsItem
                key={el._id}
                item={el}
                count={counter[el._id]}
              />
            )
          )}
        </IngridientsCategory>
        </li>
      </ul>
      {/*{isModalOpen && (*/}
      {/*  <Modal closeModal={closeModal} title={'Детали ингредиента'}>*/}
      {/*    <IngredientDetails />*/}
      {/*  </Modal>*/}
      {/*)}*/}

    </section>
  )
}