import styles from './profile.module.css'
import {NavLink} from "react-router-dom";
import {Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {useInputChange} from "../../utils/hooks";

export const Profile = () => {
  const {values, handleChange} = useInputChange({})

  return (
    <section className={`${styles.profile}`}>
      <div className={`${styles.profile__container}`}>
        <div className={`${styles.profile__leftWrap}`}>
          <ul className={`${styles.profile__nav}`}>
          <li className={`${styles.profile__listItem}`}>
            <NavLink
              to={'/profile'}
              exact={true}
              className={`${styles.profile__link} text text_type_main-medium`}
              activeClassName={`${styles.profile__link_active}`}
            >
              Профиль
            </NavLink>
          </li>
          <li className={`${styles.profile__listItem}`}>
            <NavLink
              to={'/orders'}
              exact={true}
              className={`${styles.profile__link} text text_type_main-medium`}
              activeClassName={`${styles.profile__link_active}`}
            >
              История заказов
            </NavLink>
          </li>
          <li className={`${styles.profile__listItem}`}>
            <NavLink
              to={'/'}
              exact={true}
              className={`${styles.profile__link} text text_type_main-medium`}
              activeClassName={`${styles.profile__link_active}`}
            >
              Выход
            </NavLink>
          </li>
        </ul>
          <p className={`${styles.profile__text} text text_type_main-default text_color_inactive`}>
            В этом разделе вы можете
            изменить свои персональные данные
          </p>
        </div>
        <form className={`${styles.profile__form} form`}>
          <Input
            name={'name'}
            value={values['name'] || ''}
            onChange={handleChange}
            placeholder={'Имя'}
            icon={'EditIcon'}
          />
          <Input
            name={'login'}
            value={values['login'] || ''}
            onChange={handleChange}
            placeholder={'Логин'}
            icon={'EditIcon'}
            //onIconClick={}
          />
          <PasswordInput
            name={'password'}
            value={values['password'] || ''}
            onChange={handleChange}
            placeholder={'Пароль'}
            icon={'EditIcon'}
          />
        </form>
      </div>
    </section>
  )
}