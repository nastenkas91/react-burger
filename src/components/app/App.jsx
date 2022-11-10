import {useEffect, useReducer, useState} from "react";
import {AppHeader} from "../app-header/app-header";
import {ConstructorPage} from "../constructor-page/constructor-page";
import {IngredientsContext, OrderContext} from "../../context/appContext";
import {getIngredients} from "../../utils/api";

export function App() {
  const [ingredients, setIngredients] = useState([]);

  const orderInitialState = {bun: null, ingredients: [], total: 0};
  const [orderState, orderDispatcher] = useReducer(constructorReducer, orderInitialState, undefined)

  function constructorReducer(state, action) {
    const removeIngredient = (arr, item) => {
      return arr.filter(el => el._id !== item._id)
    }

    switch (action.type) {
      case 'add':
        //замена булки
        if (state.bun && action.payload.type === 'bun') {
          const previousBunPrice = state.bun.price * 2;
          const newBunPrice = action.payload.price * 2
          return {
            bun: action.payload,
            ingredients: state.ingredients,
            total: state.total + newBunPrice - previousBunPrice
          }
        } else if (!state.bun && action.payload.type === 'bun') {
          return {
            bun: action.payload,
            ingredients: state.ingredients,
            total: state.total + action.payload.price * 2
          }
        } else {
            return {
              bun: state.bun,
              ingredients: [...state.ingredients, action.payload],
              total: state.total + action.payload.price
            }
          }
      case 'remove':
        const newIngredients = removeIngredient(state.ingredients, action.payload);
        return {
          ingredients: newIngredients,
          total: state.total - action.payload.price
        };
      default:
        throw new Error(`Wrong type of action: ${action.type}`);
    }
  }

  useEffect(() => {
    getIngredients()
      .then(res => {
        setIngredients(res.data);
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <AppHeader />
      <IngredientsContext.Provider value={{ ingredients }}>
          <OrderContext.Provider value={{ orderState, orderDispatcher }}>
          <ConstructorPage />
        </OrderContext.Provider>
      </IngredientsContext.Provider>
    </>
  );
}

