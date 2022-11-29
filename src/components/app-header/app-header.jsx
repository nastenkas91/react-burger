import React from "react";
import styles from './app-header.module.css'
import {Logo} from "@ya.praktikum/react-developer-burger-ui-components";
import {BurgerIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {ListIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {ProfileIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {NavLink} from "react-router-dom";

export function AppHeader() {
  return (
    <header className={`${styles.header} p-4`}>
      <div className={`${styles.header__container}`}>
        <div className={`${styles.header__left}`}>
          <NavLink
            to={'/'}
            exact={true}
            className={`${styles.link} text text_type_main-default`}
            activeClassName={`${styles.link_active}`}
          >
            <BurgerIcon type={"secondary"} />
            Конструктор
          </NavLink>

          <NavLink
            to={'/orders'}
            exact={true}
            className={`${styles.link} text text_type_main-default`}
            activeClassName={`${styles.link_active}`}
          >
            <ListIcon type={"secondary"} />
            Лента заказов
          </NavLink>
        </div>

        <div className={`${styles.header__logo}`}>
          <Logo />
        </div>
        <div className={`${styles.header__right}`}>
          <NavLink
            to={'/profile'}
            exact={true}
            className={`${styles.link} text text_type_main-default`}
            activeClassName={`${styles.link_active}`}
          >
            <ProfileIcon type={"secondary"} />
            Личный кабинет
          </NavLink>
        </div>
      </div>
    </header>
  )
}