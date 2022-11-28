import styles from './page-with-form.module.css';

export const PageWithForm = ({children}) => {
  return (
  <section className={`${styles.page}`}>
    <div className={`${styles.container}`}>
      {children}
    </div>
  </section>
  )
}