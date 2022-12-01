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
import {getCookie, setCookie} from "./cookies";

const checkResponse = (res) => res.ok ? res.json() : res.json().then(err => Promise.reject(err));

const request = (url, options) => {
  return fetch(url, options).then(checkResponse)
}

export const fetchWithRefresh = async (url, options) => {
  try {
    const res = await fetch(url, options);
    return await checkResponse(res);
  } catch (err) {
    if (err.message === 'jwt expired') {
      const refreshedData = await getNewTokenRequest();
      if (!refreshedData.success) {
        Promise.reject(refreshedData)
      }
      setCookie('refreshToken', refreshedData.refreshToken);
      setCookie('accessToken', refreshedData.accessToken);
      options.headers.authorization = refreshedData.accessToken;
      const res = await fetch(url, options);
      return await checkResponse(res);
    } else {
      return Promise.reject(err)
    }
  }
};

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
};

export function setNewPasswordRequest(req) {
  return request(URL_API + NEW_PASSWORD, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(req)
  })
};

export function loginRequest(req) {
  return request(URL_API + LOGIN_END_POINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(req)
  })
};

export function registerRequest(req) {
  return request(URL_API + REGISTRATION_END_POINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(req)
  })
};

export function logoutRequest(req) {
  return request(URL_API + LOGOUT_END_POINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(req)
  })
};

export function getNewTokenRequest() {
  return request(URL_API + TOKEN_END_POINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "token": `${getCookie('refreshToken')}`
    } )
  })
};

export function getUserInfoRequest() {
  return fetchWithRefresh(URL_API + USER_END_POINT, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'authorization': `Bearer ${getCookie('accessToken')}`
    },
  })
};

export function updateUserInfoRequest(req) {
  return fetchWithRefresh(URL_API + USER_END_POINT, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'authorization': `Bearer ${getCookie('accessToken')}`
    },
    body: JSON.stringify(req)
  })
};





