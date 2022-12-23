import styles from './page-with-form.module.css';
import PropTypes from "prop-types";
import {FC, ReactNode} from "react";

interface IPageWithForm {
  children: ReactNode
}

export const PageWithForm: FC<IPageWithForm> = ({children}): JSX.Element => {
  return (
  <section className={`${styles.page}`}>
    <div className={`${styles.container}`}>
      {children}
    </div>
  </section>
  )
}

PageWithForm.propTypes = {
  children: PropTypes.node.isRequired
}