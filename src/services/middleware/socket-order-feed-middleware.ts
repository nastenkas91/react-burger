import type { Middleware, MiddlewareAPI } from 'redux';

import type { AppDispatch, RootState } from '../../utils/types';
import {WEB_SOCKET_ORDERS} from "../../utils/constants";
import {TOrderFeedActions} from "../actions/ws-order-feed";

export const socketOrderFeedMiddleware = (): Middleware => {
  return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
    let socket: WebSocket | null = null;

    return next => (action: TOrderFeedActions) => {
      const { dispatch } = store;
      const { type } = action;

      if (type === 'WS_ORDER_FEED_CONNECTION_START') {
        // объект класса WebSocket
        socket = new WebSocket(`${WEB_SOCKET_ORDERS}/all`);
      }
      if (socket) {

        // функция, которая вызывается при открытии сокета
        socket.onopen = event => {
          dispatch({ type: 'WS_ORDER_FEED_CONNECTION_SUCCESS', payload: event });
        };

        // функция, которая вызывается при ошибке соединения
        socket.onerror = event => {
          dispatch({ type: 'WS_ORDER_FEED_CONNECTION_ERROR', payload: event });
        };

        // функция, которая вызывается при получения события от сервера
        socket.onmessage = event => {
          const { data } = event;
          dispatch({ type: 'WS_ORDER_FEED_GET_MESSAGE', payload: JSON.parse(data) });
        };
        // функция, которая вызывается при закрытии соединения
        socket.onclose = event => {
          dispatch({ type: 'WS_ORDER_FEED_CONNECTION_CLOSED', payload: event });
        };

      }

      next(action);
    };
  }) as Middleware;
};