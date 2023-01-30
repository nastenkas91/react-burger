import styles from './forgot-password.module.css';
import {EmailInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {NavLink, useHistory} from "react-router-dom";
import {PageWithForm} from "../page-with-form/page-with-form";
import {Form} from "../../components/form/form";
import {useDispatch, useSelector} from "../../utils/hooks";
import {ChangeEvent, FC, SyntheticEvent, useState} from "react";
import {resetPassword} from "../../services/actions/auth";
import {setResetPasswordForm} from "../../services/actionCreators/auth";
import {Spinner} from "../../components/spinner/spinner";

export const ForgotPassword: FC = (): JSX.Element => {
  const history = useHistory();
  const dispatch = useDispatch();
  const {email} = useSelector(state => state.resetPasswordReducer.forgotForm)
  const {forgotRequest, error} = useSelector(state => state.resetPasswordReducer);
  const [formIsValid, setFormIsValid] = useState(false);

  function handleFormValidation(e: ChangeEvent<HTMLInputElement>) {
    // @ts-ignore
    setFormIsValid(e.target.closest('.form')!.checkValidity());
  }
  const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setResetPasswordForm(e.target.name, e.target.value));
    handleFormValidation(e);
  }
  const handleFormSubmit = (e: SyntheticEvent<Element, Event>) => {
    e.preventDefault();
    dispatch(resetPassword(email
    ));
    history.push({
      pathname: '/reset-password',
      state: {from: '/forgot-password'}
    })
  }

  return (
    <PageWithForm>
      <Form
        formIsValid={formIsValid}
        formTitle={'Восстановление пароля'}
        buttonTitle={'Восстановить'}
        onSubmit={handleFormSubmit}
      >
        <EmailInput
          extraClass={`mb-6`}
          name={'email'}
          value={email || ''}
          placeholder={'Укажите e-mail'}
          onChange={handleFormChange}
        />
        {
          error && <p className={`${styles.text} text text_type_main-default text_color_error mb-4`}>{error}</p>
        }
      </Form>
      <p className={`${styles.text} text text_type_main-default text_color_inactive mb-4`}>
        Вспомнили пароль?
        <NavLink className={`${styles.link} text text_color_accent`} to={'/login'}> Войти</NavLink>
      </p>
      {
        forgotRequest &&
        <Spinner />
      }
    </PageWithForm>

  )
}