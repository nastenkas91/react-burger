import {TDropIngredient, TIngredient} from "../../utils/types";

export const ADD_INGREDIENT: 'ADD_INGREDIENT' = 'ADD_INGREDIENT';
export const REMOVE_INGREDIENT: 'REMOVE_INGREDIENT' = 'REMOVE_INGREDIENT';
export const SET_BUN: 'SET_BUN' = 'SET_BUN';
export const REMOVE_BUN: 'REMOVE_BUN' = 'REMOVE_BUN';
export const MOVE_INGREDIENT: 'MOVE_INGREDIENT' = 'MOVE_INGREDIENT';
export const CLEAR_CONSTRUCTOR: 'CLEAR_CONSTRUCTOR' = 'CLEAR_CONSTRUCTOR';

//action types
export interface IAddIngredient {
  readonly type: typeof ADD_INGREDIENT,
  readonly payload: TDropIngredient
};

export interface IRemoveIngredient {
  readonly type: typeof REMOVE_INGREDIENT,
  payload: TDropIngredient
};

export interface IMoveIngredient {
  readonly type: typeof MOVE_INGREDIENT,
  payload: {
    dragIndex: number,
    hoverIndex: number
  }
};

export interface ISetBun {
  readonly type: typeof SET_BUN,
  readonly payload: TIngredient,
};

export interface IRemoveBun {
  readonly type: typeof REMOVE_BUN,
  readonly payload: TIngredient,
};

export interface IClearConstructor {
  readonly type: typeof CLEAR_CONSTRUCTOR,
};

export type TBurgerConstructorActions =
  | IAddIngredient
  | IRemoveIngredient
  | IMoveIngredient
  | ISetBun
  | IRemoveBun
  | IClearConstructor;
