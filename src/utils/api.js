import {INGREDIENTS_END_POINT, URL_API} from "./constants";

export function getIngredients() {
  return fetch(URL_API + INGREDIENTS_END_POINT, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
}