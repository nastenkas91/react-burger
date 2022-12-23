import styles from './ingredient.module.css'
import {IngredientDetails} from "../../components/ingredient-details/ingredient-details";
import {FC} from "react";

export const Ingredient: FC = (): JSX.Element => {

  return (
    <section className={`${styles.page}`}>
      <h2 className={`text text_type_main-large`}>Детали ингредиента</h2>
      <IngredientDetails />
    </section>
  )
}
