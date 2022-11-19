import {combineReducers} from "redux";
import {ingredients} from "./ingredients";
import {burgerConstructor} from "./burgerConstructor";
import {order} from "./order";

export const rootReducer = combineReducers({
  ingredients,
  burgerConstructor,
  order
})