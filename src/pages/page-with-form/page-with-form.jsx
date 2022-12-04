import styles from './page-with-form.module.css';
import PropTypes from "prop-types";

export const PageWithForm = ({children}) => {
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