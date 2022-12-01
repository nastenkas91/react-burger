import styles from './profile.module.css'
import {NavLink, useHistory} from "react-router-dom";
import {Button, EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {getCookie} from "../../utils/cookies";
import {useDispatch, useSelector} from "react-redux";
import {getUser, logout, updateUserInfo} from "../../services/actions/auth";
import {useState} from "react";
import {resetProfileInfo, setProfileInfoForm} from "../../services/actionCreators/auth";
import {useEffect} from "react";

export const Profile = () => {
  const [isModified, setIsModified] = useState(false)
  const dispatch = useDispatch();
  const history = useHistory();
  const {name, email, password} = useSelector(state => state.profileReducer.form)
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    dispatch(getUser())
  }, [])

  function handleFormValidation(e) {
    setFormIsValid(e.target.closest('.form').checkValidity());
  }
  const handleFormChange = (e) => {
    dispatch(setProfileInfoForm(e.target.name, e.target.value));
    handleFormValidation(e);
    setIsModified(true);
  }
  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUserInfo({
        "email": email,
        "password": password,
        "name": name
      }
    ));
  }

  const handleCancelClick = () => {
    dispatch(resetProfileInfo());
    setIsModified(false);
  }

  const handleLogout = () => {
    const token = getCookie('refreshToken');
    dispatch(logout({
      "token": token
    }));
    history.replace("/login")
  }

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
              to={'/login'}
              exact={true}
              className={`${styles.profile__link} text text_type_main-medium`}
              activeClassName={`${styles.profile__link_active}`}
              onClick={handleLogout}
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
        <form className={`${styles.profile__form} form`} onSubmit={handleFormSubmit}>
          <Input
            name={'name'}
            value={name}
            onChange={handleFormChange}
            placeholder={'Имя'}
            icon={'EditIcon'}
          />
          <EmailInput
            name={'email'}
            value={email}
            onChange={handleFormChange}
            placeholder={'Логин'}
            icon={'EditIcon'}
          />
          <PasswordInput
            name={'password'}
            value={password}
            onChange={handleFormChange}
            placeholder={'Пароль'}
            icon={'EditIcon'}
          />
          {
            isModified &&
            <div className={`${styles.profile__changeButtons} `}>
              <Button htmlType={"button"} type={'secondary'} onClick={handleCancelClick}>Отмена</Button>
              <Button disabled={!formIsValid} htmlType={'submit'} type={'primary'} onSubmit={handleFormSubmit}>Сохранить</Button>
            </div>
          }
        </form>
      </div>
    </section>
  )
}