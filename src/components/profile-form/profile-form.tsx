import {Button, EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './profile-form.module.css';
import {ChangeEvent, FC, SyntheticEvent, useState} from "react";
import {setProfileInfoForm} from "../../services/actionCreators/auth";
import {getUser, updateUserInfo} from "../../services/actions/auth";
import {useDispatch, useSelector} from '../../utils/hooks';
import {Spinner} from "../spinner/spinner";

export const ProfileForm: FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const {name, email, password} = useSelector(state => state.profileReducer.form)
  const {sendRequest, error} = useSelector(state => state.profileReducer)
  const [formIsValid, setFormIsValid] = useState(false);
  const [isModified, setIsModified] = useState(false)

  function handleFormValidation(e: ChangeEvent<HTMLInputElement>) {
    // @ts-ignore
    setFormIsValid(e.target.closest('.form')!.checkValidity() && password);
  }
  const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    const field = e.target.name;
    const value = e.target.value;
    dispatch(setProfileInfoForm({field, value}));
    handleFormValidation(e);
    setIsModified(true);
  }
  const handleFormSubmit = (e: SyntheticEvent<Element, Event>) => {
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