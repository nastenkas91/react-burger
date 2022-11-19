import {URL_API, INGREDIENTS_END_POINT, ORDERS_END_POINT} from "./constants";

const CheckResponse = (res) => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);

export function fetchIngredients() {
  return fetch(URL_API + INGREDIENTS_END_POINT, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => CheckResponse(res))
};

export function makeOrder(order) {
  return fetch(URL_API + ORDERS_END_POINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(order)
  })
    .then(res => CheckResponse(res))
};