import styles from './ingredient.module.css'
import {IngredientDetails} from "../../components/ingredient-details/ingredient-details";

export const Ingredient = () => {

  return (
    <section className={`${styles.page}`}>
      {/*<div className={`${styles.container}`}>*/}
        <h2 className={`text text_type_main-large`}>Детали ингредиента</h2>
        <IngredientDetails />
      {/*</div>*/}
    </section>
  )
}
