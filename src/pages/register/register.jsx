import styles from './register.module.css';
import {Input, PasswordInput, EmailInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {NavLink, useHistory} from "react-router-dom";
import {PageWithForm} from "../page-with-form/page-with-form";
import {Form} from "../../components/form/form";
import {setRegistrationForm} from "../../services/actionCreators/auth";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {register} from "../../services/actions/auth";

export const Register = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {name, email, password} = useSelector(state => state.registrationReducer.form)
  const [formIsValid, setFormIsValid] = useState(false);

  function handleFormValidation(e) {
    setFormIsValid(e.target.closest('.form').checkValidity());
  }
  const handleFormChange = (e) => {
    dispatch(setRegistrationForm(e.target.name, e.target.value));
    handleFormValidation(e);
  }
  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(register({
        "email": email,
        "password": password,
        "name": name
      }
    ));
    history.replace('/')
  }

  return (
    <PageWithForm>
      <Form
        formIsValid={formIsValid}
        formTitle={'Регистрация'}
        buttonTitle={'Зарегистрироваться'}
        onSubmit={handleFormSubmit}
      >
        <Input
          type={'text'}
          placeholder={'Имя'}
          extraClass={`mb-6`}
          name={'name'}
          value={name}
          onChange={handleFormChange}
          required={true}
        />
        <EmailInput
          extraClass={`mb-6`}
          name={'email'}
          value={email}
          onChange={handleFormChange}
          required={true}
        />
        <PasswordInput
          extraClass={`mb-6`}
          name={'password'}
          value={password}
          icon={'ShowIcon'}
          onChange={handleFormChange}
          required={true}
        />
      </Form>
      <p className={`${styles.text} text text_type_main-default text_color_inactive mb-4`}>
        Уже зарегистрированы?
        <NavLink className={`${styles.link} text text_color_accent`} to={'/login'}> Войти</NavLink>
      </p>
    </PageWithForm>

  )
}