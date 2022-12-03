import {Button, EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './profile-form.module.css';
import {useState} from "react";
import {setProfileInfoForm} from "../../services/actionCreators/auth";
import {getUser, updateUserInfo} from "../../services/actions/auth";
import {useDispatch, useSelector} from "react-redux";

export const ProfileForm = () => {
  const dispatch = useDispatch();
  const {name, email, password} = useSelector(state => state.profileReducer.form)
  const [formIsValid, setFormIsValid] = useState(false);
  const [isModified, setIsModified] = useState(false)

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
    setIsModified(false);
  }

  const handleCancelClick = () => {
    dispatch(getUser());
    setIsModified(false);
  }

  return (
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
  )
}