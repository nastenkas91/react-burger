import {
  URL_API,
  INGREDIENTS_END_POINT,
  ORDERS_END_POINT,
  PASSWORD_RESET,
  NEW_PASSWORD,
  LOGIN_END_POINT,
  REGISTRATION_END_POINT,
  LOGOUT_END_POINT,
  TOKEN_END_POINT,
  USER_END_POINT
} from "./constants";

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

export function resetPasswordRequest(email) {
  return request(URL_API + PASSWORD_RESET, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(email)
  })
}

export function setNewPasswordRequest(req) {
  return request(URL_API + NEW_PASSWORD, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(req)
  })
}

export function loginRequest(req) {
  return request(URL_API + LOGIN_END_POINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(req)
  })
}

export function registerRequest(req) {
  return request(URL_API + REGISTRATION_END_POINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(req)
  })
}

export function logoutRequest(req) {
  return request(URL_API + LOGOUT_END_POINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(req)
  })
}

export function getNewTokenRequest(req) {
  return request(URL_API + TOKEN_END_POINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(req)
  })
}

export function getUserInfoRequest(token) {
  return request(URL_API + USER_END_POINT, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'authorization': `Bearer ${token}`
    },
  })
}

export function updateUserInfoRequest(token, req) {
  return request(URL_API + USER_END_POINT, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'authorization': token
    },
    body: JSON.stringify(req)
  })
}



