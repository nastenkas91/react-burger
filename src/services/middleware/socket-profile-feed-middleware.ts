import type { Middleware, MiddlewareAPI } from 'redux';

import type { TApplicationActions, AppDispatch, RootState } from '../../utils/types';
import {WEB_SOCKET_ORDERS} from "../../utils/constants";
import {getCookie} from "../../utils/cookies";

export const socketProfileFeedMiddleware = (): Middleware => {
  return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
    let socket: WebSocket | null = null;
    //const accessToken = getCookie('accessToken');
    return next => (action: TApplicationActions) => {
      const { dispatch } = store;
      const { type } = action;

      if (type === 'WS_PROFILE_FEED_CONNECTION_START') {
        // объект класса WebSocket
       socket = new WebSocket(`${WEB_SOCKET_ORDERS}?token=${getCookie('accessToken')}`);
      }

      if (type === 'WS_PROFILE_FEED_DISCONNECT') {
        socket?.close()
      }

      if (socket) {

        // функция, которая вызывается при открытии сокета
        socket.onopen = event => {
          dispatch({ type: 'WS_PROFILE_FEED_CONNECTION_SUCCESS', payload: event });
        };

        // функция, которая вызывается при ошибке соединения
        socket.onerror = event => {
          dispatch({ type: 'WS_PROFILE_FEED_CONNECTION_ERROR', payload: event });
        };

        // функция, которая вызывается при получения события от сервера
        socket.onmessage = event => {
          const { data } = event;
          dispatch({ type: 'WS_PROFILE_FEED_GET_MESSAGE', payload: JSON.parse(data) });
        };
        // функция, которая вызывается при закрытии соединения
        socket.onclose = event => {
          dispatch({ type: 'WS_PROFILE_FEED_CONNECTION_CLOSED', payload: event });
        };

      }

      next(action);
    };
  }) as Middleware;
};