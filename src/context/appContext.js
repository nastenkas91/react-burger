import {createContext} from "react";

const defaultIngredients = {ingredients: []};
export const IngredientsContext = createContext(defaultIngredients);
export const OrderContext = createContext({bun: null, ingredients: [], total: 0});
