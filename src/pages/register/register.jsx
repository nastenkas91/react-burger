import styles from './register.module.css';
import {Input, PasswordInput, EmailInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {NavLink} from "react-router-dom";
import {useInputChange} from "../../utils/hooks";
import {PageWithForm} from "../page-with-form/page-with-form";
import {Form} from "../../components/form/form";

export const Register = () => {
  const {values, formIsValid, handleChange} = useInputChange({})

  return (
    <PageWithForm>
      <Form formIsValid={formIsValid} formTitle={'Регистрация'} buttonTitle={'Зарегистрироваться'}>
        <Input
          type={'text'}
          placeholder={'Имя'}
          extraClass={`mb-6`}
          name={'name'}
          value={values['name'] || ''}
          onChange={handleChange}
        />
        <EmailInput
          extraClass={`mb-6`}
          name={'email'}
          value={values['email'] || ''}
          onChange={handleChange}
        />
        <PasswordInput
          extraClass={`mb-6`}
          name={'password'}
          value={values['password'] || ''}
          icon={'ShowIcon'}
          onChange={handleChange}
        />
      </Form>
      <p className={`${styles.text} text text_type_main-default text_color_inactive mb-4`}>
        Уже зарегистрированы?
        <NavLink className={`${styles.link} text text_color_accent`} to={'/login'}> Войти</NavLink>
      </p>
    </PageWithForm>

  )
}