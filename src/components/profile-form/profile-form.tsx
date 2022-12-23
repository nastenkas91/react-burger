import {Button, EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './profile-form.module.css';
import {SyntheticEvent, useState} from "react";
import {setProfileInfoForm} from "../../services/actionCreators/auth";
import {getUser, updateUserInfo} from "../../services/actions/auth";
import {useDispatch, useSelector} from "react-redux";
import {Spinner} from "../spinner/spinner";
import {TInputEvent} from "../../utils/types";

export const ProfileForm = () => {
  const dispatch = useDispatch<any>();
  const {name, email, password} = useSelector((state: any) => state.profileReducer.form)
  const {sendRequest, error} = useSelector((state: any) => state.profileReducer)
  const [formIsValid, setFormIsValid] = useState(false);
  const [isModified, setIsModified] = useState(false)

  function handleFormValidation(e: TInputEvent) {
    // @ts-ignore
    setFormIsValid(e.target.closest('.form')!.checkValidity() && password);
  }
  const handleFormChange = (e: TInputEvent) => {
    dispatch(setProfileInfoForm(e.target.name, e.target.value));
    handleFormValidation(e);
    setIsModified(true);
  }
  const handleFormSubmit = (e: SyntheticEvent) => {
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
        //icon={'EditIcon'}
      />
      <PasswordInput
        name={'password'}
        value={password}
        onChange={handleFormChange}
        placeholder={'Пароль'}
        icon={'EditIcon'}
      />
      {
        error && <p className={`${styles.text} text text_type_main-default text_color_error mb-4`}>{error}</p>
      }
      {
        isModified &&
        <div className={`${styles.profile__changeButtons} `}>
          <Button htmlType={"button"} type={'secondary'} onClick={handleCancelClick}>Отмена</Button>
          <Button disabled={!formIsValid} htmlType={'submit'} type={'primary'} onSubmit={handleFormSubmit}>Сохранить</Button>
        </div>
      }
      {
        sendRequest &&
        <Spinner />
      }
    </form>
  )
}