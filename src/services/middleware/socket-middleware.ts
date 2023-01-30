import type { Middleware, MiddlewareAPI } from 'redux';
import type { AppDispatch, RootState } from '../../utils/types';
import { TOrderFeedActions } from "../actions/ws-order-feed";
import {TProfileFeedActions} from "../actions/ws-profile-feed";

type wsFeedActions =
  |TProfileFeedActions
  |TOrderFeedActions

export const socketMiddleware = (wsUrl: string, wsActions: any): Middleware => {
  return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
    let socket: WebSocket | null = null;

    return next => (action: wsFeedActions) => {
      const { dispatch } = store;
      const { type, payload } = action;

      if (type === wsActions.wsConnectionStart && socket === null) {
        // объект класса WebSocket
        if (payload !== undefined) {
          socket = new WebSocket(`${wsUrl}${payload}`);
        } else {
          socket = new WebSocket(`${wsUrl}`);
        }
      }

      if (type === wsActions.wsDisconnect && socket !== null) {
        socket.close()
      }

      if (socket) {

        // функция, которая вызывается при открытии сокета
        socket.onopen = event => {
          dispatch({ type: wsActions.wsConnectionSuccess, payload: event });
        };

        // функция, которая вызывается при ошибке соединения
        socket.onerror = event => {
          dispatch({ type: wsActions.wsConnectionError, payload: event });
        };

        // функция, которая вызывается при получения события от сервера
        socket.onmessage = event => {
          const { data } = event;
          dispatch({ type: wsActions.wsGetMessage, payload: JSON.parse(data) });
        };
        // функция, которая вызывается при закрытии соединения
        socket.onclose = event => {
          dispatch({ type: wsActions.wsConnectionClosed, payload: event });
          socket = null
        };

      }

      next(action);
    };
  }) as Middleware;
};