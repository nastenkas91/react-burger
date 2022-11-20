import {URL_API, INGREDIENTS_END_POINT, ORDERS_END_POINT} from "./constants";

const checkResponse = (res) => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);

const request = (url, options) => {
  return fetch(url, options).then(checkResponse)
}

export function fetchIngredients() {
  return request(URL_API + INGREDIENTS_END_POINT, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
};

export function makeOrder(order) {
  return request(URL_API + ORDERS_END_POINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(order)
  })
};