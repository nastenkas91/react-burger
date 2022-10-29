import React from "react";
import styles from './app-header.module.css'
import {Logo} from "@ya.praktikum/react-developer-burger-ui-components";
import {BurgerIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {ListIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {ProfileIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {HeaderLink} from "../header-link/header-link";

export function AppHeader() {
  return (
    <header className={`${styles.header} p-4`}>
      <div className={`${styles.header__left}`}>
        <HeaderLink active={true}>
          <BurgerIcon type={"primary"} />
          Конструктор
        </HeaderLink>
        <HeaderLink active={false}>
          <ListIcon type={"secondary"} />
          Лента заказов
        </HeaderLink>
      </div>
      <div className={`${styles.header__logo}`}>
        <Logo />
      </div>
      <div className={`${styles.header__right}`}>
        <HeaderLink active={false}>
          <ProfileIcon type={"secondary"} />
          Личный кабинет
        </HeaderLink>
      </div>

    </header>
  )
}