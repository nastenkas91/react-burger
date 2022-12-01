import {getCookie} from "./cookies";

export const isAuth = () => !!getCookie('accessToken')