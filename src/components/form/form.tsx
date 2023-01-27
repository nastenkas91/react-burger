import styles from './form.module.css';
import {Button} from "@ya.praktikum/react-developer-burger-ui-components";
import {FC, ReactNode, SyntheticEvent} from "react";

interface FormProps {
  formTitle: string,
  buttonTitle: string,
  formIsValid: boolean,
  onSubmit: (e: SyntheticEvent) => void,
  children: ReactNode
}

export const Form: FC<FormProps> = ({formTitle, children, buttonTitle, formIsValid, onSubmit}): JSX.Element => {

  return (
    <form className={`${styles.form} form`} onSubmit={onSubmit}>
      <h2 className={`${styles.form__title} text text_type_main-medium mb-6`}>{formTitle}</h2>
      {children}
      <Button
        extraClass={`${styles.form__submitBtn} mb-20`}
        htmlType={"submit"}
        type={'primary'}
        disabled={!formIsValid}
        data-testid='auth-form-button'
      >
        {buttonTitle}
      </Button>
    </form>
  )
}