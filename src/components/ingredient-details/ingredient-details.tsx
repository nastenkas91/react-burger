import styles from './ingredient-details.module.css';
import {useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "../../utils/hooks";
import {TIngredient} from "../../utils/types";
import {useEffect} from "react";
import {setCurrentIngredient} from "../../services/actionCreators/ingredients";

export function IngredientDetails() {
  const location = useLocation();
  const dispatch = useDispatch();
  const ingredientId = location.pathname.split('/')[2];
  const {ingredients, currentIngredient} = useSelector(state => state.ingredients);

  useEffect(() => {
    dispatch(setCurrentIngredient(ingredients.find((el: TIngredient) => el._id === ingredientId)!))
  }, [ingredients])

  return (
    <div data-testid="modal-ingredient"  className={`${styles.ingridient__container}`}>
      {currentIngredient &&
        <>
          <img src={currentIngredient.image} className={`${styles.ingridient__image}`}/>
          <h3 className={`text text_type_main-medium mt-4 mb-8`}>{currentIngredient.name}</h3>
          <ul className={`${styles.ingridient__nutrition}`}>
            <li className={`${styles.ingridient__value}`}>
              <span className={`text text_type_main-default mb-2`}>Калории,ккал</span>
              <span className={`text text_type_digits-default`}>{currentIngredient.calories}</span>
            </li>
            <li className={`${styles.ingridient__value}`}>
              <span className={`text text_type_main-default mb-2`}>Белки, г</span>
              <span className={`text text_type_digits-default`}>{currentIngredient.proteins}</span>
            </li>
            <li className={`${styles.ingridient__value}`}>
              <span className={`text text_type_main-default mb-2`}>Жиры, г</span>
              <span className={`text text_type_digits-default`}>{currentIngredient.fat}</span>
            </li>
            <li className={`${styles.ingridient__value}`}>
              <span className={`text text_type_main-default mb-2`}>Углеводы, г</span>
              <span className={`text text_type_digits-default`}>{currentIngredient.carbohydrates}</span>
            </li>
          </ul>
        </>
      }
    </div>
  )
}
