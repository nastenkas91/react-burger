import styles from './ingredient-details.module.css'
import {ingredientPropTypes} from "../../utils/types";

export function IngredientDetails({item}) {
  IngredientDetails.propTypes = {
    item: ingredientPropTypes,
  }
  const {image, name, proteins, fat, carbohydrates, calories} = item;

  return (
    <div className={`${styles.ingridient__container}`}>
      <img src={image} className={`${styles.ingridient__image}`}/>
      <h3 className={`text text_type_main-medium mt-4 mb-8`}>{name}</h3>
      <ul className={`${styles.ingridient__nutrition}`}>
        <li className={`${styles.ingridient__value}`}>
          <span className={`text text_type_main-default mb-2`}>Калории,ккал</span>
          <span className={`text text_type_digits-default`}>{calories}</span>
        </li>
        <li className={`${styles.ingridient__value}`}>
          <span className={`text text_type_main-default mb-2`}>Белки, г</span>
          <span className={`text text_type_digits-default`}>{proteins}</span>
        </li>
        <li className={`${styles.ingridient__value}`}>
          <span className={`text text_type_main-default mb-2`}>Жиры, г</span>
          <span className={`text text_type_digits-default`}>{fat}</span>
        </li>
        <li className={`${styles.ingridient__value}`}>
        <span className={`text text_type_main-default mb-2`}>Углеводы, г</span>
        <span className={`text text_type_digits-default`}>{carbohydrates}</span>
      </li>

      </ul>
    </div>
  )
}